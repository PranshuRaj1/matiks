export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-full px-11.5 py-3 bg-[#1e1e1e]">
      {/* Logo Section */}
      <div className="relative w-4.5 h-10">
        <img
          src="https://www.matiks.in/assets/assets/images/LinearGradientIcons/matiksBolt.042f60d33d693c06c19c0eecdfca8ef1.png"
          alt="Logo"
          draggable="false"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-row items-stretch gap-[28px] mr-8">
        <button className="text-[#bababa] text-[12px] font-[Montserrat-500] transition duration-200 hover:text-[#a9f99e] focus:outline-none">
          Blogs
        </button>
        <button className="text-[#bababa] text-[12px] font-[Montserrat-500] transition duration-200 hover:text-[#a9f99e] focus:outline-none">
          Privacy Policy
        </button>
      </div>
    </nav>
  );
}
