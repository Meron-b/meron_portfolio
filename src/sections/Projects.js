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
        
        <div className="flex flex-col md:flex-row items-start justify-between w-full">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-0 md:mt-8">
            <h2 className="text-5xl md:text-6xl font-acorn text-[#A79687] leading-tight">
              I work on Android<br />Mobile apps
            </h2>
            
            {/* Project Showcase */}
            <div 
              className="relative rounded-xl overflow-hidden bg-[#E0ABC5]/[0.59] p-6 mt-20"
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
                className="absolute bottom-0 right-5 transition-transform duration-300 hover:scale-105"
                style={{ width: '437px', height: '308px' }}
              >
                <img 
                  src="/android-phone-half.svg" 
                  alt="Project Screenshot" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 lg:w-1/3 self-end">
            <img 
              src="/android-phone.svg" 
              alt="Android Phone" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
  