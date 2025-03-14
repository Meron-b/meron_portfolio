const Footer = () => {
    return (
      <footer className="py-6 text-[#d4ede4] text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
          <a href="#" className="hover:text-gray-400">GitHub</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  