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
                  <span className="px-4 py-1 rounded-full text-white bg-[#233931]">Incoming</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#4A6F63]">San Bruno, CA</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="/remod-logo.svg" alt="Remod Logo" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-light-green">Software Engineer Intern</h3>
                <p className="text-white">Remod (Columbia Build Lab Startup)</p>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full text-white bg-[#233931]">Feb 2025 - Present</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#4A6F63]">New York, NY</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">Python</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">Next.js</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">React</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">AI</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="/google-logo.svg" alt="Google Logo" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-light-green">Software Engineer Intern (STEP II)</h3>
                <p className="text-white">Google, Dialer</p>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full text-white bg-[#233931]">May - Aug 2024</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#4A6F63]">San Jose, CA</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">Java</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">Kotlin</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">Mobile Dev</span>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <img src="/google-logo.svg" alt="Google Logo" className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-light-green">Software Engineer Intern (STEP I)</h3>
                <p className="text-white">Google, Dialer</p>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full text-white bg-[#233931]">May - Aug 2023</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#4A6F63]">Mountain View, CA</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">Java</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">Kotlin</span>
                  <span className="px-4 py-1 rounded-full text-white bg-[#F574A3]">Mobile Dev</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'Education':
        return (
          <div className="tab-content mt-8 font-comic-neue font-bold">
            <div className="flex gap-20">
              <div>
                <p className="text-light-green text-[16px]">Sep 2022 - Present</p>
                <h3 className="text-white text-[18px]">Columbia University</h3>
              </div>
              
              <div>
                <p className="text-light-green text-[16px]">Aug 2018 - May 2022</p>
                <h3 className="text-white text-[18px]">Walnut Hills High School</h3>
              </div>
            </div>
          </div>
        );
      case 'Skills':
        return (
          <div className="tab-content mt-8 font-comic-neue font-bold">
            <div className="grid grid-cols-4 gap-8">
              <div className="space-y-6">
                <p className="text-light-green text-[16px]">Java</p>
                <p className="text-light-green text-[16px]">JavaScript</p>
                <p className="text-light-green text-[16px]">Next.js</p>
              </div>
              
              <div className="space-y-6">
                <p className="text-light-green text-[16px]">C/C++</p>
                <p className="text-light-green text-[16px]">HTML/CSS</p>
                <p className="text-light-green text-[16px]">Typescript</p>
              </div>
              
              <div className="space-y-6">
                <p className="text-light-green text-[16px]">Python</p>
                <p className="text-light-green text-[16px]">CUDA</p>
              </div>
              
              <div className="space-y-6">
                <p className="text-light-green text-[16px]">Kotlin</p>
                <p className="text-light-green text-[16px]">React</p>
              </div>
            </div>
          </div>
        );
      case 'Organizations':
        return (
          <div className="tab-content mt-8 font-comic-neue font-bold">
            <div className="grid grid-cols-2 gap-32">
              <div className="space-y-6">
                <p className="text-light-green text-[16px]">Management Leadership for Tomorrow (MLT)</p>
                <p className="text-light-green text-[16px]">National Society of Black Engineers (NSBE)</p>
              </div>
              
              <div className="space-y-6">
                <p className="text-light-green text-[16px]">Colorstack</p>
                <p className="text-light-green text-[16px]">RTC</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="min-h-screen py-32 pb-48 px-8 flex flex-col md:flex-row justify-center items-start">
      <div className="md:w-1/2 flex justify-center">
        <img src="/headshotLI.svg" alt="Profile" className="" />
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl font-acorn text-light-green">
          I'm a Software Engineer based in <br /> New York, NY
        </h2>
        <a 
          href="https://meronbelachew.notion.site/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-block mt-6 mb-[-10px] transform transition-all duration-200 hover:scale-105 hover:opacity-80 hover:-translate-y-1"
        >
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
                className={`
                  tab-links text-xl font-comic-neue font-bold text-white
                  relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-light-green after:rounded-full
                  ${activeTab === tab 
                    ? 'after:w-[70%] text-light-green' 
                    : 'after:w-0 hover:after:w-[70%] after:transition-all after:duration-300'
                  }
                `}
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
  