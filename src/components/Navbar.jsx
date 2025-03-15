"use client";
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Track scroll position to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'gallery'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] pointer-events-none">
      <div className="bg-[#233931]/40 backdrop-blur-sm rounded-full px-6 py-3 flex items-center space-x-8 border border-[#8FDBC2]/30 pointer-events-auto">
        <div className="text-white font-acorn text-lg">
          Meron Belachew
        </div>
        
        <div className="flex space-x-6">
          {[
            { id: 'about', label: 'About' },
            { id: 'projects', label: '/Work' },
            { id: 'gallery', label: 'Contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setActiveSection(item.id);
              }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`
                relative font-comic-neue text-lg transition-all duration-300 px-3 py-1 rounded-full text-white
                ${activeSection === item.id 
                  ? 'bg-light-green/20 border border-light-green/40' 
                  : hoveredItem === item.id ? 'bg-white/10' : ''
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 