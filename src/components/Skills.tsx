import React from 'react';

const skillCategories = [
  {
    title: 'Cloud Platforms',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Azure', level: 85 },
      { name: 'Google Cloud', level: 75 },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    skills: [
      { name: 'Terraform', level: 95 },
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 85 },
      { name: 'Jenkins', level: 80 },
    ],
  },
  {
    title: 'Programming & Scripting',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'Bash', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'Go', level: 70 },
    ],
  },
  {
    title: 'Monitoring & Security',
    skills: [
      { name: 'Prometheus', level: 85 },
      { name: 'Grafana', level: 80 },
      { name: 'ELK Stack', level: 75 },
      { name: 'AWS Security', level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;