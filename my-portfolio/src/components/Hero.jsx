import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="px-8 py-20 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-4">
        {portfolioData.name}
      </h2>

      <p className="text-xl text-blue-400 mb-6">
        {portfolioData.role}
      </p>

      <p className="text-gray-400 leading-relaxed">
        {portfolioData.summary}
      </p>
    </motion.section>
  );
}
