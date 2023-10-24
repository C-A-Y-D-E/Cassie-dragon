import React, { useState } from "react";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  // const handleWallet = () => {
  //   if (typeof window.gatewallet !== "undefined") {
  //     console.log("Gate Wallet is installed!");
  //   } else {
  //     console.log("rip");
  //   }
  // };
  return (
    <>
      {/*<!-- Header --> */}
      <header className="border-b-1 bg-[#160101] relative z-20 w-full  shadow-lg shadow-white/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px ">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-white"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="#home"
            >
              <img src="/logo.png" className="w-12" />
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/10 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4  transition-colors duration-300 hover:text-blue-600  focus:outline-none focus-visible:outline-none lg:px-5"
                  href="#about"
                >
                  <span>About</span>
                </a>
              </li>

              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500  focus:outline-none focus-visible:outline-none lg:px-5"
                  href="#tokenomics"
                >
                  <span>Tokenomics</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500  focus:outline-none focus-visible:outline-none lg:px-5"
                  href="#roadmap"
                >
                  <span>Roadmap</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500  focus:outline-none focus-visible:outline-none lg:px-5"
                  href="#partners"
                >
                  <span>Partners</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-500  focus:outline-none focus-visible:outline-none lg:px-5"
                  href="#nft"
                >
                  <span>NFT</span>
                </a>
              </li>
            </ul>
            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
              <div className="flex gap-4 items-center mr-4">
                <a
                  href="https://t.me/cassiebsc"
                  target="_blank"
                  className="inline-block rounded-full p-2 border border-white/10"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      d="m14.5 1.5l-14 5l4 2l6-4l-4 5l6 4l2-12Z"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/cassiebsc?t=sjynxJoA8AKV44rxhaqE5Q&s=35"
                  target="_blank"
                  className="inline-block rounded-full p-2 border border-white/10"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1a10.66 10.66 0 0 1-9-4.53s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5c0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01Z"
                    />
                  </svg>
                </a>
              </div>
              <a
                href="#"
                target="_blank"
                className="relative  py-2 px-12 items-center justify-center rounded-full text-lg text-white bg-[#F74D64]"
              >
                Buy
              </a>
              {/* <button className="shrink-0">
                <w3m-button />
              </button> */}
            </div>
          </nav>
        </div>
      </header>
      {/*<!-- End Navbar with Topbar--> */}
    </>
  );
}
