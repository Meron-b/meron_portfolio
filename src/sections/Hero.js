const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col items-center justify-center text-light-green relative">
      {/* Left Code Carrot */}
      <img
        src="/less-than.svg"
        alt="LeftCarrot"
        width={220}
        height={220}
        // className="absolute top-20 left-[20%] md:left-[17%]"
        className="absolute top-[20vh] left-[10vw] w-[20vw] min-w-[80] max-w-[220] z-0"
      />

      {/* Right Code Carrot */}
      <img
          src="/greater-than.svg"
          alt="RightCarrot"
          width={100}
          height={100}
          // className="absolute top-[57%] right-[10%] md:right-[15%]"
          className="absolute top-[55vh] right-[10vw] w-[10vw] max-w-[100px] z-0"
        />

      {/* Hero Text */}
      <div className="absolute top-[30vh] left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-[8vw] font-acorn leading-tight">Hi. I'm Meron.</h1>
        <h1 className="text-[8vw] font-acorn leading-[7.5vw]">A Developer</h1>
        
      </div>
    </section>
  );
};

export default Hero;
