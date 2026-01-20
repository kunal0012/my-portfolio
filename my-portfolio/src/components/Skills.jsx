import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {portfolioData.skills.map((skill, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="px-4 py-2 bg-gray-800 rounded text-sm text-gray-300 hover:bg-gray-700"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
