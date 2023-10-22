import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#160101]">
      <div className="container mx-auto px-6 py-8 ">
        <div className="grid lg:grid-cols-2 gap-16 mb-3 items-center">
          <div>
            <img src="/footer.png" className="mx-auto" />
          </div>
          <div className="text-white text-center lg:text-left">
            <h2>
              Join us on this journey where nostalgia and blockchain converge
            </h2>
            <div className="flex flex-wrap gap-8 mt-8 justify-center lg:justify-start">
              <a
                className="bg-[#28A7E8] py-2 px-6 rounded-full uppercase"
                href="/"
              >
                JOIN Twitter
              </a>
              <a
                className="bg-[#28A7E8] py-2 px-6 rounded-full uppercase"
                href="/"
              >
                JOIN Telegram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 border-opacity-10">
          <div className="text-center text-white py-6">Cassie 2023 ©</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
