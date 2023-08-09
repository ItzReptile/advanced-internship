import React, { useEffect, useState } from "react";
import { LeftBar } from "../Components/Global/LeftBar";
import { SearchNav } from "../Components/Global/SearchNav";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import { IoIosTimer } from "react-icons/io";
import { Skelly } from "../Components/Global/Skelly";
import axios from "axios";

export const ForYou = () => {
  const [bookData, setBookData] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [suggested, setSuggested] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const displayCount = new Array(5).fill(null);
  const stateSetters = {
    setBookData,
    setBooksData,
    setSuggested,
  };

  const endpoints = [
    { status: "selected", stateSetter: "setBookData" },
    { status: "recommended", stateSetter: "setBooksData" },
    { status: "suggested", stateSetter: "setSuggested" },
  ];

  const fetchData = async (endpoint, stateSetter) => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBooks?status=${endpoint.status}`
        );
        stateSetter(response.data);
      } catch (error) {
        console.error(
          `Error fetching book data for ${endpoint.status}:`,
          error
        );
      }

      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    endpoints.forEach((endpoint) =>
      fetchData(endpoint, stateSetters[endpoint.stateSetter])
    );
  }, []);

  return (
    <>
      <div className="wrapper">
        <SearchNav />
        <LeftBar />
        <div className="for-you-wrapper">
          <div className="container">
            <div className="row">
              <div className="for-you-header">
                {isLoading ? (
                  <div>
                    <h2 className="for-you-title"><Skelly width={150} height={20}/> </h2>
                    <Skelly width={700} height={200} />
                  </div>
                ) : (
                  bookData.map((book, index) => (
                    <>
                      <h2 className="for-you-title">Selected just for you</h2>
                      <a className="for-you-book" href={book.id}>
                        <div className="for-you-book-left">
                          <h3 className="for-you-book-subtitle">
                            {book.subTitle}
                          </h3>
                        </div>
                        <div className="for-you-slicer"></div>
                        <div className="right-book-container" key={index}>
                          <figure className="for-you-book-img-wrapper">
                            <img
                              className="for-you-book-img"
                              src={book.imageLink}
                            />
                          </figure>
                          <div className="for-you-book-right">
                            <h3 className="for-you-book-right-title">
                              {book.title}
                            </h3>
                            <h5 className="for-you-book-right-author">
                              {book.author}
                            </h5>
                            <div className="for-you-media">
                              <i className="for-you-media-icon">
                                <AiFillPlayCircle />
                              </i>
                              <h3 className="for-you-media-duration">
                                3 min 40 secs
                              </h3>
                            </div>
                          </div>
                        </div>
                      </a>
                    </>
                  ))
                )}
              </div>
              <div className="for-you-section">
                <div className="for-you-section-text-wrapper">
                  <h1 className="for-you-section-title">Recommended For You</h1>
                  <h3 className="for-you-section-subtitle">
                    We think you'll like these
                  </h3>
                </div>
                <div className="for-you-books-display">
                  {isLoading
                    ? displayCount.map((_, index) => (
                        <div className="for-you-books-wrapper" key={index}>
                          <Skelly width={150} height={225} />
                          <h3 className="for-you-books-title">
                            <Skelly width={75} height={10} />
                          </h3>
                          <h5 className="for-you-books-author">
                            <Skelly width={50} height={10} />
                          </h5>
                          <h5 className="for-you-books-subtitle">
                            <Skelly width={100} height={25} />
                          </h5>
                          <div className="for-you-books-length-wrapper">
                            <i className="for-you-books-icons">
                              <Skelly width={65} height={10} />
                            </i>
                          </div>
                        </div>
                      ))
                    : booksData.slice(0, 5).map((books, index) => (
                        <a  href={books.id} className="for-you-books-wrapper"  key={index}>
                          {books.subscriptionRequired && (
                            <div className="premium">Premium</div>
                          )}
                          <figure className="for-you-book-img-wrappers">
                            <img
                              className="for-you-book-img"
                              src={books.imageLink}
                              alt=""
                            />
                          </figure>
                          <h3 className="for-you-books-title">{books.title}</h3>
                          <h5 className="for-you-books-author">
                            {books.author}
                          </h5>
                          <h5 className="for-you-books-subtitle">
                            {books.subTitle}
                          </h5>
                          <div className="for-you-books-length-wrapper">
                            <i className="for-you-books-icons">
                              <IoIosTimer />
                            </i>
                            <h5 className="for-you-books-duration">03:24</h5>
                            <i className="for-you-books-icons">
                              <AiFillStar />
                            </i>
                            <h5 className="for-you-books-ratings">
                              {books.averageRating}
                            </h5>
                          </div>
                        </a>
                      ))}
                </div>
              </div>

              <div className="for-you-section">
                <div className="for-you-section-text-wrapper">
                  <h1 className="for-you-section-title">Suggested Books</h1>
                  <h3 className="for-you-section-subtitle">
                    Browse those books
                  </h3>
                </div>
                <div className="for-you-books-display">
                  {isLoading
                    ? displayCount.map((_, index) => (
                        <div className="for-you-books-wrapper" key={index}>
                          <Skelly width={150} height={225} />
                          <h3 className="for-you-books-title">
                            <Skelly width={75} height={10} />
                          </h3>
                          <h5 className="for-you-books-author">
                            <Skelly width={50} height={10} />
                          </h5>
                          <h5 className="for-you-books-subtitle">
                            <Skelly width={100} height={25} />
                          </h5>
                          <div className="for-you-books-length-wrapper">
                            <i className="for-you-books-icons">
                              <Skelly width={65} height={10} />
                            </i>
                          </div>
                        </div>
                      ))
                    : suggested.slice(0, 5).map((books, index) => (
                        <a href={books.id} className="for-you-books-wrapper" key={index}>
                          {books.subscriptionRequired && (
                            <div className="premium">Premium</div>
                          )}
                          <figure className="for-you-book-img-wrappers">
                            <img
                              className="for-you-book-img"
                              src={books.imageLink}
                              alt=""
                            />
                          </figure>
                          <h3 className="for-you-books-title">{books.title}</h3>
                          <h5 className="for-you-books-author">
                            {books.author}
                          </h5>
                          <h5 className="for-you-books-subtitle">
                            {books.subTitle}
                          </h5>
                          <div className="for-you-books-length-wrapper">
                            <i className="for-you-books-icons">
                              <IoIosTimer />
                            </i>
                            <h5 className="for-you-books-duration">03:24</h5>
                            <i className="for-you-books-icons">
                              <AiFillStar />
                            </i>
                            <h5 className="for-you-books-ratings">
                              {books.averageRating}
                            </h5>
                          </div>
                        </a>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
