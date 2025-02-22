"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../../public/logo.png";
import User from "../../public/User.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.main
      className="text-[#FFFFFF] flex justify-between items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image src={logo} alt="Company Logo" width={150} height={50} />
      </motion.div>
      <div className="flex items-center space-x-4 font-semibold font-sans">
        <button className="text-[#f5f5f5] drop-shadow-lg hidden md:block">
          Marketplace Ranking
        </button>
        <button className="text-[#F5F5F5] drop-shadow-lg px-4 py-2 rounded">
          Connect a Wallet
        </button>
        <button className="text-[#F5F5F5] drop-shadow-lg px-4 py-2 rounded hidden md:block">
          Ranking
        </button>
        <motion.button
          className="flex text-[#F5F5F5] w-15 drop-shadow-lg bg-[#A259FF] px-4 py-2 rounded-2xl items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <span className="flex items-center space-x-1">
            <Image src={User} alt="user" width={15} height={10} />
            <span>Sign up</span>
          </span>
        </motion.button>
        <button
          className="md:hidden text-[#F5F5F5] drop-shadow-lg flex items-center"
          onClick={toggleDropdown}
        >
          <ChevronDown className="ml-1" />
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="absolute right-4 top-16 bg-[#1a1a1a] rounded-lg shadow-lg p-4 md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <button className="block text-[#F5F5F5] px-4 py-2 rounded hover:bg-[#A259FF]">
            Marketplace Ranking
          </button>
          <button className="block text-[#F5F5F5] px-4 py-2 rounded hover:bg-[#A259FF]">
            Connect a Wallet
          </button>
          <button className="block text-[#F5F5F5] px-4 py-2 rounded hover:bg-[#A259FF]">
            Ranking
          </button>
        </motion.div>
      )}
    </motion.main>
  );
}
