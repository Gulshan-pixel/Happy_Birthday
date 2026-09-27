import { useNavigate } from "react-router-dom";
import { useState } from "react";

const emojis = ["💖", "✨", "🌸", "💕", "🎀", "🌷"];

const floatingEmojis = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  emoji: emojis[i % emojis.length],
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 3,
  duration: 2 + Math.random() * 3,
}));

const Second = () => {
  const navigate = useNavigate();
  const [reason, setReason] = useState(0);

  const paragraphs = [
    "🌟 You’re such a kind and wonderful person, and I feel lucky to share such a good bond with you. 💖",

    "💗 May your day be filled with love, laughter, and endless joy. 🌸",

    "💕 Wishing you success, happiness, and everything your heart desires. ✨",

    "🌟 Stay the amazing girl you are—always spreading positivity around. Have the happiest year ahead! 🥳",
  ];

  const handleClick = () => {
    if (reason < paragraphs.length) {
      setReason((prev) => prev + 1);
    } else {
      navigate("/Third");
    }
  };

  return (
    <div
      className="
        min-h-screen
        relative
        overflow-hidden
        bg-[linear-gradient(135deg,#FFF1F8,#FCE4F3,#EEE6FF,#F3F2FF,#E8FFF7)]
        bg-size-[400%_400%]
        animate-gradient
      "
    >
      {/* Background Emojis */}
      <div className="emoji-bg pointer-events-none">
        {floatingEmojis.map((item) => (
          <span
            key={item.id}
            className="emoji"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
            }}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          mt-16
          gap-8
          px-4
        "
      >
        <h1
          className="
            flex
            flex-col
            items-center
            justify-center
            charm-bold
            heading
            text-4xl
            lg:text-5xl
            font-bold
            text-pink-600
            animate-[bounce_3s_infinite]
            text-center
          "
        >
          Happy Birthday

          <span className="mt-4">
            Name 💖
          </span>
        </h1>

        {paragraphs.slice(0, reason).map((paragraph, index) => (
          <p
            key={index}
            className="
              bg-white
              rounded-3xl
              shadow-2xl
              px-5
              py-4
              min-h-24
              w-full
              lg:w-2/4
              flex
              items-center
              justify-center
              text-black
              text-center
              animate-[fadein_0.6s_ease-out]
            "
          >
            {paragraph}
          </p>
        ))}

        <button
          onClick={handleClick}
          className="
            border-2
            border-pink-400
            bg-pink-400
            text-white
            font-bold
            rounded-full
            px-5
            py-2
            text-xl
            sm:text-2xl
            cursor-pointer
            charm-regular
            shadow-2xl
            shadow-pink-400
            transition-all
            duration-300
            hover:scale-105
            hover:bg-pink-500
          "
        >
          {reason < paragraphs.length
            ? "Click Here...💕"
            : "Enter Our Storyline💕"}
        </button>

        <p className="mt-3 mb-12 text-sm text-pink-500">
          Reason {Math.min(reason, paragraphs.length)} of {paragraphs.length}
        </p>
      </div>
    </div>
  );
};

export default Second;