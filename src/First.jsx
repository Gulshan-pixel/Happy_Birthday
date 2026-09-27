import "./App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

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

  duration: 12 + Math.random() * 35,

  delay: Math.random() * 8,
}));

const First = ({ startMusic, showMusicModal }) => {
  const text =
    "Hey You Know What! You're the most adorable human I ever met!💖";

  const [displayText, setDisplayText] = useState("");

  // Letter-by-letter animation
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
        fixed
        inset-0
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        cursor-context-menu

        bg-[linear-gradient(135deg,#FFF1F8,#FCE4F3,#EEE6FF,#F3F2FF,#E8FFF7)]
        bg-size-[400%_400%]
        animate-gradient
      "
    >

      {/* =========================================
          FLOATING EMOJIS
      ========================================= */}

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


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

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

        {/* Birthday Heading */}

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


        {/* Typing Text */}

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


        {/* Enter Button */}

        <Link
          to="/Second"
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


      {/* =========================================
          MUSIC MODAL
      ========================================= */}

      {showMusicModal && (
        <div
          className="
            fixed
            inset-0
            z-9999

            flex
            items-center
            justify-center

            bg-black/30
            backdrop-blur-sm

            px-5
          "
        >

          <div
            className="
              w-full
              max-w-sm

              rounded-3xl

              bg-white/90
              backdrop-blur-md

              shadow-2xl

              p-7

              text-center

              border
              border-pink-200

              animate-[fadein_0.5s_ease-out]
            "
          >

            {/* Music Icon */}

            <div
              className="
                mx-auto
                mb-4

                w-16
                h-16

                flex
                items-center
                justify-center

                rounded-full

                bg-pink-100

                text-3xl
              "
            >
              🎵
            </div>


            {/* Title */}

            <h2
              className="
                text-2xl
                font-bold
                text-pink-500
                charm-bold
              "
            >
              A Little Music? 💕
            </h2>


            {/* Description */}

            <p
              className="
                mt-3
                text-gray-600
                text-sm
                leading-relaxed
              "
            >
              This little surprise is better with some music.
              Would you like to start the music? 🎀
            </p>


            {/* Start Button */}

            <button
              onClick={startMusic}
              className="
                mt-6

                w-full

                rounded-full

                bg-pink-400
                hover:bg-pink-500

                text-white
                font-bold

                py-3

                cursor-pointer

                transition-all
                duration-300

                hover:scale-105
                active:scale-95

                shadow-lg
                shadow-pink-300
              "
            >
              Start with Music 🎵
            </button>

          </div>

        </div>
      )}

    </div>
  );
};

export default First;