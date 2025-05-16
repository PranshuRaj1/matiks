export default function Features() {
  return (
    <div className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Features
          </h2>
          <div className="w-24 h-1 bg-[#a9f99e] mx-auto mb-6"></div>
          <p className="text-[#bababa] max-w-2xl mx-auto">
            Challenge players worldwide in fast-paced math duels and puzzle
            battles on Matiks!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature - 1 */}
          <div className="bg-neutral-800 rounded-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#a9f99e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Global Leaderboard
            </h3>
            <p className="text-[#bababa] text-center">
              Compete for global rankings and climb the leaderboard—just like
              chess, but with math!
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-neutral-800 rounded-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#a9f99e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Fast-Paced Duels
            </h3>
            <p className="text-[#bababa] text-center">
              Challenge players worldwide in exciting, fast-paced math duels to
              test your skills.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-neutral-800 rounded-lg p-8 transition-transform duration-300 hover:transform hover:scale-105">
            <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mb-6 mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-[#a9f99e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white text-center mb-4">
              Puzzle Battles
            </h3>
            <p className="text-[#bababa] text-center">
              Engage in mind-bending puzzle battles that improve your
              problem-solving abilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
