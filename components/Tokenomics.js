import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="bg-[#F74D64] text-white">
      <div className="container mx-auto px-6 pt-16 lg:pt-24">
        <h2 className=" text-center">Tokenomics</h2>
        <div className="grid lg:grid-cols-3 gap-y-16 lg:gap-y-0  my-16 max-w-4xl w-full mx-auto items-center">
          <div className="text-center space-y-4  lg:border-r">
            <h2> Cassie Dragon </h2>
            <div> Token name </div>
          </div>
          <div className="text-center space-y-4  lg:border-r">
            <h2> Cassie</h2>
            <div> Token Symbol</div>
          </div>
          <div className="text-center space-y-4">
            <h2>5% / 5%</h2>
            <div> Tax</div>
          </div>
        </div>
        <div className="flex justify-center">
          <CopyToClipboard text={"0x3C4fbAAC51Ee2E0cdb1568EBBd0CB736A1B70411"}>
            <div className="border border-white rounded-2xl  mx-auto py-2 px-6">
              <span className="hidden sm:block">
                0x3C4fbAAC51Ee2E0cdb1568EBBd0CB736A1B70411
              </span>
              <span className="sm:hidden">0x3C4f...70411</span>
            </div>
          </CopyToClipboard>
        </div>

        <img src="/token.png" className="mx-auto" />
      </div>
    </div>
  );
};

export default Tokenomics;
