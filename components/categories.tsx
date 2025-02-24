import { categories } from "@/utils/categories";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Categories() {
  const controls = useAnimation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const categorySection = document.getElementById("categories");
      if (categorySection) {
        const { top } = categorySection.getBoundingClientRect();
        if (top < window.innerHeight) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 20 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="w-full px-4 md:px-10" id="categories">
      <h4 className="text-[#FFFFFF] font-sans font-bold text-2xl text-center md:text-left">
        Browse Categories
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-5">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-[#222225] rounded-xl shadow-lg flex flex-col transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={controls}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "linear" }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#333333",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <motion.div
              className="relative"
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={category.image}
                alt={category.title}
                width={300}
                height={300}
                className="rounded-t-lg object-cover w-full h-32"
              />
              <motion.div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-white text-lg font-semibold">
                  {category.title}
                </h5>
              </motion.div>
            </motion.div>
            <div className="p-4 flex-1 flex flex-col justify-center items-center">
              <h5 className="text-[#FFFFFF] font-semibold">{category.title}</h5>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="rounded-xl shadow-2xl h-full flex flex-col md:flex-row   justify-around px-4 md:px-16 py-16 my-4 bg-[#3B3B3B]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/astronaut.png" alt="astronaut" width={450} height={350} />
        <div className="max-w-xl space-y-6 text-[#FFFFFF]">
          <h1 className="text-4xl font-sans font-semibold">
            Join Our Weekly Digest
          </h1>
          <h1 className="max-w-xs text-xl font-sans">
            Get Exclusive Promotions & Updates Straight To Your Inbox
          </h1>
          <div className="flex items-center">
            <motion.input
              type="email"
              placeholder="Write your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded-l-md border border-gray-300 bg-white text-black transition duration-300"
              required
              whileFocus={{ scale: 1.05 }}
            />
            <motion.button
              onClick={handleSubmit}
              className="bg-[#A259FF] text-white px-4 py-2 rounded-r-md hover:bg-[#9e5bf7] transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Submit
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
