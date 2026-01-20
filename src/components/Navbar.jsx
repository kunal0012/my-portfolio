// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
//       <a href= "#contact" className="text-xl font-semibold">Connect with me</a>
//       <div className="space-x-6 text-gray-400">
//         <a href="#projects" className="hover:text-white">Projects</a>
//         <a href="#skills" className="hover:text-white">Skills</a>
//       </div>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800">
      
      {/* Left side: Connect With Me */}
      <a
        href="https://in.linkedin.com/"
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition"
      >
        <span className="text-lg">🔗</span>
        <span className="font-medium">Connect With Me</span>
      </a>

      {/* Right side: Navigation */}
      <div className="space-x-6 text-gray-400">
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#skills" className="hover:text-white transition">
          Skills
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>
    </nav>
  );
}
