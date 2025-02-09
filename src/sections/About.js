"use client";

import { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('Experience');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Experience':
        return (
          <div className="tab-content mt-8 font-comic-neue font-bold">
            <div className="flex items-center mb-4">
              <img src="/google-logo.svg" alt="Google Logo" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-light-green">Software Engineer Intern</h3>
                <p className="text-white"> Google, YouTube</p>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(17, 50, 38, 0.80', color: 'white' }}>Incoming</span>
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 111, 99, 1.00)', color: 'white' }}>San Bruno, CA</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="/google-logo.svg" alt="Google Logo" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-light-green">Software Engineer Intern (STEP II)</h3>
                <p className="text-white">Google, Dialer</p>
                <div className="flex space-x-2 mt-2">
                <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(17, 50, 38, 0.80', color: 'white' }}>May - Aug 2024</span>
                <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 111, 99, 1.00)', color: 'white' }}>San Jose, CA</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(245, 116, 163, 0.89)', color: 'white' }}>Java</span>
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(245, 116, 163, 0.89)', color: 'white' }}>Kotlin</span>
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(245, 116, 163, 0.89)', color: 'white' }}>Mobile Dev</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="/google-logo.svg" alt="Google Logo" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-light-green">Software Engineer Intern (STEP I)</h3>
                <p className="text-white">Google, Dialer</p>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(17, 50, 38, 0.80', color: 'white' }}>May - Aug 2023</span>
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 111, 99, 1.00)', color: 'white' }}>Mountain View, CA</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(245, 116, 163, 0.89)', color: 'white' }}>Java</span>
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(245, 116, 163, 0.89)', color: 'white' }}>Kotlin</span>
                  <span className="px-4 py-1 rounded-full" style={{ backgroundColor: 'rgba(245, 116, 163, 0.89)', color: 'white' }}>Mobile Dev</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Education':
        return (
          <div className="tab-content">
            <ul>
              <li>Columbia University</li>
              <li>Walnut Hills High School</li>
            </ul>
          </div>
        );
      case 'Skills':
        return (
          <div className="tab-content">
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        );
      case 'Organizations':
        return (
          <div className="tab-content">
            <ul>
              <li>Management Leadership for Tomorrow (MLT)</li>
              <li>National Society of Black Engineers (NSBE)</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen py-32 px-8 bg-dark-green flex flex-col md:flex-row justify-center items-start">
      <div className="md:w-1/2 flex justify-center">
        <img src="/headshotLI.svg" alt="Profile" className="" />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-acorn text-light-green">
          I'm a Software Engineer based in <br /> New York, NY
        </h2>
        <a href="#" className="inline-block mt-6 mb-[-10px]">
          <img src="/resume-button.svg" alt="Resume Button" className="w-auto h-auto" />
        </a>
        <p className="mt-4 text-white text-[18px] font-comic-neue font-bold">
          Here is some yapping to fill up the space so I can see how this looks in paragraph format. Over the years I've done etcetera from the comfy dorm at Columbia University.
        </p>
        <p className="mt-6 text-white text-[18px] font-comic-neue font-bold">
          I mainly work on blah blah and then I pivoted to the creative space on the endeavors to create this website right here.
        </p>
        <div className="mt-[17px]">
          <div className="tab-titles flex space-x-8 mb-4">
            {['Experience', 'Education', 'Skills', 'Organizations'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab-links text-xl font-comic-neue font-bold ${activeTab === tab ? 'underline text-light-green' : 'text-white'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="tab-contents text-light-green">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
  