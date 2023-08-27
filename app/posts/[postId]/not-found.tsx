import Image from "next/image";

export default function NotFound() {
  return (
    <div className="w-full mx-auto bg-black">
      <div >
        <Image
          className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
          src={'/pic2.png'}
          width={150}
          height={150}
          alt="not found pic"
          priority={true}
        />
      </div>
      <div>
        <h1 className="text-3xl text-center text-white">
            The requested post does not exist.
        </h1>
      </div>
    </div>
  );
}
