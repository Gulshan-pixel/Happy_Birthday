import cat1 from "../src/assets/images/cat-cute-exclusive-sticker-and-logo-illustration-free-vector.jpg"
import cat2 from "../src/assets/images/cute-cartoon-cat-kitten-character-sitting-with-big-eyes-vector-illustration_839221-564.jpg"
import cat3 from "../src/assets/images/pngtree-adorable-cartoon-cat-sitting-with-big-eyes-and-blush-perfect-for-png-image_21032310.png"

const Third = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#e6e6fa] to-[#ffd1dc]">
      <div className="flex items-center justify-center flex-col">
        <h1 className="fleur-de-leah-regular text-pink-400 lg:text-6xl text-5xl mt-18 tracking-wide leading-tight text-center max-w-82 md:max-w-none mx-auto ">Our Beautiful Moments Together</h1>
        <h2 className="text-[1.3rem] text-gray-700 mt-6 mx-6 font-light">Every moment spent with you has been magical. Let's cherish these </h2>
        <p className="text-[1.3rem] text-gray-700 font-light">precious memories ...🎀</p>
      </div>

      <div className="md:h-120 lg:h-120 max-w-300 mx-auto mt-22.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 relative gap-8">
        <div className="memory-card shadow-2xl shadow-black transition-transform duration-500 ease-in-out hover:-translate-y-3 group">
          <img src={cat1} alt="" className="w-full h-62.5 object-cover rounded-[15px] mb-1rem transition-transform duration-500 group-hover:scale-103" />
          <h1 className="mt-3 text-2xl text-pink-500 charm-bold mx-2">His/Her Smile Say It All</h1>
          <p className="mt-3 text-gray-700 mx-2">You’re truly one of the sweetest person I know, and I feel lucky to have a freind like you.❤️</p>
        </div>

        <div className="memory-card shadow-2xl shadow-black transition-transform duration-500 ease-in-out hover:-translate-y-3 group">
          <img src={cat2} alt="" className="w-full h-62.5 object-cover rounded-[15px] mb-1rem ansform duration-500 group-hover:scale-103" />
          <h1 className="mt-3 text-2xl text-pink-500 charm-bold mx-2">Together Vibes</h1>
          <p className="mt-3 text-gray-700 mx-2">May your journey ahead be filled with happiness, success, and endless smiles.😊💕</p>
        </div>

        <div className="memory-card shadow-2xl shadow-black transition-transform duration-500 ease-in-out hover:-translate-y-3 group">
          <img src={cat3} alt="" className="w-full h-62.5 object-cover rounded-[15px] mb-1rem bg-pink-100 ansform duration-500 group-hover:scale-103" />
          <h1 className="mt-3 text-2xl text-pink-500 charm-bold mx-2">Pretty Soul</h1>
          <p className="mt-3 text-gray-700 mx-2">Keep being the amazing person you are. you make every moment brighter.🌸💖</p>
        </div>
      </div>

      <div className="bg-linear-to-br from-blue-50 to-pink-200 h-130 flex flex-col items-center justify-evenly">
        <h1 className="lg:text-5xl text-5xl ml-10 mr-8 charm-bold text-[#ff69b4] animate-heart">Thank You for the Memories</h1>

        <div className="flex flex-col items-center">
          <p className="lg:mx-90 mx-9 text-[1.1rem] text-gray-500">Every laugh, every chat, and every moment we’ve shared has been truly special.💫
            I’m so grateful for the bond we have, and for the positivity you always bring into my life.
            On your birthday, I just wish for </p>
          <p className="lg:mx-90 mx-9 text-[1.1rem] text-gray-500">endless happiness, love, and success to come your way.🌸</p>
        </div>

        <p className="lg:mx-90 mx-9 text-[1.1rem] text-gray-500">You deserve all the joy in the world—keep shining and spreading your beautiful energy.✨</p>

      </div>
    </div>
  )
}

export default Third

