import Image from "next/image";
export default function Download() {
  return (
    <div className="py-15 bg-neutral-800 font-montsemi">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Download
          </h2>
          <div className="w-24 h-1 bg-[#a9f99e] mx-auto mb-6" />
          <p className="text-[#bababa] max-w-2xl mx-auto">
            Get the Matiks app on your device and start your math dueling
            journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Take the Math Challenge Anywhere
            </h3>
            <p className="text-[#bababa] mb-8">
              Download the Matiks app to challenge players worldwide in
              fast-paced math duels and puzzle battles. Compete for global
              rankings and improve your skills on the go.
            </p>

            {/* Feature List */}
            <div className="space-y-6 mb-8">
              {[
                {
                  title: "Play Anytime, Anywhere",
                  body: "Challenge yourself and others whenever you have a few minutes to spare.",
                },
                {
                  title: "Track Your Progress",
                  body: "Monitor your improvement with detailed statistics and performance metrics.",
                },
                {
                  title: "Join the Community",
                  body: "Connect with fellow mathletes and participate in special events and tournaments.",
                },
              ].map(({ title, body }) => (
                <div key={title} className="flex items-start">
                  <div className="bg-neutral-700 rounded-full p-3 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-[#a9f99e]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">{title}</h4>
                    <p className="text-[#bababa]">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#">
                <button
                  type="button"
                  className="bg-[#a9f99e] text-neutral-900 cursor-pointer px-6 py-3 rounded-md font-bold hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-apple h-6 w-6 mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                  </svg>
                  Download for iOS
                </button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.matiks.app&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="bg-[#a9f99e] text-neutral-900 cursor-pointer px-6 py-3 rounded-md font-bold transition-colors duration-300 flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    {/* Antenna */}
                    <path d="M380.9 112.5l50.2-86.9c3.7-6.4 1.3-14.4-5.1-18.1-6.4-3.7-14.4-1.3-18.1 5.1l-50.2 86.9c-3.7 6.4-1.3 14.4 5.1 18.1 6.3 3.7 14.3 1.3 18.1-5.1zM131.1 112.5l-50.2-86.9c-3.7-6.4-11.8-8.8-18.1-5.1-6.4 3.7-8.8 11.7-5.1 18.1l50.2 86.9c3.7 6.4 11.7 8.8 18.1 5.1 6.4-3.7 8.8-11.7 5.1-18.1z" />
                    {/* Head */}
                    <path d="M346.6 143.5c37.8 0 68.5 30.7 68.5 68.5v68.5H97V212c0-37.8 30.7-68.5 68.5-68.5h181.1z" />
                    {/* Eyes */}
                    <circle cx="196.4" cy="221.5" r="19.4" fill="#FFF" />
                    <circle cx="315.6" cy="221.5" r="19.4" fill="#FFF" />
                    {/* Body */}
                    <path d="M97 300.5h318.1v125.4c0 28.5-23.1 51.7-51.7 51.7H148.7c-28.5 0-51.7-23.1-51.7-51.7V300.5z" />
                    {/* Arms */}
                    <path d="M51.7 300.5H31c-17.9 0-32.5 14.6-32.5 32.5v65.8c0 17.9 14.6 32.5 32.5 32.5h20.7V300.5zM461 300.5h20.7c17.9 0 32.5 14.6 32.5 32.5v65.8c0 17.9-14.6 32.5-32.5 32.5H461V300.5z" />
                  </svg>
                  Download for Android
                </button>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <div className="bg-neutral-900 p-8 rounded-lg max-w-md w-full">
              <div className="text-center mb-6">
                <h4 className="text-white font-bold text-xl mb-2">
                  Scan QR Code to Download
                </h4>
                <p className="text-[#bababa]">
                  Get the Matiks app directly on your device
                </p>
              </div>
              <div
                className="bg-white p-4 rounded-lg mb-6 flex justify-center object-contain
        transition-transform duration-300 ease-in-out
        hover:scale-110"
              >
                <div className="relative w-48 h-48">
                  <Image
                    src="/qr.svg"
                    alt="Matiks QR Code"
                    fill
                    className="object-contain rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* App Features */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                iconPath:
                  "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
                title: "Secure Account",
                desc: "Your progress and achievements are safely stored in your account.",
              },
              {
                iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Fast Performance",
                desc: "Optimized app performance for smooth gameplay and quick response times.",
              },
              {
                iconPath:
                  "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                title: "Regular Updates",
                desc: "New challenges, features, and improvements added regularly.",
              },
            ].map(({ iconPath, title, desc }) => (
              <div
                key={title}
                className="bg-neutral-900 rounded-lg p-6 text-center"
              >
                <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#a9f99e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={iconPath}
                    />
                  </svg>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                <p className="text-[#bababa]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
