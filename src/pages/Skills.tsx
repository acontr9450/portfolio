import SkillTag from "../components/SkillTag";

export default function Skills() {
    const skills = ["React", "TypeScript", "Vite", "Docker", "SQL", "REST API", "Java", "C++", "Python", "Git Workflow"];
    
    return (
        <section id="skills" className="py-16 px-8">
            <h2 className="text-3xl font-bold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map(skill => <SkillTag key={skill} skill={skill} />)}
            </div>
        </section>
    );
}