type SkillTagProps = { skill: string };

export default function SkillTag({ skill }: SkillTagProps) {
    const skills = ["React", "TypeScript", "Vite", "Docker", "SQL", "REST API", "Java", "C++", "Python", "Git"];
    return (
        <span className="px-4 py-2 border rounded-lg shadow text-sm">{skill}</span>
    );
}