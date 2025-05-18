import Image from "next/image";

export default function Qr() {
  return (
    <div className="absolute -bottom-10 right-0 bg-neutral-800 p-4 rounded-lg shadow-lg font-montsemi flex items-center gap-4 border border-neutral-700">
      <div className="w-20 h-20">
        <Image
          src="/Qr.png"
          alt="Matiks QR Code"
          fill
          className="w-full h-full object-cover rounded"
        />
      </div>
      <p className="text-sm text-[#bababa]">Download</p>
      <p className="text-[#a9f99e] font-bold">Matiks app</p>
    </div>
  );
}
