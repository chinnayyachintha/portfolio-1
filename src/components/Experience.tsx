import React from 'react';

const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Company',
    period: '2022 - Present',
    description: [
      'Led the migration of legacy infrastructure to AWS cloud, resulting in 40% cost reduction',
      'Implemented automated CI/CD pipelines using Jenkins and GitHub Actions',
      'Managed Kubernetes clusters and implemented GitOps workflows',
    ],
  },
  {
    title: 'Cloud Infrastructure Engineer',
    company: 'Cloud Solutions Inc',
    period: '2020 - 2022',
    description: [
      'Designed and maintained AWS infrastructure using Terraform',
      'Implemented monitoring and alerting systems using Prometheus and Grafana',
      'Developed automation scripts for routine maintenance tasks',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'StartUp Tech',
    period: '2018 - 2020',
    description: [
      'Set up and maintained CI/CD pipelines for multiple projects',
      'Containerized applications using Docker and deployed to Kubernetes',
      'Implemented infrastructure as code using AWS CDK',
    ],
  },
];

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white"></div>
              </div>

              <div className={`relative ${index % 2 === 0 ? 'pr-12 md:pr-0 md:mr-auto md:w-5/12 md:text-right' : 'pl-12 md:pl-0 md:ml-auto md:w-5/12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm mb-4">
                    {experience.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                  <h4 className="text-lg text-gray-600 mb-4">{experience.company}</h4>
                  <ul className="space-y-2">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;