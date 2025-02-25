"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FaEthereum } from "react-icons/fa";
import { SiCoinbase } from "react-icons/si";
import { AiOutlineWallet } from "react-icons/ai";

export default function Connect() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (isHovered) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isHovered, controls]);

  return (
    <div className="flex p-4 flex-col md:flex-row">
      <div className="flex-1 w-full relative">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`transition-all duration-300 ${
              isHovered ? "filter blur-sm" : ""
            }`}
          >
            <Image
              src="/satelite.png"
              width={100}
              height={60}
              alt="satelite"
              className="w-full h-[600px] rounded-xl"
            />
          </div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center text-white bg-black bg-opacity-70 p-4 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
          >
            {isHovered && (
              <div>
                <h2 className="text-lg font-bold">Explore more NFTs here!</h2>
                <p className="text-sm">Discover amazing NFTs and more.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex-1 gap-6 px-10 py-20 text-[#FFFFFF] w-full md:w-[450px] space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-sans font-semibold w-full">
          Connect Wallet
        </h1>

        <h1 className="font-sans w-full">
          Choose a Wallet you want to connect. <br />
          There are several wallet Providers
        </h1>

        <div className="mt-5 space-y-4 flex flex-col max-w-lg">
          <button className="flex items-center justify-center bg-[#F6851B] text-white p-3 rounded-xl hover:bg-[#D76B1A] transition duration-200">
            <FaEthereum className="mr-2" />
            MetaMask
          </button>

          <button className="flex items-center justify-center bg-[#0052FF] text-white p-3 rounded-xl hover:bg-[#0041CC] transition duration-200">
            <AiOutlineWallet className="mr-2" />
            Connect Wallet
          </button>

          <button className="flex items-center justify-center bg-[#FFD700] text-black p-3 rounded-xl hover:bg-[#FFC300] transition duration-200">
            <SiCoinbase className="mr-2" />
            Coin
          </button>
        </div>
      </motion.div>
    </div>
  );
}
