
import React from 'react';
const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO',
    image: '/path-to-image/john.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    image: '/path-to-image/jane.jpg',
  },
  // Add more team members here
];

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-10">
          Welcome to Foodie app. We are passionate about very qick time sevices. Our
          journey began in 2024, and since then, we have been committed to Start.
        </p>
        <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-16">
           We strive to create a positive
          impact through our work and your response who share our vision.
        </p>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center m-6">
                
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-2 text-lg text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;