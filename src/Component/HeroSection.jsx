import { Users, Code2, Stars , ChevronRight } from "lucide-react";

const HeroSection = () => {
  
  return (
    <section className="text-center py-20 bg-gradient-to-b hero-section  ">
      {/* Badge */}
     <div className="flex flex-col items-center space-y-3">
    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-500 font-medium text-sm shadow-sm">
      <Stars className="w-4 h-4" />
      Building the future, one cup at a time
    </div>

    <h1
      className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(to right, #3858beff, #268bcfff, #17c8c8ee, #6943c0ff)",
      }}
    >
      Welcome to BuildOnCoffee
    </h1>
  </div>




      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mt-5 mx-auto mb-10">
        Join our community of passionate developers. Learn cutting-edge technologies,
        discover powerful tools, and build amazing projects together.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
    <a
  href="#tools"
  className="inline-flex items-center gap-2 px-6 py-2 rounded-xl font-semibold shadow text-white hover:opacity-90 border border-white/20 transition"
  style={{
    backgroundImage: "linear-gradient(90deg, #3858be, #268bcf, #17c8c8)",
    backgroundClip: "padding-box",
    border: "1px solid rgba(255,255,255,0.2)",
    WebkitBackgroundClip: "padding-box",
    overflow: "hidden",         // ensures nothing spills
    boxSizing: "border-box",    // safe spacing
  }}
>
  Explore Tools
  <ChevronRight />
</a>





        <a
          href="#community"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 font-semibold text-gray-800 hover:bg-gray-100 transition"
        >
          <Users className="w-4 h-4" />
          Join Community
        </a>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
  <div className="p-6 rounded-xl text-center">
    <div className="bg-blue-100 text-blue-600 w-10 h-10 mx-auto rounded-md flex items-center justify-center mb-2">
      <Users className="w-5 h-5" />
    </div>
    <h3 className="text-xl font-bold">10K+</h3>
    <p className="text-gray-500 text-sm">Active Developers</p>
  </div>
  <div className="p-6 rounded-xl text-center">
    <div className="bg-blue-100 text-blue-600 w-10 h-10 mx-auto rounded-md flex items-center justify-center mb-2">
      <Code2 className="w-5 h-5" />
    </div>
    <h3 className="text-xl font-bold">50+</h3>
    <p className="text-gray-500 text-sm">Tools & Resources</p>
  </div>
  <div className="p-6 rounded-xl text-center">
    <div className="bg-blue-100 text-blue-600 w-10 h-10 mx-auto rounded-md flex items-center justify-center mb-2">
      <Stars className="w- h-5" />
    </div>
    <h3 className="text-xl font-bold">100+</h3>
    <p className="text-gray-500 text-sm">Learning Paths</p>
  </div>
</div>

    </section>
  );
};

export default HeroSection;
