"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Globe2Icon, WholeWord, WholeWordIcon } from "lucide-react";

export default function Artist() {
  const [timeLeft, setTimeLeft] = useState(3600);
  const controls = useAnimation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const handleScrollIntoView = (element: HTMLElement) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ y: 0, opacity: 1 });
        } else {
          controls.start({ y: 20, opacity: 0 });
        }
      });
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  };

  return (
    <section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="rounded-2xl"
          src="/spaceship.png"
          layout="responsive"
          width={100}
          height={10}
          alt="spaceship"
        />
      </motion.div>

      <div className="flex flex-col md:flex-row px-4 md:px-32 py-4 justify-between drop-shadow-xl">
        <div className="flex-1 space-y-3">
          <motion.h1
            className="font-sans text-2xl space-x-4 text-[#FFFFFF]"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            The Orbitians
          </motion.h1>
          <motion.h1
            className="text-md font-sans font-normal text-gray-500"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            Minted On Sep 30, 2002
          </motion.h1>
          <motion.h1
            className="text-md font-sans font-semibold text-gray-500"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            Unique NFT Collection
          </motion.h1>
          <motion.h1
            className="flex text-[#FFFFFF] gap-2 text-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            <span>
              <Image src="/alient.png" alt="alient" width={20} height={20} />
            </span>
            Orbitian
          </motion.h1>

          <motion.h1
            className="font-sans text-gray-500 text-lg font-semibold"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            Description
          </motion.h1>
          <motion.h1
            className="font-sans text-[#FFFFFF] max-w-lg font-semibold"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
            blockchain. There are all sorts of beings in the NFT Universe. The
            most advanced and friendly of the bunch are Orbitians. They live in
            metal space machines, high up in the sky and only have one foot on
            Earth. These Orbitians are a peaceful race, but they have been at
            war with a group of invaders for many generations. The invaders are
            called Upside-Downs, because of their inverted bodies that live on
            the ground, yet do not know any other way to be. Upside-Downs
            believe that they will be able to win this war if they could only
            get an eye into Orbitian territory, so theyve taken to make human
            beings their target.
          </motion.h1>
          <motion.h1
            className="font-sans text-gray-500 text-lg font-semibold"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            Details
          </motion.h1>
          <motion.h1
            className="font-sans flex gap-2 text-[#FFFFFF] text-lg font-normal"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            <span>
              {" "}
              <Globe2Icon />
            </span>
            View on Etherscan
          </motion.h1>
          <motion.h1
            className="font-sans flex gap-2 text-[#FFFFFF] text-lg font-normal"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            <span>
              {" "}
              <Globe2Icon />
            </span>
            View Original
          </motion.h1>
          <motion.h1
            className="font-sans text-gray-500 text-lg font-semibold"
            initial={{ y: -20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            Tags
          </motion.h1>

          <div className="mt-2 flex gap-2">
            {["animations", "illustrations", "design", "moon"].map((tag) => (
              <button
                key={tag}
                className="bg-[#3B3B3B] text-white text-xs px-3 py-3 rounded-md shadow-md transition-transform duration-200 hover:scale-105"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          className="flex justify-center h-full px-10 lg:mr-32"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className="shadow-xl bg-[#2B2B2B] rounded-3xl p-4 text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
            ref={(el) => handleScrollIntoView(el)}
          >
            <h1 className="text-lg font-semibold text-gray-500">
              Additional Info
            </h1>
            <p className="text-sm text-gray-400">More details coming soon!</p>

            <div className="mt-4">
              <h2 className="text-xl font-bold text-[#A259FF]">
                Time Left: <br /> {hours}h {minutes}m {seconds}s
              </h2>
              <button className="mt-2 bg-[#A259FF] text-white py-2 px-4 rounded">
                Place Bid
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
