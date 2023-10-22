import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[600px] lg:h-screen">
      <img
        src="/bg.png"
        className="w-full h-full object-cover absolute inset-0"
      />
      <img
        src="/left.png"
        className="absolute bottom-0 w-44 sm:w-auto left-0"
      />
      <img
        src="/right.png"
        className="absolute bottom-0 w-44 sm:w-auto right-0"
      />
      <div className="container mx-auto px-6 py-24 relative z-10 h-full grid lg:place-items-center ">
        <div className="text-center max-w-4xl w-full space-y-6 ">
          <h1 style={{ "text-shadow": "2px 2px 2px rgba(0, 0, 0, 0.70)" }}>
            Cassie - Your Nostalgic Crypto Companion
          </h1>
          <div className="text-2xl text-white">
            Where nostalgia meets blockchain, one collectible at a time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
