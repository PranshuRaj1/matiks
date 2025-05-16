import Image from "next/image";

export default function Hero() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="text-sm uppercase tracking-wider mb-2">MATIKS</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            MAKING MATH <span className="text-[#a9f99e]">A SPORT</span>
          </h1>

          <p className="text-[#bababa] mb-8">
            Matiks is a community for mathletes, turning math into an
            accessible, exciting sport for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-transparent border border-[#a9f99e] text-[#a9f99e] px-6 py-3 rounded-md hover:bg-[#a9f99e] hover:text-neutral-900 transition-colors duration-300">
              SIGN IN USING GOOGLE
            </button>

            <button className="bg-transparent border border-[#bababa] text-[#bababa] px-6 py-3 rounded-md hover:bg-[#bababa] hover:text-neutral-900 transition-colors duration-300">
              Play as guest
            </button>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="bg-neutral-800 rounded-lg p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-70 z-0" />
            <div className="relative z-10">
              <Image
                src="/leadership.png"
                alt="Matiks Platform"
                width={600}
                height={400}
                className="rounded-lg shadow-lg mb-6 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
