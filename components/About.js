import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img src="/about.png" className="order-2 lg:order-1" />
          <div className="space-y-4 order-1 lg:order-2">
            <h2 className="text-[#F74D64]">About Us</h2>
            <div>
              Cassie NFTs are your portal to the enchanting world of Dragon
              Tales, brought to life through blockchain technology. Named after
              the beloved character from the show, Cassie NFTs offer a unique
              blend of nostalgia and digital collectibles. With each NFT, you're
              not just acquiring a token; you're embracing a piece of your
              cherished past, where memories and NFTs intertwine to create
              something truly magical. Dive into our NFT collections and
              rediscover the wonder of childhood adventures, one NFT at a time.
              Join us on a journey where the magic of nostalgia meets the
              innovation of the blockchain.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
