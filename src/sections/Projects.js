const Projects = () => {
  return (
    <section id="projects" className="relative pt-10 pb-32 px-8 bg-[#EDE2D6]">
      {/* Curved top edge - curved upward */}
      <div 
        className="absolute top-0 left-0 right-0 h-[100px] -translate-y-[99%] z-10"
        style={{
          background: '#EDE2D6',
          borderRadius: '50% 50% 0 0'
        }}
      ></div>
      
      {/* Curved bottom edge - curved downward */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[100px] translate-y-[99%] z-10"
        style={{
          background: '#EDE2D6',
          borderRadius: '0 0 50% 50%'
        }}
      ></div>
      
      <div className="flex flex-col max-w-6xl mx-auto relative z-20">
        <h1 className="text-6xl font-acorn text-[#4A6F63] mb-20 self-end pr-4">Projects</h1>
        
        <div className="flex flex-col md:flex-row items-start justify-between w-full -mt-10">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-0">
            <h2 className="text-5xl md:text-5xl font-acorn text-[#A79687] leading-tight">
              I work on Android<br />Mobile apps
            </h2>
            
            {/* Project Showcase 1 */}
            <div 
              className="relative overflow-hidden bg-[#E0ABC5]/[0.59] p-6 mt-20 transition-transform duration-300 hover:-translate-y-2 group rounded-[30px]"
              style={{ width: '565px', height: '420px' }}
            >
              <div className="absolute top-6 right-6 text-right">
                <span className="text-[20px] font-comic-neue text-[#4A6F63] text-lg">Dialer</span>
                
                <h3 className="text-[24px] font-acorn text-[#4A6F63] mt-0 text-right">
                  DTMF Player API and Feature Integrations
                </h3>
              </div>
              
              {/* Green phone in bottom left */}
              <div 
                className="absolute bottom-6 left-6"
                style={{ width: '24px', height: '24px' }}
              >
                <img 
                  src="/green-mini-phone.svg" 
                  alt="Green Phone" 
                  className="w-full h-full"
                />
              </div>
              
              {/* Android phone half in bottom right */}
              <div 
                className="absolute -bottom-2 right-5 transition-all duration-300 group-hover:translate-y-6"
                style={{ width: '437px', height: '308px' }}
              >
                <img 
                  src="/android-phone-half.svg" 
                  alt="Project Screenshot" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Project Showcase 2 */}
            <div 
              className="relative overflow-hidden bg-[#F4B400]/[0.23] p-6 mt-10 transition-transform duration-300 hover:-translate-y-2 group rounded-[30px]"
              style={{ width: '565px', height: '420px' }}
            >
              <div className="absolute top-6 right-6 text-right">
                <span className="text-[20px] font-comic-neue text-[#4A6F63] text-lg">Dialer</span>
                
                <h3 className="text-[24px] font-acorn text-[#4A6F63] mt-0 text-right">
                  Debug Timeline User Interaction Integration
                </h3>
              </div>
              
              {/* Green phone in bottom left */}
              <div 
                className="absolute bottom-6 left-6"
                style={{ width: '24px', height: '24px' }}
              >
                <img 
                  src="/green-mini-phone.svg" 
                  alt="Green Phone" 
                  className="w-full h-full"
                />
              </div>
              
              {/* Profetto image in bottom right */}
              <div 
                className="absolute -bottom-1 -right-1 transition-all duration-300 group-hover:translate-y-6"
                style={{ width: '490px', height: '290px' }}
              >
                <img 
                  src="/profetto.svg" 
                  alt="Project Screenshot" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'right bottom' }}
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-1/3 self-end flex justify-center">
            <img 
              src="/android-phone.svg" 
              alt="Android Phone" 
              className="w-auto h-auto scale-[1.3] transform-gpu"
            />
          </div>
        </div>
        
        {/* Other Explorations Section */}
        <div className="mt-36 flex flex-col items-center">
          <h2 className="text-5xl font-acorn text-[#A79687] mb-24 self-start">Other explorations</h2>
          
          {/* Research Paper Showcase */}
          <div 
            className="bg-white/[0.47] rounded-[30px] p-8 transition-transform duration-300 hover:-translate-y-2 border border-white flex flex-col items-center group"
            style={{ width: '1162px', height: '548px' }}
          >
            
            {/* Yellow rectangle with rounded top corners */}
            <div className="bg-[#F1BF42] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-0 rounded-br-0 mb-6 flex justify-center overflow-hidden relative"
                 style={{ width: '1017px', height: '303px' }}>
              
              {/* Robotic icon - repositioned to top left */}
              <div className="absolute top-8 left-8">
                <img src="/robotic-icon.svg" alt="Robotics Icon" className="w-[76px] h-[76px]" />
              </div>
              
              <div className="flex p-6 w-full justify-center">
                {/* Research paper images */}
                <div className="w-full flex items-end h-full pb-0 relative">
                  <div className="flex gap-0 mt-auto absolute bottom-0 right-0">
                    <img 
                      src="/research-papers.svg" 
                      alt="Research Papers" 
                      width={616}
                      height={256}
                      className="h-auto relative -left-10 translate-y-[23px] transition-all duration-300 group-hover:translate-y-[35px]"
                      style={{ marginBottom: '-1px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Project title and details */}
            <div className="max-w-4xl text-left self-start">
              <a 
                href="https://drive.google.com/file/d/1F_OJPspKjxu7aa-ESgjO_PF2JoZPUc9R/view?usp=sharing"
                target="_blank" 
                rel="noopener noreferrer" 
                className="block transition-all duration-200 hover:text-[#3a5a50] group/link"
              >
                <h3 className="text-[32px] font-acorn text-[#4A6F63] mt-6 relative">
                  Parallel Optimization of Inverse Kinematics Algorithms
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3a5a50] transition-all duration-300 group-hover/link:w-full"></span>
                </h3>
              </a>
              <p className="text-[18px] font-comic-neue text-[#4A6F63] mt-2">
                A Comparative Research Study of CCD, Parallel DLS-IK, and Newton-Raphson Methods
              </p>
              <div className="flex gap-3 mt-4">
                <span className="px-4 py-1 rounded-full text-white bg-[#F574A3] text-sm">CUDA</span>
                <span className="px-4 py-1 rounded-full text-white bg-[#F574A3] text-sm">C++</span>
                <span className="px-4 py-1 rounded-full text-white bg-[#F574A3] text-sm">Python</span>
                <span className="px-4 py-1 rounded-full text-white bg-[#F574A3] text-sm">GPU Programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
  