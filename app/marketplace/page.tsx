"use client";
import { RocketIcon } from "lucide-react";
import Image from "next/image";
import space from "../../public/space.png";
import { motion } from "framer-motion";
import Categories from "@/components/categories";

export default function Marketplace() {
  return (
    <main className="px-4 md:px-20 py-10">
      <motion.section
        className=" flex flex-col md:flex-row gap-5 justify-around"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-fit max-w-2xl space-y-8 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl text-[#FFFFFF] font-semibold max-w-full"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Digital Art & Collect NFTs
          </motion.h1>
          <motion.h1
            className="text-[#FFFFFF] font-sans font-semibold text-base md:text-lg"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </motion.h1>
          <motion.button
            whileHover={{ y: -5, x: 10 }}
            transition={{ duration: 0.1 }}
            className="bg-[#A259FF] px-6 py-4 rounded-2xl flex gap-3 mx-auto md:mx-0 transition-transform duration-300 hover:scale-105 hover:bg-[#a777e7] shadow-md hover:shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            <motion.span>
              <RocketIcon />
            </motion.span>{" "}
            Get Started
          </motion.button>
          <div className="flex flex-col md:flex-row gap-4 md:justify-start sm:justify-center">
            <h1 className="text-[#FFFFFF] font-semibold font-mono text-lg">
              240K+ <br />
              <span className="font-sans text-xs">Total Sales</span>
            </h1>
            <h1 className="text-[#FFFFFF] font-semibold text-lg">
              1500+ <br />
              <span className="font-sans text-xs">Active Artists</span>
            </h1>
            <h1 className="text-[#FFFFFF] font-semibold font-mono text-lg">
              300K+ <br />
              <span className="font-sans text-xs">Artworks Listed</span>
            </h1>
          </div>
        </div>
        <motion.div
          className="text-center md:text-left cursor-pointer shadow-2xl rounded-2xl w-fit flex flex-col transition-transform duration-300 hover:shadow-lg hover:scale-105 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col flex-1">
            <Image src={space} alt="space image" height={50} width={420} />
            <div className="px-10 py-10 flex-1">
              <h1 className="text-[#FFFFFF] font-sans font-semibold text-3xl">
                Space Walking
              </h1>
              <h1 className="flex space-x-2">
                <Image
                  src="/spaceicon.png"
                  alt="spaceicon"
                  width={20}
                  height={20}
                />
                <span className="text-[#FFFFFF] font-semibold px-2 text-xl">
                  Animakid
                </span>
              </h1>
            </div>
          </div>
          <motion.div className="absolute inset-0 bg-black bg-opacity-50 flex items-center rounded-2xl shadow-2xl justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg p-4 text-center">
              Experience the beauty of space through art. Join us in exploring
              the universe of digital creativity!
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
      <Categories />
    </main>
  );
}
