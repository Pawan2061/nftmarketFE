"use client";
import Image from "next/image";
import image1 from "../public/image1.png";
import avatar2 from "../public/avatar2.png";
import avatar3 from "../public/avatar3.png";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Artist() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const cards = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    title: `Artist ${index + 1}`,
    description: `Description for Artist ${index + 1}`,
    image: image1,
    avatar: index % 3 === 0 ? avatar2 : index % 3 === 1 ? avatar2 : avatar3,
  }));

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col px-4 md:px-28 py-20 gap-20"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 1.3 }}
    >
      <div className="items-start space-y-10">
        <motion.h1
          className="text-[#FFFFFF] text-3xl md:text-5xl text-start font-semibold"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          TOP CREATORS
        </motion.h1>
        <div className="flex flex-col md:flex-row mt-4 md:mt-0 justify-between max-w-full">
          <motion.h1
            className="text-[#FFFFFF] font-semibold font-sans text-lg md:text-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Checkout the latest NFT artists out there
          </motion.h1>
          <button className="border rounded-xl border-[#A259FF] text-white px-4 py-2 hover:bg-[#b0adb4] hover:duration-1000">
            View Ranking
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {cards.slice(0, showAll ? cards.length : 4).map((card) => (
          <motion.div
            key={card.id}
            className="bg-[#1a1a1a] p-4 rounded-lg shadow-lg flex flex-col items-center relative w-full"
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
              rotate: 2,
            }}
          >
            <Image
              src={card.image}
              alt="Artist Image"
              width={120}
              height={120}
            />
            {/* <Image
              src={card.avatar}
              alt={`${card.title} Avatar`}
              width={50}
              height={50}
              className="rounded-full mt-2"
            /> */}
            <h2 className="text-[#FFFFFF] text-lg font-semibold space-y-5">
              {card.title}
            </h2>
            <p className="text-[#CCCCCC]">
              Total Sales : <span className="text-white">$98.00</span>
            </p>
            <span className="absolute top-2 left-2 text-gray-500 bg-gray-900 drop-shadow-xl rounded-xl p-2 text-sm">
              {card.id}
            </span>
          </motion.div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#A259FF] text-white px-6 py-2 rounded-lg hover:bg-[#9e5bf7] transition duration-300"
          >
            Show More Artists
          </button>
        </div>
      )}
    </motion.section>
  );
}
