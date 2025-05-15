import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-start justify-start bg-[#1e1e1e] h-screen w-full p-6">
        <div className="text-[36px] text-[#a9f99e] font-[Montserrat-900] tracking-[4px] whitespace-pre-wrap break-words text-3xl">
          MATIKS
        </div>
      </div>
    </>
  );
}
