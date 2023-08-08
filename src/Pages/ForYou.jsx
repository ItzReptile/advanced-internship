import React, { useEffect, useState } from "react";
import { LeftBar } from "../Components/Global/LeftBar";
import { SearchNav } from "../Components/Global/SearchNav";
import { AiFillPlayCircle } from "react-icons/ai";
import axios from "axios";
export const ForYou = () => {
  const [bookData, setBookData] = useState([]);
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    async function fetchBookData() {
      try {
        const response = await axios.get(
          "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
        );
        setBookData(response.data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }

    fetchBookData();
  }, []);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const gather = await axios.get(
          `https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended`
        );
        setBooksData(gather.data);
        console.log(gather.data);
      } catch (error) {
        console.error("error fetcvhing book data:", error);
      }
    }
    fetchBooks();
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
                <h2 className="for-you-title">Selected just for you</h2>
                <a className="for-you-book" href="">
                  {bookData.map((book, index) => (
                    <>
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
                    </>
                  ))}
                </a>
              </div>
              <div className="for-you-section">
                <div className="for-you-section-text-wrapper">
                  <h1 className="for-you-section-title">Recommended For You</h1>
                  <h3 className="for-you-section-subtitle">
                    We think youl'll like these
                  </h3>
                </div>
                {booksData.map((books, index) => (
                  <div className="for-you-books-wrapper" key={index}>
                    <figure className="for-you-books-img-wrapper">
                      <img
                        className="for-you-book-img"
                        src={books.imageLink}
                        alt=""
                      />
                    </figure>
                    <h3 className="for-you-books-title">{books.title}</h3>
                    <h5 className="for-you-books-author">{books.author}</h5>
                    <div className="for-you-books-length-wrapper">
                      <i></i>
                      <h5 className="for-you-books-duration">03:24</h5>
                      <i></i>
                      <h5 className="for-you-books-ratings">
                        {books.averageRating}
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
