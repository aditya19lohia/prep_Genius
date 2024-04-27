import React from 'react';
import './AboutSection.css'; // Import CSS file for styling

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="logo">PrepGenius</div>
      <div className="details">
        <h2>Welcome to PrepGenius</h2>
        <p>
          PrepGenius is a platform designed to help aspiring software developers excel in their careers.
          We provide a comprehensive set of tools and resources, including quizzes, mock interviews, and a supportive community,
          to help you prepare effectively and confidently for success in the software industry.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
