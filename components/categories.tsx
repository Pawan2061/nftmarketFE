import { categories } from "@/utils/categories";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Categories() {
  return (
    <div className="w-full px-10">
      <h4 className="text-[#FFFFFF] font-sans font-bold text-2xl">
        Browse Categories
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 mt-5">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-[#222225] rounded-lg shadow-lg flex flex-col transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "linear" }}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#333333",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Image
              src={category.image}
              alt={category.title}
              width={300}
              height={300}
              className="rounded-t-lg object-cover w-full h-32"
            />
            <div className="p-4 flex-1 flex flex-col justify-center items-center">
              <h5 className="text-[#FFFFFF] font-semibold">{category.title}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
