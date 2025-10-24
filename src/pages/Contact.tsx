import { Mail, Linkedin } from "lucide-react";


export default function Contact() {
    return (
        <section id="contact" className="py-16 px-8 text-center text-indigo-300">
            <h2 className="text-4xl font-bold mb-6 text-center text-indigo-200 underline decoration-indigo-500">Contact</h2>
            <p className="mb-4">Feel free to reach out via email or LinkedIn.</p>
            <div className="flex justify-center gap-6">
                <a className ="rounded-md" href="mailto:acontreras9450@gmail.com"><Mail /></a>
                <a className ="rounded-md" href="https://linkedin.com/in/angel-alexis-contreras" target="_blank"><Linkedin /></a>
            </div>
        </section>
    );
}