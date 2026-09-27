import cat1 from "./assets/images/cat-cute-exclusive-sticker-and-logo-illustration-free-vector.jpg";
import cat2 from "./assets/images/cute-cartoon-cat-kitten-character-sitting-with-big-eyes-vector-illustration_839221-564.jpg";
import cat3 from "./assets/images/pngtree-adorable-cartoon-cat-sitting-with-big-eyes-and-blush-perfect-for-png-image_21032310.png";

const Third = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#e6e6fa] to-[#ffd1dc]">

      {/* Header */}
      <div className="flex flex-col items-center justify-center px-4">
        <h1
          className="
            fleur-de-leah-regular
            text-pink-400
            text-5xl
            lg:text-6xl
            mt-18
            tracking-wide
            leading-tight
            text-center
            max-w-82
            md:max-w-none
            mx-auto
          "
        >
          Our Beautiful Moments Together
        </h1>

        <h2
          className="
            text-[1.3rem]
            text-gray-700
            mt-6
            mx-6
            font-light
            text-center
          "
        >
          Every moment spent with you has been magical. Let's cherish these
        </h2>

        <p
          className="
            text-[1.3rem]
            text-gray-700
            font-light
            text-center
          "
        >
          precious memories ...🎀
        </p>
      </div>

      {/* Memory Cards */}
      <div
        className="
          max-w-300
          mx-auto
          mt-16
          lg:mt-22
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          p-6
          sm:p-8
          gap-8
        "
      >

        {/* Card 1 */}
        <div
          className="
            memory-card
            shadow-2xl
            shadow-black
            transition-transform
            duration-500
            ease-in-out
            hover:-translate-y-3
            group
            overflow-hidden
          "
        >
          <img
            src={cat1}
            alt="Beautiful memory"
            className="
              w-full
              h-62.5
              object-cover
              rounded-[15px]
              mb-1
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <h1 className="mt-3 text-2xl text-pink-500 charm-bold mx-2">
            His/Her Smile Say It All
          </h1>

          <p className="mt-3 text-gray-700 mx-2 pb-4">
            You’re truly one of the sweetest person I know, and I feel lucky
            to have a friend like you.❤️
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="
            memory-card
            shadow-2xl
            shadow-black
            transition-transform
            duration-500
            ease-in-out
            hover:-translate-y-3
            group
            overflow-hidden
          "
        >
          <img
            src={cat2}
            alt="Beautiful memory"
            className="
              w-full
              h-62.5
              object-cover
              rounded-[15px]
              mb-1
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <h1 className="mt-3 text-2xl text-pink-500 charm-bold mx-2">
            Together Vibes
          </h1>

          <p className="mt-3 text-gray-700 mx-2 pb-4">
            May your journey ahead be filled with happiness, success, and
            endless smiles.😊💕
          </p>
        </div>

        {/* Card 3 */}
        <div
          className="
            memory-card
            shadow-2xl
            shadow-black
            transition-transform
            duration-500
            ease-in-out
            hover:-translate-y-3
            group
            overflow-hidden
          "
        >
          <img
            src={cat3}
            alt="Beautiful memory"
            className="
              w-full
              h-62.5
              object-cover
              rounded-[15px]
              mb-1
              bg-pink-100
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <h1 className="mt-3 text-2xl text-pink-500 charm-bold mx-2">
            Pretty Soul
          </h1>

          <p className="mt-3 text-gray-700 mx-2 pb-4">
            Keep being the amazing person you are. You make every moment
            brighter.🌸💖
          </p>
        </div>
      </div>

      {/* Thank You Section */}
      <div
        className="
          bg-linear-to-br
          from-blue-50
          to-pink-200
          min-h-130
          flex
          flex-col
          items-center
          justify-evenly
          px-6
          py-12
          gap-8
        "
      >
        <h1
          className="
            text-4xl
            lg:text-5xl
            charm-bold
            text-[#ff69b4]
            animate-heart
            text-center
          "
        >
          Thank You for the Memories
        </h1>

        <div className="flex flex-col items-center gap-4">
          <p
            className="
              max-w-4xl
              text-[1.1rem]
              text-gray-500
              text-center
            "
          >
            Every laugh, every chat, and every moment we’ve shared has been
            truly special.💫 I’m so grateful for the bond we have, and for the
            positivity you always bring into my life. On your birthday, I just
            wish for
          </p>

          <p
            className="
              max-w-4xl
              text-[1.1rem]
              text-gray-500
              text-center
            "
          >
            endless happiness, love, and success to come your way.🌸
          </p>
        </div>

        <p
          className="
            max-w-4xl
            text-[1.1rem]
            text-gray-500
            text-center
          "
        >
          You deserve all the joy in the world—keep shining and spreading your
          beautiful energy.✨
        </p>
      </div>
    </div>
  );
};

export default Third;