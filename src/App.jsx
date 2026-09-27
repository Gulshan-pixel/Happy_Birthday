import { Routes, Route } from "react-router-dom";
import { useRef, useState } from "react";

import First from "./First";
import Second from "./second";
import Third from "./Third";

import music1 from "./assets/audio/Jeene Laga Hoon Instrumental.mp3";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music could not start:", error);
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music1} loop />

      <Routes>
        <Route
          path="/"
          element={
            <First
              toggleMusic={toggleMusic}
              isPlaying={isPlaying}
            />
          }
        />

        <Route path="/second" element={<Second />} />

        <Route path="/Third" element={<Third />} />
      </Routes>
    </>
  );
}

export default App;