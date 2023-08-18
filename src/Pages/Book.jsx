import React, { useEffect, useState ,useRef} from "react";
import { SearchNav } from "../Components/Global/SearchNav";
import { LeftBar } from "../Components/Global/LeftBar";
import axios from "axios";
import { MdReplay10, MdForward10 } from "react-icons/md";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";

export const Book = () => {
  const { id } = useParams();
  const [audioSrc, setAudioSrc] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [bookData, setBookData] = useState({});
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null)
  async function fetchBookID() {
    try {
      const response = await axios.get(
        `https://us-central1-summaristt.cloudfunctions.net/getBook?id=${id}`
      );
      setAudioSrc(response.data.audioLink);
      setBookData(response.data);
      console.log(response.data.audioLink);
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  }
  useEffect(() => {
    fetchBookID();
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      audioElement.addEventListener("canplaythrough", handleAudioLoad);
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("durationchange", handleDurationChange);

      return () => {
        audioElement.removeEventListener("canplaythrough", handleAudioLoad);
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener(
          "durationchange",
          handleDurationChange
        );
      };
    }
  }, []);
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  const handleAudioLoad = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
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
              <button
                onClick={() => console.log("rewind button clicked")}
                className="audio-btn-control"
              >
                <MdReplay10 />
              </button>
              <button
                onClick={togglePlay}
                className="audio-btn-control audio-btn-play"
              >
                {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
              </button>
              <button
                onClick={() => console.log("forward bytton clicked")}
                className="audio-btn-control"
              >
                <MdForward10 />
              </button>
            </div>
          </div>
          <div className="audio-length">
            <div className="audio-length-time">{formatTime(currentTime)}</div>
            <input
          type="range"
          className="audio-length-duration"
          value={currentTime}
          max={duration}
          onChange={(e) => (audioRef.current.currentTime = e.target.value)}
        />
            <div className="audio-length-time">{formatTime(duration)}</div>
          </div>
        </div>
      </div>
      <audio src={audioSrc} controls={true} autoPlay={isPlaying}></audio>
    </>
  );
};
