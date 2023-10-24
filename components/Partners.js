import React from "react";

const Partners = () => {
  return (
    <div className="bg-[#F74D64] text-white">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <h2 className=" text-center">Partners</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 mt-16">
          <a href="#" target="_blank">
            <img src="/partners/1.png" />
          </a>
          <a
            href="https://www.dextools.io/app/en/bnb/pair-explorer/0x85c958676fc595868c77f02be2a163face935100"
            target="_blank"
          >
            <img src="/partners/3.png" />
          </a>
          <a
            href="https://www.dexview.com/bsc/0x3C4fbAAC51Ee2E0cdb1568EBBd0CB736A1B70411"
            target="_blank"
          >
            <img src="/partners/5.png" />
          </a>
          <a
            href="https://www.pinksale.finance/launchpad/0x9f01a5E9275A32E9f4B394240E436BF7be2E5ddD?chain=BSC"
            target="_blank"
          >
            <img src="/partners/6.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partners;
