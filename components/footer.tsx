"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#222225] text-white py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto text-center">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={120}
          height={40}
          className="mx-auto mb-4"
        />

        <h2 className="text-xl font-semibold mb-4">
          Subscribe to our Marketplace
        </h2>
        <p className="text-sm mb-4">
          Stay updated with the latest news and offers. Enter your email below:
        </p>
        <form className="flex justify-center mb-4">
          <input
            type="email"
            placeholder="Your email address"
            className="p-2 rounded-l-md border border-gray-300"
            required
          />
          <button
            type="submit"
            className="bg-[#A259FF] text-white p-2 rounded-r-md hover:bg-[#9e5bf7] transition duration-300"
          >
            Subscribe
          </button>
        </form>

        <p className="text-sm mb-2">
          Follow us on{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Twitter
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Facebook
          </a>{" "}
          |{" "}
          <a href="#" className="text-blue-400 hover:underline">
            Instagram
          </a>
        </p>

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </motion.footer>
  );
}
