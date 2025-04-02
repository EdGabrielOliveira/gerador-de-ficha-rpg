import React from 'react';

interface Skill {
  id: number;
  name: string;
  description: string;
}

interface SkillListProps {
  skills: Skill[];
}

const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Habilidades</h2>
      <ul className="list-disc pl-5">
        {skills.map(skill => (
          <li key={skill.id} className="mb-1">
            <strong>{skill.name}:</strong> {skill.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;