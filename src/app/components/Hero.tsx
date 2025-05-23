import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-neutral-950 font-montsemi">
      <div className="container mx-auto px-4 py-15 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 font-bold">
            <div className=" uppercase tracking-wider mb-2 md:text-6xl text-4xl font-bold text-[#a9f99e]">
              MATIKS:{" "}
            </div>
            <h1 className="text-4xl md:text-6xl  mb-4">
              <span className="text-white">MAKING MATH </span>
              <span className="text-[#a9f99e]">A SPORT</span>
            </h1>

            <p className="text-[#bababa] mb-8 ">
              Matiks is a community for mathletes, turning math into an
              accessible, exciting sport for everyone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-transparent border cursor-pointer border-[#58eacc] border-b-4 text-white px-6 py-3 rounded-2xl   transition-colors duration-300">
                SIGN IN USING GOOGLE
              </button>

              <button className="bg-transparent  text-[#bababa] px-6 py-3 rounded-md   transition-colors duration-300 cursor-pointer">
                Play as guest
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="bg-neutral-800 rounded-lg p-8 relative overflow-hidden">
              <div className="relative aspect-[4/3] w-full ">
                <Image
                  src="/leadership.png"
                  alt="Matiks Platform"
                  fill
                  className="rounded-lg shadow-lg object-contain "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
              <div className="text-center font-bold">
                <h3 className="text-[#a9f99e]  text-lg mb-2">
                  MATH &amp; PUZZLES. BUT WITH DUELS AND A LEADERBOARD
                </h3>
                <p className="text-[#bababa] ">
                  Challenge players worldwide in fast-paced math duels and
                  puzzle battles!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
