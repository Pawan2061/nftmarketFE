import { motion } from "framer-motion";

export default function MoreArtist() {
  const items = [
    {
      id: 1,
      name: "Artwork 1",
      image: "/artist1.png",
      price: "0.5 ETH",
      highestBid: "0.45 ETH",
    },
    {
      id: 2,
      name: "Artwork 2",
      image: "/artist2.png",
      price: "0.8 ETH",
      highestBid: "0.75 ETH",
    },
    {
      id: 3,
      name: "Artwork 3",
      image: "/artist3.png",
      price: "1.2 ETH",
      highestBid: "1.1 ETH",
    },
    {
      id: 4,
      name: "Artwork 4",
      image: "/artist4.png",
      price: "0.5 ETH",
      highestBid: "0.45 ETH",
    },
    {
      id: 5,
      name: "Artwork 5",
      image: "/artist5.png",
      price: "0.8 ETH",
      highestBid: "0.75 ETH",
    },
    {
      id: 6,
      name: "Artwork 6",
      image: "/artist6.png",
      price: "1.2 ETH",
      highestBid: "1.1 ETH",
    },
  ];

  return (
    <section className="mt-20 text-[#FFFFFF] px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-3xl font-sans">
          More From This Artist
        </h1>
        <motion.button
          className="p-3 text-sm rounded-xl border border-[#A259FF] hover:bg-[#A259FF] transition duration-300"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#A259FF",
            color: "#FFFFFF",
          }}
        >
          Go To Artist Page
        </motion.button>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="bg-[#2b2b2a] rounded-lg shadow-2xl p-4 transition-transform duration-300 hover:scale-105"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="mt-2 text-lg font-semibold">{item.name}</h2>
            <div className="flex justify-between mt-2">
              <span className="text-gray-400">Price: {item.price}</span>
              <span className="text-gray-400">
                Highest Bid: {item.highestBid}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
