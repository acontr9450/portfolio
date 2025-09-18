import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";


export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center py-20 px-6">
            <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-bold mb-4">
                Graduate Assistant | Aspiring Software Engineer
            </motion.h2>
            <p className="max-w-2xl mb-6">
                MBA student and Computer Science graduate with experience in lab systems, web development, and full-stack projects. Passionate about building efficient applications and supporting student success.
            </p>
            <div className="flex gap-4">
                <a href="mailto:acontreras9450@gmail.com"><Mail /></a>
                <a href="https://github.com/acontr9450" target="_blank"><Github /></a>
                <a href="https://linkedin.com/in/angel-alexis-contreras" target="_blank"><Linkedin /></a>
            </div>
            <a href="../../public/AngelContrerasResume.pdf" download className="mt-6 px-6 py-2 bg-purple-50 rounded-lg">
                    Download Resume
            </a>
        </section>
    );
}