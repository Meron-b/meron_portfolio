import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-light-green">
      
    

      {/* Left Code Carrot */}
      <img
        src="/less-than.svg"
        alt="LeftCarrot"
        width={220}
        height={220}
        // className="absolute top-20 left-[20%] md:left-[17%]"
        className="absolute top-[20vh] left-[10vw] w-[20vw] min-w-[80] max-w-[220]"

      />

      {/* Right Code Carrot */}
      <img
          src="/greater-than.svg"
          alt="RightCarrot"
          width={100}
          height={100}
          // className="absolute top-[57%] right-[10%] md:right-[15%]"
          className="absolute top-[55vh] right-[10vw] w-[10vw] max-w-[100px]"
        />

 

      {/* Hero Text */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="text-[8vw] font-acorn leading-tight">Hi. I'm Meron.</h1>
        <h1 className="text-[8vw] font-acorn leading-[7.5vw]">A Developer</h1>

        {/* Subheading */}
        <p className="mt-[5vw] text-[1.5vw] text-[#d4ede4] max-w-[60vw]">
          I'm passionate about building products that are efficient, impactful, and user-centric. 
        </p>
      </div>


    </section>
  );
};

export default Hero;
