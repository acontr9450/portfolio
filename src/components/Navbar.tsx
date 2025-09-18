export default function Navbar() {

    return (
        <nav className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">Angel Contreras</h1>
        <div className="flex gap-6">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
}

