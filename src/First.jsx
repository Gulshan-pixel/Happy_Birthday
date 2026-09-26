import './App.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const emojis = ["🌸", "💗", "✨", "🎀", "💕", "🌷", "💫","🦋"];

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

const First = ({startMusic}) => {

    const text = "Hey You Know What! You're the most adorable human i ever met!💖";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setDisplayText(text.slice(0, index + 1));
            index++;

            if (index === text.length) {
                clearInterval(interval);
            }
        }, 100
        );

        return () => clearInterval(interval)
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(135deg,#FFF1F8,#FCE4F3,#EEE6FF,#F3F2FF,#E8FFF7)] bg-size-[400%_400%] animate-gradient fixed inset-0 overflow-hidden cursor-context-menu">
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

            <div className='flex flex-col items-center justify-center gap-6'>
                <h1 className='lg:text-5xl text-4xl charm-bold text-pink-500 tracking-[0.6rem] mx-16'>HAPPY BIRTHDAY [NAME]💕</h1>
                <h2 className='mx-16 text-purple-400 text-[1.1rem] font-semibold'>{displayText}</h2>
                <Link to="/second" onClick={startMusic} className='z-10 mx-auto border-2 rounded-full px-12 py-2 bg-pink-400 border-pink-400 text-white font-bold cursor-pointer '>Click to Enter</Link>
            </div>
        </div>
    )
}

export default First
