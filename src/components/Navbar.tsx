export default function Navbar() {

    return (
        <nav className="
          fixed top-0 left-0 w-full 
          flex justify-between items-center 
          p-6 backdrop-blur-md bg-gray-900/80 
          text-white shadow-md z-50
          "
        >
        <h1 className="text-2xl font-bold">Angel Contreras</h1>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-blue-1000 transition">About</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>
    );
}

