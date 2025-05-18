import Image from "next/image";
export default function Download() {
  return (
    <div className="py-15 bg-neutral-800">
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
                    className="h-6 w-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
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
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
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
              <div className="bg-white p-4 rounded-lg mb-6 flex justify-center">
                <div className="relative w-48 h-48">
                  <Image
                    src="/qr.svg"
                    alt="Matiks QR Code"
                    fill
                    className="object-contain rounded-lg"
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
