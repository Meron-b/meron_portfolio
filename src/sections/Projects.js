const Projects = () => {
  return (
    <section id="projects" className="relative pt-32 pb-32 px-8 bg-[#EDE2D6]">
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
      
      <div className="flex flex-col items-end max-w-6xl mx-auto pr-2 md:pr-4 relative z-20">
        <h1 className="text-6xl font-acorn text-[#4A6F63] mb-20">Projects</h1>
        
        <div className="w-full md:w-1/2 lg:w-1/3">
          <img 
            src="/android-phone.svg" 
            alt="Android Phone" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
  