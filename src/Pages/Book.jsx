import React, { useEffect, useState, useRef } from "react";
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
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

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

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);
  const handleRewind = () => {
    if (audioRef.current) {
      const newTime = Math.max(0, audioRef.current.currentTime - 10);
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    }
  };
  
  const handleForward = () => {
    if (audioRef.current) {
      const newTime = Math.min(duration, audioRef.current.currentTime + 10);
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    }
  };

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
    setIsPlaying((prev) => !prev);
  };

  const handleAudioLoad = () => {
    setCurrentTime(0);
    setDuration(audioRef.current.duration);
  };

  const handleDurationChange = () => {
    setDuration(audioRef.current.duration);
  };

  const handleAudioEnded = () => {
    togglePlayPause();
    setCurrentTime(0);
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
                  onClick={handleRewind}
                className="audio-btn-control"
              >
                <MdReplay10 />
              </button>
              <button
                className="audio-btn-control audio-btn-play"
                onClick={togglePlayPause}
              >
                {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
              </button>
              <button
                onClick={handleForward}
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
              onChange={(e) => {
                const newTime = parseFloat(e.target.value);
                setCurrentTime(newTime);
                audioRef.current.currentTime = newTime;
              }}
            />
            <div className="audio-length-time">{formatTime(duration)}</div>
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={audioSrc}
        controls={true}
        onLoadedMetadata={() => {
          setDuration(audioRef.current?.duration || 0);
        }}
        onEnded={handleAudioEnded}
      />
    </>
  );
};
