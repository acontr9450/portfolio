import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Code, Database } from "lucide-react";


export default function Hero() {
    const [showAllSkills, setShowAllSkills] = useState(false);

    const topSkills = ["Java", "Python", "TypeScript", "React"];
    const allSkills = ["Java", "Python", "TypeScript", "React", "C++", "JavaScript", "SQL", "TailwindCSS", "Vite.JS", "Docker", "REST API", "Git"];

    return (
        <section className="flex flex-col items-center text-center py-20 px-6">
            <motion.img
                src="../../public/Pro_Headshot.png"
                alt="Angel Contreras"
                className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-blue-600"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            />

            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
                Software Engineer | Data Scientist
            </motion.h2>

            <p className="max-w-2xl mb-6">
                MBA student and Computer Science graduate with experience in software development, full-stack projects, and data analytics.
            </p>

            <div className="flex gap-4 mb-8">
                <a href="mailto:acontreras9450@gmail.com"><Mail /></a>
                <a href="https://github.com/acontr9450" target="_blank"><Github /></a>
                <a href="https://linkedin.com/in/angel-alexis-contreras" target="_blank"><Linkedin /></a>
            </div>

            <a href="../../public/AngelContrerasResume.pdf" download className="mb-12 inline-block px-6 py-2 bg-blue-600 text-transparent rounded-lg shadow hover:bg-blue-700 transition">
                    Download Resume
            </a>

           
        </section>
    );
}