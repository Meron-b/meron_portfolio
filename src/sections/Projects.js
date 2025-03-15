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
  