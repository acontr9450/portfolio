type SkillTagProps = { skill: string };

export default function SkillTag({ skill }: SkillTagProps) {
    return (
        <span className="px-4 py-2 border rounded-lg shadow text-sm">{skill}</span>
    );
}