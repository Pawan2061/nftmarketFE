"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

export default function Signup() {
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
                <h2 className="text-lg font-bold">Hovering over the image!</h2>
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
          Create Account
        </h1>

        <h1 className="font-sans w-full">
          Welcome! enter your details and start creating, <br />
          collecting and selling NFTs.
        </h1>

        <div className="mt-5 space-y-4 flex flex-col max-w-lg">
          <input
            type="text"
            placeholder="Username"
            className="bg-white text-black p-2 w-full rounded-xl"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-white text-black p-2 w-full rounded-xl"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white text-black p-2 w-full rounded-xl"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-white text-black p-2 w-full rounded-xl"
          />
        </div>
        <motion.button
          whileHover={{ y: -5, x: 10 }}
          transition={{ duration: 0.1 }}
          className="bg-[#A259FF] px-6 py-4 rounded-2xl flex gap-3 mx-auto md:mx-0 transition-transform duration-300 hover:scale-105 hover:bg-[#a777e7] shadow-md hover:shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
        >
          Create Account
        </motion.button>
      </motion.div>
    </div>
  );
}
