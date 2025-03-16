const Footer = () => {
  return (
    <footer className="pt-4 pb-20 px-8 text-white relative font-comic-neue font-bold">
      <div className="max-w-6xl mx-auto -mt-4 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Copyright section with tech stack hover */}
          <div className="mb-6 md:mb-0 flex items-center group relative">
            <span className="flex items-center group-hover:text-light-green transition-colors duration-300">
              <img src="/copyright-icon.svg" alt="Copyright" className="w-5 h-5 mr-2" />
              2024 Meron Belachew
            </span>
            
            {/* Tech stack card - appears on hover */}
            <div className="absolute left-0 top-8 bg-[#233931]/90 border border-light-green/30 rounded-lg p-4 w-[550px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <div className="grid grid-cols-2 gap-x-4">
                {/* Left column - technology items */}
                <div className="space-y-2">
                  <div className="flex items-center">
                    <span className="flex justify-center items-center w-6">
                      <img src="/figma-icon.svg" alt="Figma" className="w-4 h-4" />
                    </span>
                    <span className="text-white ml-2">Figma for rectangles</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="flex justify-center items-center w-6">
                      <img src="/react-icon.svg" alt="React" className="w-4 h-4" />
                    </span>
                    <span className="text-white ml-2">React for code</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="flex justify-center items-center w-6">
                      <img src="/github-icon-grey.svg" alt="GitHub" className="w-4 h-4" />
                    </span>
                    <span className="text-white ml-2">GitHub for versions</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="flex justify-center items-center w-6">
                      <img src="/vercel-icon.svg" alt="Vercel" className="w-4 h-4" />
                    </span>
                    <span className="text-white ml-2">Vercel for launch</span>
                  </div>
                </div>
                
                {/* Right column - typography description */}
                <div className="text-white text-right pt-0.5">
                  <p className="leading-tight mb-1">Acorn Semibold for headlines</p>
                  <p className="leading-tight mb-1">Comic-neue Bold for body</p>
                  <p className="leading-tight">design inspired by seanhalpin.xyz</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side sections grouped with less space between them */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            {/* Middle section - Platforms */}
            <div className="mb-6 md:mb-0">
              <h3 className="text-light-green text-lg mb-3">Platforms</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://meronbelachew.notion.site/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center no-underline hover:underline decoration-white decoration-2 underline-offset-2 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 mr-4 group-hover:animate-bounce" style={{ animationDuration: '0.7s' }}>
                      <img 
                        src="/doc-icon.svg" 
                        alt="Resume" 
                        className="w-6 h-6" 
                      />
                    </div>
                    Resume/CV
                  </a>
                </li>
                <li>
                  <a 
                    href="https://github.com/Meron-b"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center no-underline hover:underline decoration-white decoration-2 underline-offset-2 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 mr-4 group-hover:animate-bounce" style={{ animationDuration: '0.7s' }}>
                      <img 
                        src="/github-icon.svg" 
                        alt="GitHub" 
                        className="w-6 h-6" 
                      />
                    </div>
                    GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/meron-belachew-330a44201/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center no-underline hover:underline decoration-white decoration-2 underline-offset-2 transition-all duration-300 group"
                  >
                    <div className="w-6 h-6 mr-4 group-hover:animate-bounce" style={{ animationDuration: '0.7s' }}>
                      <img 
                        src="/linkedin-icon.svg" 
                        alt="LinkedIn" 
                        className="w-6 h-6" 
                      />
                    </div>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Right section - Contact - aligned with logo */}
            <div className="md:pr-12">
              <h3 className="text-light-green text-lg mb-3">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="hover:text-light-green transition-colors duration-300"
                  >
                    Ask Meron Bot
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:mtb2173@columbia.edu" 
                    className="no-underline hover:underline decoration-white decoration-2 underline-offset-2 transition-all duration-300"
                  >
                    mtb2173@columbia.edu
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:2408938797" 
                    className="transition-all duration-300"
                  >
                    240-893-8797
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* MB Logo in bottom right - position unchanged */}
        <div className="absolute bottom-10 right-12">
          <img src="/meron-footer.svg" alt="MB Logo" className="w-16 h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  