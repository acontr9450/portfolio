export default function Projects() {
    return (
        <section id="projects" className="py-16 px-8">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-xl shadow">
                    <h3 className="text-xl font-semibold">Weather Run Advisor</h3>
                    <p className="mt-2">Full-stack web app built with React, TypeScript, REST APIs, and Vite.</p>
                    <ul className="list-disc pl-5 mt-3 space-y-1">
                        <li>Helps runners choose best times based on weather and location.</li>
                        <li>Deployed with a testing environment using Vitest.</li>
                        <li>User-friendly interface focused on advice functionality.</li>
                    </ul>
                    <a href="https://github.com/acontr9450/run_weather_advisor" target="_blank" className="text-blue-500 mt-3 inline-block">View on GitHub</a>
                </div>
            </div>
        </section>
    );
}