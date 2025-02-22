"use client";
import { motion } from "framer-motion";
import frame1 from "../public/fram1.png";
import frame2 from "../public/frame2.png";
import frame3 from "../public/frame3.png";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Works() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const cards = [
    {
      id: 1,
      title: "Create your collection",
      description:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
      image: frame1,
    },
    {
      id: 2,
      title: "Create Collection",
      description:
        "Upload your work and setup your collection. Add a description, social links and floor price..",
      image: frame2,
    },
    {
      id: 3,
      title: "Start Earning",
      description:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      image: frame3,
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="flex flex-col px-4 md:px-28 py-20 gap-20"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.3, ease: "easeInOut" }}
    >
      <div className="items-start space-y-10">
        <motion.h1
          className="text-[#FFFFFF] text-3xl md:text-5xl text-start font-semibold"
          initial={{ x: -100, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          HOW IT WORKS?
        </motion.h1>
        <div className="flex flex-col md:flex-row mt-4 md:mt-0 justify-between max-w-full">
          <motion.h1
            className="text-[#FFFFFF] font-sans text-lg md:text-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            Find out how to get started
          </motion.h1>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-gray-600/20 rounded-2xl shadow-md p-4 w-fit flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
                rotate: 2,
              }}
            >
              <Image
                src={card.image}
                alt={card.title}
                width={120}
                height={120}
              />
              <h2 className="text-lg text-[#FFFFFF] font-semibold">
                {card.title}
              </h2>
              <p className="text-white">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
