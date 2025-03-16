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
              {/* Kalshi image with hover animation */}
              <div className="relative group/kalshi overflow-hidden rounded-lg">
                <img 
                  src="/kalshi.png" 
                  alt="Kalshi" 
                  className="w-auto h-auto transition-transform duration-300 group-hover/kalshi:scale-105"
                />
                
                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-white/15  backdrop-blur-sm opacity-0 transition-opacity duration-300 
                               group-hover/kalshi:opacity-100 flex items-center justify-center">
                  <p className="text-[#ffffff] font-comic-neue font-bold text-center px-4 transform translate-y-4 
                               transition-transform duration-300 group-hover/kalshi:translate-y-0">
                    CORE x Kalshi Founder Series Event
                  </p>
                </div>
              </div>
              
              {/* Pitch image with hover animation */}
              <div className="relative group/pitch overflow-hidden rounded-lg">
                <img 
                  src="/pitch.png" 
                  alt="Pitch" 
                  className="w-auto h-auto transition-transform duration-300 group-hover/pitch:scale-105"
                />
                
                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-white/15 backdrop-blur-sm opacity-0 transition-opacity duration-300 
                               group-hover/pitch:opacity-100 flex items-center justify-center">
                  <p className="text-[#ffffff] font-comic-neue font-bold text-center px-4 transform translate-y-4 
                               transition-transform duration-300 group-hover/pitch:translate-y-0">
                    Almaworks Accelerator Demo Day
                  </p>
                </div>
              </div>
            </div>
            
            {/* Column with beli.png, dantooney.png and pm.png stacked */}
            <div className="flex flex-col gap-4">
              {/* Beli image with hover animation */}
              <div className="relative group/beli overflow-hidden rounded-lg">
                <img 
                  src="/beli.png" 
                  alt="Beli" 
                  className="w-auto h-auto transition-transform duration-300 group-hover/beli:scale-105"
                />
                
                {/* Hover overlay with text */}
                <div className="absolute inset-0 #EDE2D6/25  backdrop-blur-sm opacity-0 transition-opacity duration-300 
                               group-hover/beli:opacity-100 flex items-center justify-center">
                  <p className="text-[#ffffff] font-comic-neue font-bold text-center px-4 transform translate-y-4 
                               transition-transform duration-300 group-hover/beli:translate-y-0">
                    CORE x Beli Founder Series Event
                  </p>
                </div>
              </div>
              
              {/* Dan Tooney image with hover animation */}
              <div className="relative group/dantooney overflow-hidden rounded-lg">
                <img 
                  src="/dantooney.png" 
                  alt="Dan Tooney" 
                  className="w-auto h-auto transition-transform duration-300 group-hover/dantooney:scale-105"
                />
                
                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-white/15  backdrop-blur-sm opacity-0 transition-opacity duration-300 
                               group-hover/dantooney:opacity-100 flex items-center justify-center">
                  <p className="text-[#ffffff] font-comic-neue font-bold text-center px-4 transform translate-y-4 
                               transition-transform duration-300 group-hover/dantooney:translate-y-0">
                    CORE x Dan Tooney Founder Series Event
                  </p>
                </div>
              </div>
              
              {/* PM image with hover animation */}
              <div className="relative group/pm overflow-hidden rounded-lg">
                <img 
                  src="/pm.png" 
                  alt="Product Management" 
                  className="w-auto h-auto transition-transform duration-300 group-hover/pm:scale-105"
                />
                
                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-white/15 backdrop-blur-sm opacity-0 transition-opacity duration-300 
                               group-hover/pm:opacity-100 flex items-center justify-center">
                  <p className="text-[#ffffff] font-comic-neue font-bold text-center px-4 transform translate-y-4 
                               transition-transform duration-300 group-hover/pm:translate-y-0">
                    Product Management Fellowship
                  </p>
                </div>
              </div>
            </div>
            
            {/* Column with almaworks-team.png and network.png stacked */}
            <div className="flex flex-col gap-4">
              {/* Almaworks Team image with hover animation */}
              <div className="relative group/almaworks overflow-hidden rounded-lg">
                <img 
                  src="/almaworks-team.png" 
                  alt="Almaworks Team" 
                  className="w-auto h-auto transition-transform duration-300 group-hover/almaworks:scale-105"
                />
                
                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-white/15  backdrop-blur-sm opacity-0 transition-opacity duration-300 
                               group-hover/almaworks:opacity-100 flex items-center justify-center">
                  <p className="text-[#ffffff] font-comic-neue font-bold text-center px-4 transform translate-y-4 
                               transition-transform duration-300 group-hover/almaworks:translate-y-0">
                    Almaworks Accelerator Demo Day
                  </p>
                </div>
              </div>
              
              {/* Network image with hover animation */}
              <div className="relative group/network overflow-hidden rounded-lg">
                <img 
                  src="/network.png" 
                  alt="Network" 
                  className="w-auto h-auto transition-transform duration-300 group-hover/network:scale-105"
                />
                
                {/* Hover overlay with text */}
                <div className="absolute inset-0 bg-white/15 backdrop-blur-sm opacity-0 transition-opacity duration-300 
                               group-hover/network:opacity-100 flex items-center justify-center">
                  <p className="text-[#ffffff] font-comic-neue font-bold text-center px-4 transform translate-y-4 
                               transition-transform duration-300 group-hover/network:translate-y-0">
                    CORE Founder Mixer
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stats section */}
          <div className="mt-24 flex justify-start gap-20">
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-acorn text-light-green">500+</h3>
              <p className="text-xl font-comic-neue font-bold text-white mt-2">Reach in nyc</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-acorn text-light-green">100+</h3>
              <p className="text-xl font-comic-neue font-bold text-white mt-2">Members</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-acorn text-light-green">15+</h3>
              <p className="text-xl font-comic-neue font-bold text-white mt-2">Events per month</p>
            </div>
            
            <div className="flex flex-col items-center">
              <h3 className="text-5xl font-acorn text-light-green">12</h3>
              <p className="text-xl font-comic-neue font-bold text-white mt-2">Initiatives</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Gallery;
  