import React from "react";

const Roadmap = () => {
  const r1 = [
    "Dragon's Nest – Minting limited Cassie NFTs",
    "building the community",
    "launching initial NFT drops",
  ];
  const r2 = [
    "Magic Adventures – Expanding collections",
    "developing an interactive platform",
    "launching initial NFT drops",
  ];
  const r3 = [
    "Beyond the Skies – Initiating charitable efforts",
    "metaverse integration, and ongoing innovation.",
  ];
  return (
    <div id="roadmap">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <h2 className="text-center">Roadmap</h2>
        <div className="grid lg:grid-cols-3 gap-12 mt-12 max-w-4xl  mx-auto w-full">
          <div className="bg-[#F9EB7F] rounded-xl p-6">
            <div className="text-[#F74D64] text-2xl">Phase 1 (Q1 2023)</div>
            <ul className="mt-4 space-y-3">
              {r1.map((r) => (
                <li>{r}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F9EB7F] rounded-xl p-6">
            <div className="text-[#F74D64] text-2xl">Phase 1 (Q1 2023)</div>
            <ul className="mt-4 space-y-3">
              {r1.map((r) => (
                <li>{r}</li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F9EB7F] rounded-xl p-6">
            <div className="text-[#F74D64] text-2xl">Phase 1 (Q1 2023)</div>
            <ul className="mt-4 space-y-3">
              {r1.map((r) => (
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
