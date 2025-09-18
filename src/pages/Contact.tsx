import { Mail, Linkedin } from "lucide-react";


export default function Contact() {
    return (
        <section id="contact" className="py-16 px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="mb-4">Feel free to reach out via email or LinkedIn.</p>
            <div className="flex justify-center gap-6">
                <a href="mailto:acontreras9450@gmail.com"><Mail /></a>
                <a href="https://linkedin.com/in/angel-alexis-contreras" target="_blank"><Linkedin /></a>
            </div>
        </section>
    );
}