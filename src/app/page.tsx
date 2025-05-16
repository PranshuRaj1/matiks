import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Features />
      {/* <div className="antialiased text-gray-800 min-h-screen flex flex-col"></div> */}
    </>
  );
}
