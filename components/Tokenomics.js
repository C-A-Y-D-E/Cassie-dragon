import React from "react";

const Tokenomics = () => {
  return (
    <div className="bg-[#F74D64] text-white">
      <div className="container mx-auto px-6 pt-16 lg:pt-24">
        <h2 className=" text-center">Tokenomics</h2>
        <div className="grid lg:grid-cols-3 gap-y-16 lg:gap-y-0  my-16 max-w-4xl w-full mx-auto items-center">
          <div className="text-center space-y-4  lg:border-r">
            <h2> 3,333</h2>
            <div> Token name </div>
          </div>
          <div className="text-center space-y-4  lg:border-r">
            <h2> 100+</h2>
            <div> Token Symbol</div>
          </div>
          <div className="text-center space-y-4">
            <h2> 3,333</h2>
            <div> Tax</div>
          </div>
        </div>
        <img src="/token.png" className="mx-auto" />
      </div>
    </div>
  );
};

export default Tokenomics;
