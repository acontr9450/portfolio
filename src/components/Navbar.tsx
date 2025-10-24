export default function Navbar() {

    return (
        <nav className="
          fixed top-0 left-0 w-full 
          flex justify-between items-center 
          p-6 backdrop-blur-md bg-gray-900/80 
          text-white shadow-md z-50
          "
        >
        <h1 className="text-2xl font-bold text-indigo-200">ANGEL CONTRERAS</h1>
        <div className="flex gap-6">
          <a className="rounded-sm" href="#home">Home</a>
          <a className="rounded-sm" href="#about">About</a>
          <a className="rounded-sm" href="#experience">Experience</a>
          <a className="rounded-sm" href="#projects">Projects</a>
          <a className="rounded-sm" href="#contact">Contact</a>
        </div>
      </nav>
    );
}

