import axios from "axios";
import { Skelly } from "../Components/Global/Skelly";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiFillClockCircle } from "react-icons/ai";
import { PiFlagBannerBold, PiFlagBannerFill } from "react-icons/pi";
import { BsFillMicFill, BsFillBookmarksFill } from "react-icons/bs";
import { FaRegLightbulb } from "react-icons/fa";
import { BiBookReader } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { LeftBar } from "../Components/Global/LeftBar";
import { SearchNav } from "../Components/Global/SearchNav";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../Redux/LoginSlice";

export const BookContent = () => {
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [favBook, setfavBook] = useState(false);
  const [bookData, setBookData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const dispatch = useDispatch();


  const navigate = useNavigate()
  const handleFavBook = () => {
    setfavBook(!favBook);
  };


  const handleReadButtonClick = () => {
    if (!isLoggedIn) {
      dispatch(openModal());
    } else {
      navigate(`/player/${bookData.id}`);
    }
  };

  async function fetchBookID() {
    try {
      const response = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );
      setBookData(response.data);
      console.log(response.data);
      setisLoading(false);
    } catch (error) {
      console.error("Error fetching book data:", error);
      setisLoading(false);
    }
    setisLoading(false);
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
                {isLoading ? (
                  <>
                    <h1 className="book-content-title">
                      {" "}
                      <Skelly width={750} height={100} />{" "}
                    </h1>
                    <h4 className="book-content-author">
                      {" "}
                      <Skelly width={100} height={25} />
                    </h4>
                    <h2 className="book-content-subtitle">
                      <Skelly width={400} height={25} />
                    </h2>
                  </>
                ) : (
                  <>
                    <h1 className="book-content-title">{bookData.title}</h1>
                    <h4 className="book-content-author">{bookData.author}</h4>
                    <h2 className="book-content-subtitle">
                      {bookData.subTitle}
                    </h2>
                  </>
                )}
                {isLoading ? (
                  <>
                    <div className="book-content-add">
                      <div className="book-content-add-wrapper">
                        <div className="book-content-wrapper">
                          <Skelly width={250} height={50} />
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
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
                  </>
                )}

                {isLoading ? (
                  <>
                    <div className="book-content-btn-wrappers">
                      <Skelly width={100} height={50} />

                      <Skelly width={100} height={50} />
                    </div>
                  </>
                ) : (
                  <div className="book-content-btn-wrappers">
                    <div style={{cursor:"pointer"}}
                      onClick={handleReadButtonClick}
                      className="book-content-btn"
                    >
                      <i className="book-content-icon">
                        <BiBookReader />
                      </i>
                      Read
                    </div>
                    <div style={{cursor:"pointer"}}
                      onClick={handleReadButtonClick}
                      className="book-content-btn"
                    >
                      <i className="book-content-icon">
                        <BsFillMicFill />
                      </i>
                      Listen
                    </div>
                  </div>
                )}
                {isLoading ? (
                  <div className="book-content-library">
                    <Skelly width={250} height={25} />
                  </div>
                ) : (
                  <div
                    className="book-content-library"
                    onClick={handleFavBook}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="book-content-icon">
                      {favBook ? <PiFlagBannerFill /> : <PiFlagBannerBold />}
                    </i>
                    <h2>
                      {favBook
                        ? "Book Added To Library"
                        : "Add Title To My Library"}
                    </h2>
                  </div>
                )}

                {isLoading ? (
                  <>
                    {" "}
                    <h3 className="book-content-library-text">
                      <Skelly width={100} height={25} />
                    </h3>
                    <div className="book-content-btn-wrappers">
                      <Skelly width={200} height={50} />
                      <Skelly width={200} height={50} />
                    </div>
                    <h5 className="book-content-description">
                      <Skelly width={700} height={400} />
                    </h5>
                  </>
                ) : (
                  <>
                    <h3 className="book-content-library-text">
                      What's it about?
                    </h3>
                    <div className="book-content-btn-wrappers">
                      {bookData.tags &&
                        bookData.tags.map((tag, index) => (
                          <div
                            style={{ cursor: "no-drop" }}
                            key={index}
                            to={`/player/${bookData.id}`}
                            className="book-content-btn-library"
                          >
                            {tag}
                          </div>
                        ))}
                    </div>

                    <h5 className="book-content-description">
                      '{bookData.bookDescription}''
                    </h5>
                    <h3 className="book-content-author">About The author</h3>
                    <h5 className="book-content-description">
                      {bookData.authorDescription}
                    </h5>
                  </>
                )}
              </div>
              {isLoading ? (
                <figure className="book-content-img-wrappers">
                  <Skelly width={250} height={250} />
                </figure>
              ) : (
                <figure className="book-content-img-wrappers">
                  <img
                    className="book-content-img"
                    src={bookData.imageLink}
                    alt=""
                  />
                </figure>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
