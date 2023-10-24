import React from "react";

const Roadmap = () => {
  const r1 = [
    "• Website Development",
    "• Deploy smart contract (BNB)",
    "• KYC",
  ];
  const r2 = [
    "• Pinksale presale",
    "• Marketing campaign",
    "• Pancakeswap launch",
    "• Trending on all platforms",
    "• Massive marketing campaign",
    "• Fast Track Listing on CG/CMC",
  ];
  const r3 = [
    "• NFT MINT",
    "• OFFICIAL WHITE PAPER LAUNCH",
    "• LISTING ON EXCHANGES",
  ];
  return (
    <div id="roadmap">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <h2 className="text-center">Roadmap</h2>
        <div className="grid lg:grid-cols-3 gap-12 mt-12 max-w-4xl  mx-auto w-full">
          <div className="bg-[#F9EB7F] rounded-xl p-6">
            <div className="text-[#F74D64] text-2xl">Phase 1 </div>
            <ul className="mt-4 space-y-3">
              {r1.map((r) => (
                <li>{r}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F9EB7F] rounded-xl p-6">
            <div className="text-[#F74D64] text-2xl">Phase 2 </div>
            <ul className="mt-4 space-y-3">
              {r2.map((r) => (
                <li>{r}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F9EB7F] rounded-xl p-6">
            <div className="text-[#F74D64] text-2xl">Phase 3 </div>
            <ul className="mt-4 space-y-3">
              {r3.map((r) => (
                <li>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
