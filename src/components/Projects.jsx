// import { motion } from "framer-motion";
// import { portfolioData } from "../data/portfolioData";

// export default function Projects() {
//   return (
//     <section id="projects" className="px-8 py-16 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-semibold mb-8">Projects</h2>

//       <div className="space-y-6">
//         {portfolioData.projects.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ y: -6 }}
//             className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 hover:shadow-lg"
//           >
//             <h3 className="text-xl font-semibold mb-2">
//               {project.title}
//             </h3>

//             <p className="text-gray-400 mb-3">
//               {project.description}
//             </p>

//             <p className="text-sm text-blue-400">
//               {project.tools.join(" • ")}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-16 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8">Projects</h2>

      <div className="space-y-6">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-3">
              {project.description}
            </p>

            <p className="text-sm text-blue-400 mb-4">
              {project.tools.join(" • ")}
            </p>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
