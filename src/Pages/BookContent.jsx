import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiFillClockCircle } from "react-icons/ai";

import { BsFillMicFill, BsFillBookmarksFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { LeftBar } from "../Components/Global/LeftBar";
import { SearchNav } from "../Components/Global/SearchNav";

export const BookContent = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState({});
  async function fetchBookID() {
    try {
      const response = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );
      setBookData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  }
  useEffect(() => {
    fetchBookID();
  }, []);
  return (
    <>
      <LeftBar />
      <SearchNav />
      <div className="book-content">
        <div className="container">
          <div className="row">
            <div className="book-content-header">
              <div className="book-content-comprehensive">
                <h1 className="book-content-title"> {bookData.title}</h1>
                <h4 className="book-content-author">{bookData.author}</h4>
                <h2 className="book-content-subtitle">{bookData.subTitle}</h2>
                <div className="book-content-add">
                  <div className="book-content-add-wrapper">
                    <div className="book-content-wrapper">
                      <i className="book-content-icon">
                        <AiFillStar />
                      </i>
                      <h5 className="book-content-icon-text">
                        {bookData.averageRating} ({bookData.totalRating}{" "}
                        Ratings)
                      </h5>
                    </div>
                    <div className="book-content-wrapper">
                      <i className="book-content-icon">
                        <AiFillClockCircle />
                      </i>
                      <h5 className="book-content-icon-text">4:04</h5>
                    </div>
                    <div className="book-content-wrapper">
                      <i className="book-content-icon">
                        <BsFillMicFill />
                      </i>
                      <h5 className="book-content-icon-text">
                        {bookData.type}
                      </h5>
                    </div>
                    <div className="book-content-wrapper">
                      <i className="book-content-icon">
                        <FaRegLightbulb />
                      </i>
                      <h5 className="book-content-icon-text">
                        {bookData.keyIdeas} Key Ideas
                      </h5>
                    </div>
                  </div>
                </div>

                <div className="book-content-btn-wrappers">
                  <Link
                    to={`/player/${bookData.id}`}
                    className="book-content-btn"
                  >
                    <i className="book-content-icon">
                      <BiBookReader />
                    </i>
                    Read
                  </Link>
                  <Link
                    to={`/player/${bookData.id}`}
                    className="book-content-btn"
                  >
                    <i className="book-content-icon">
                      <BsFillMicFill />
                    </i>
                    Listen
                  </Link>
                </div>
                <div className="book-content-library">
                  <i className="book-content-icon">
                    <BsFillBookmarksFill />
                  </i>
                  <h2>Add Title To My Library</h2>
                </div>
                <h3 className="book-content-library-text">What's it about?</h3>
                <div className="book-content-btn-wrappers">
                  <Link
                    to={`/player/${bookData.id}`}
                    className="book-content-btn-library"
                  >
                    Communication Skills
                  </Link>
                  <Link
                    to={`/player/${bookData.id}`}
                    className="book-content-btn-library"
                  >
                    Technology & the Future
                  </Link>
                </div>

                <h5 className="book-content-description">
                  '{bookData.bookDescription}''
                </h5>
                <h3 className="book-content-author">About The author</h3>
                <h5 className="book-content-description">
                  {bookData.authorDescription}
                </h5>
              </div>
              <figure className="book-content-img-wrappers">
                <img
                  className="book-content-img"
                  src={bookData.imageLink}
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
