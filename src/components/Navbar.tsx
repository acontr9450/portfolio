export default function Navbar() {

    return (
        <nav className="
          fixed top-0 left-0 w-full 
          flex justify-between items-center 
          p-6 backdrop-blur-md bg-gray-900/80 
          text-white shadow-md z-50
          "
        >
        <h1 className="text-2xl font-bold text-amber-200">ANGEL CONTRERAS</h1>
        <div className="flex gap-6">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
}

