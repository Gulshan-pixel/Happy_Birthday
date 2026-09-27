import { Routes, Route } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import First from "./First";
import Second from "./Second";
import Third from "./Third";

import music1 from "./assets/audio/Jeene Laga Hoon Instrumental.mp3";

function App() {
  const audioRef = useRef(null);

  const [showMusicModal, setShowMusicModal] = useState(true);

  // Music starts at 0:12
  const START_TIME = 12;

  // Music stops at 1:30
  const END_TIME = 90;

  const startMusic = async () => {
    if (!audioRef.current) return;

    try {
      // Start from 0:12
      audioRef.current.currentTime = START_TIME;

      await audioRef.current.play();

      // Close modal
      setShowMusicModal(false);
    } catch (error) {
      console.error("Music could not start:", error);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= END_TIME) {
        audio.pause();

        // Reset back to 0:12
        audio.currentTime = START_TIME;
      }
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={music1}
        preload="auto"
      />

      <Routes>
        <Route
          path="/"
          element={
            <First
              startMusic={startMusic}
              showMusicModal={showMusicModal}
            />
          }
        />

        <Route path="/Second" element={<Second />} />

        <Route path="/Third" element={<Third />} />
      </Routes>
    </>
  );
}

export default App;