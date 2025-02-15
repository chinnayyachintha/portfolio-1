import React from 'react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Professional headshot"
            className="rounded-lg shadow-xl"
          />
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Passionate about Cloud & DevOps
          </h3>
          <p className="text-gray-600 mb-6">
            With over X years of experience in Cloud Infrastructure and DevOps, I specialize in 
            designing and implementing scalable, secure, and efficient cloud solutions. My expertise 
            spans across major cloud platforms including AWS and Azure, with a strong focus on 
            infrastructure automation, CI/CD pipelines, and container orchestration.
          </p>
          <p className="text-gray-600 mb-6">
            As a Site Reliability Engineer, I'm dedicated to maintaining high availability and 
            performance of cloud infrastructure while implementing best practices in monitoring, 
            logging, and incident response.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-32 font-semibold text-gray-900">Location:</span>
              <span className="text-gray-600">Your Location</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold text-gray-900">Experience:</span>
              <span className="text-gray-600">X+ Years</span>
            </div>
            <div className="flex items-center">
              <span className="w-32 font-semibold text-gray-900">Education:</span>
              <span className="text-gray-600">Your Degree</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;