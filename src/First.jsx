import "./App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const emojis = [
  "🌸",
  "💗",
  "✨",
  "🎀",
  "💕",
  "🌷",
  "💫",
  "🦋",
];

const floatingEmojis = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  emoji: emojis[index % emojis.length],
  left: Math.random() * 100,
  size: 20 + Math.random() * 25,
  duration: 12 + Math.random() * 6,
  delay: Math.random() * 8,
}));

const First = ({ toggleMusic, isPlaying }) => {
  const text =
    "Hey You Know What! You're the most adorable human I ever met!💖";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed inset-0
        min-h-screen
        overflow-hidden
        flex items-center justify-center
        cursor-context-menu

        bg-[linear-gradient(135deg,#FFF1F8,#FCE4F3,#EEE6FF,#F3F2FF,#E8FFF7)]
        bg-size-[400%_400%]
        animate-gradient
      "
    >
      {/* Floating Emojis */}
      {floatingEmojis.map((item) => (
        <span
          key={item.id}
          className="
            absolute
            -bottom-12
            animate-float
            pointer-events-none
          "
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {item.emoji}
        </span>
      ))}

      {/* Main Content */}
      <div
        className="
          w-full
          flex
          flex-col
          items-center
          justify-center
          gap-6
          px-4
        "
      >
        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            charm-bold
            text-pink-500
            tracking-[0.3rem]
            sm:tracking-[0.6rem]
            text-center
          "
        >
          HAPPY BIRTHDAY [NAME]💕
        </h1>

        <h2
          className="
            text-purple-400
            text-[1rem]
            sm:text-[1.1rem]
            font-semibold
            text-center
            max-w-2xl
            px-4
          "
        >
          {displayText}
        </h2>

        <Link
          to="/second"
          className="
            z-10
            border-2
            rounded-full
            px-10
            sm:px-12
            py-2
            bg-pink-400
            border-pink-400
            text-white
            font-bold
            cursor-pointer
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500
          "
        >
          Click to Enter
        </Link>
      </div>

      {/* Music Button */}
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="
          fixed
          top-4
          right-4
          z-9999
          w-11
          h-11
          flex
          items-center
          justify-center
          border-2
          border-black
          rounded-full
          bg-white/70
          backdrop-blur-sm
          shadow-md
          cursor-pointer
          transition-transform
          duration-300
          hover:scale-110
          active:scale-95
        "
      >
        {isPlaying ? (
          <Volume2 size={20} />
        ) : (
          <VolumeX size={20} />
        )}
      </button>
    </div>
  );
};

export default First;