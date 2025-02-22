"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import collectioncard from "../public/Collection Card Row.png";

export default function Hero() {
  return (
    <section className="py-20  flex flex-col gap-20 items-center">
      <div className="text-[#FFFFFF] font-sans space-y-2 items-start text-center">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Trending Collection
        </motion.h1>
        <motion.h1
          className="text-2xl "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Checkout our weekly updated{" "}
          <span className="text-[#A259FF]"> trending collection.</span>
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 1.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image src={collectioncard} alt="collection card" />
      </motion.div>
    </section>
  );
}
