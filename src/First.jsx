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

    // Random horizontal starting position
    left: Math.random() * 100,

    // Random size
    size: 20 + Math.random() * 25,

    // Random animation speed
    duration: 12 + Math.random() * 6,

    // Random starting delay
    delay: 1,
}));

const First = ({ toggleMusic, isPlaying }) => {
    const text =
        "Hey You Know What! You're the most adorable human i ever met!💖";

    const [displayText, setDisplayText] = useState("");

    // Letter-by-letter text animation
    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index++;

            if (index === text.length) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="
                min-h-screen
                flex
                items-center
                justify-between
                fixed
                inset-0
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
                        -bottom-12.5
                        animate-float
                        text-xl
                        sm:text-2xl
                        md:text-3xl
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
                        lg:text-5xl
                        text-4xl
                        charm-bold
                        text-pink-500
                        tracking-[0.6rem]
                        text-center
                        mx-4
                        sm:mx-8
                        lg:mx-16
                    "
                >
                    HAPPY BIRTHDAY [NAME]💕
                </h1>


                {/* Typing Text */}
                <h2
                    className="
                        mx-4
                        sm:mx-8
                        lg:mx-16
                        text-purple-400
                        text-[1.1rem]
                        font-semibold
                        text-center
                        max-w-2xl
                    "
                >
                    {displayText}
                </h2>


                {/* Enter Button */}
                <Link
                    to="/second"
                    className="
                        z-10
                        mx-auto
                        border-2
                        rounded-full
                        px-12
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
                MUSIC BUTTON
            ========================================= */}
            <button
                onClick={toggleMusic}
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

                    hover:scale-110
                    active:scale-95

                    transition-transform
                    duration-300
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