import { Routes, Route, } from "react-router-dom";
import First from "./first";
import Second from "./second";
import Third from "./Third";
import music1 from "../public/audio/Jeene Laga Hoon Instrumental.mp3"
// import music2 from "../public/audio/Tujhme Rab Dikhta Hai Instrumental Ringtone Mp3 Download.mp3"
import { useRef, useState } from "react";


function App() {

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async() => {
    if(isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false)
    }
    else {
      await audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={music1} type="audio/mpeg"/>
      </audio>
      <Routes>
        <Route path="/" element={<First toggleMusic={toggleMusic} isPlaying={isPlaying}/>} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
    </>
  );
}

export default App;
// min-h-screen bg-[linear-gradient(135deg,#FFF1F8,#FCE4F3,#EEE6FF,#F3F2FF,#E8FFF7)] bg-size-[400%_400%] animate-gradient