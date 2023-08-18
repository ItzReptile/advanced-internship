import { Controls } from "./Controls";
import DisplayTrack from "./DIsplayTrack";
import { ProgressBar } from "./ProgressBar";
import { useRef, useState } from "react";
import { tracks } from "./Track";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef();
  return (
    <div className="audio-player">
      <div className="inner">
        
      <DisplayTrack
          {...{ currentTrack, audioRef, setDuration, progressBarRef }}
        />
        <Controls
          {...{ audioRef, progressBarRef, duration, setTimeProgress }}
        />
         <ProgressBar
          {...{ progressBarRef, audioRef, timeProgress, duration }}
        />
      </div>
    </div>
  );
};
export default AudioPlayer;
