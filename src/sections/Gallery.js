const Gallery = () => {
    return (
      <section id="gallery" className="pt-40 pb-20 px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-[22px] font-comic-neue font-bold text-white mb-3">
            When I'm not coding...
          </p>
          <h2 className="text-[40px] font-acorn text-left text-light-green mb-16">
            I'm leading Columbia's largest entrepreneurship org.
          </h2>
          
          {/* Images container with top alignment, centered horizontally */}
          <div className="mt-20 flex items-start justify-center gap-4">
            {/* Column with kalshi.png and pitch.png stacked */}
            <div className="flex flex-col gap-4">
              <img 
                src="/kalshi.png" 
                alt="Kalshi" 
                className="w-auto h-auto rounded-lg shadow-md"
              />
              
              <img 
                src="/pitch.png" 
                alt="Pitch" 
                className="w-auto h-auto rounded-lg shadow-md"
              />
            </div>
            
            {/* Column with beli.png, dantooney.png and pm.png stacked */}
            <div className="flex flex-col gap-4">
              <img 
                src="/beli.png" 
                alt="Beli" 
                className="w-auto h-auto rounded-lg shadow-md"
              />
              
              <img 
                src="/dantooney.png" 
                alt="Dan Tooney" 
                className="w-auto h-auto rounded-lg shadow-md"
              />
              
              <img 
                src="/pm.png" 
                alt="Product Management" 
                className="w-auto h-auto rounded-lg shadow-md"
              />
            </div>
            
            {/* Column with almaworks-team.png and network.png stacked */}
            <div className="flex flex-col gap-4">
              <img 
                src="/almaworks-team.png" 
                alt="Almaworks Team" 
                className="w-auto h-auto rounded-lg shadow-md"
              />
              
              <img 
                src="/network.png" 
                alt="Network" 
                className="w-auto h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;
  