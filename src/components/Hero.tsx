import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Code, Database } from "lucide-react";


export default function Hero() {
    return (
        <section id="home" className="flex flex-col items-center text-center py-20 px-6 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 mb-8 w-full">
                <motion.img
                    src="../../public/Pro_Headshot.png"
                    alt="Angel Contreras"
                    className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-6 border-indigo-500"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />

                <div className="flex items-center gap2 text-indigo-300">
                    <MapPin className="text-indigo-500 w-12 h-10" />
                    <p className="text-base md:text-2xl font-bold text-indigo-200">El Paso, TX</p>
                </div>
            </div>
            
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4 text-indigo-200 underline decoration-indigo-500">
                Software Engineer | Data Scientist
            </motion.h2>

            <p className="max-w-2xl mb-6 text-xl text-indigo-300">
                MBA student and Computer Science graduate with experience in software development, full-stack projects, and data analytics.
            </p>

            <div className="flex gap-4 mb-8">
                <a className = "rounded-md" href="mailto:acontreras9450@gmail.com"><Mail /></a>
                <a className = "rounded-md" href="https://github.com/acontr9450" target="_blank"><Github /></a>
                <a className = "rounded-md" href="https://linkedin.com/in/angel-alexis-contreras" target="_blank"><Linkedin /></a>
            </div>

            <a href="../../public/AngelContrerasResume.pdf" download className="mb-12 inline-block px-6 py-2 bg-indigo-900 rounded-lg shadow hover:bg-blue-700 transition">
                    Download Resume
            </a>
        </section>
    );
}