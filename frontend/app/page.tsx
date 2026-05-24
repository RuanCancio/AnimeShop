import Image from "next/image";

export default function Home() {
  return (
    <div className=" z-1 pointer-events-none bg-linear-to-b from-[#091130] to-[#14235e] h-screen pt-35 flex flex-col items-center text-white font-bold md:pt-[8%] md:flex-row-reverse md:gap-100 md:px-50">
      <div className="absolute  h-screen w-screen top-0 right-0 z-0">
      {[...Array(100)].map((_, index)=> (
        <div
        key={index}
        className="absolute bg-white rounded-full animate-pulse"
        style={{
          width: `${Math.random() * 4 + 1}px`,
          height: `${Math.random() * 4 + 1}px`,
          top: `${Math.random() * 100}%`,
          right: `${Math.random() * 100}%`
        }}
        >
          

        </div>
      ))}
        
      </div>
      <Image src="/Src/images/MewBackground.png" alt="Mew" width={300} height={300} className="animate-pulse scale-x-[-1] md:w-200"/>
      <div>
        <h2 className="text-5xl text-center md:text-8xl">All of <span className="text-[#00D084]">animes</span></h2>
        <p className="mt-2 px-1 text-2xl text-center">Find out <span className="text-[#3390FF]">the best anime products</span> in one place</p>
      </div>
    </div>
  );
}
