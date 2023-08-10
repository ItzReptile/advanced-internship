import React, { useEffect, useState } from "react";
import { SearchNav } from "../Components/Global/SearchNav";
import { LeftBar } from "../Components/Global/LeftBar";
import axios from "axios";
import { MdReplay10, MdForward10 } from "react-icons/md";
import { AiFillPlayCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";

export const Book = () => {
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
      <SearchNav />
      <LeftBar />
      <div className="book-info-wrapper">
        <div className="container">
          <div className="row">
            <h2 className="book-info-title">{bookData.title}</h2>
            <p className="book-info-summary">{bookData.summary}</p>
          </div>
        </div>
        <div className="audio-wrapper">
          <div className="audio-track">
            <figure className="audio-track-img-wrapper">
              <img
                className="audio-track-img"
                src={bookData.imageLink}
                alt=""
              />
            </figure>
            <div className="audio-track-text">
              <h1 className="audio-track-title">{bookData.title}</h1>
              <h4 className="audio-track-author">{bookData.author}</h4>
            </div>
          </div>
          <div className="audio-btns">
            <div className="audio-btns-wrapper">
              <button className="audio-btn-control">
                <MdReplay10 />
              </button>
              <button className="audio-btn-control audio-btn-play">
                <AiFillPlayCircle />
              </button>
              <button className="audio-btn-control">
                <MdForward10 />
              </button>
            </div>
          </div>
          <div className="audio-length">
            <div className="audio-length-time">00:00</div>
            <input type="range" className="audio-length-duration" />
            <div className="audio-length-time">3:34</div>
          </div>
        </div>
      </div>
    </>
  );
};
