import React from "react";
import "./App.css";

function ProjectCard({ title, company, year }) {
  return (
    // Removed fixed aspect ratio and replaced max-w with a utility class for better responsiveness
    <div className="project-card bg-white rounded-xl shadow-md w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto overflow-hidden">
      <div className="flex flex-col p-4 sm:p-6"> {/* Use standard padding for better scaling */}
        
        {/* Title */}
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-black text-left leading-snug">
            {title}
          </h3>
          <hr className="border-gray-300 my-3" />
        </div>

        {/* Metadata */}
        <div className="flex justify-between text-sm text-black mb-3">
          <span>{company}</span>
          <span>{year}</span>
        </div>

        {/* Visual Placeholder */}
        {/* On mobile, we use a fixed height (e.g., 200px) or a proportional height (e.g., h-48) 
            to ensure it is always visible, even if the title wraps significantly. */}
        <div className="relative bg-gray-400 w-full h-48 sm:h-64 rounded-lg mt-2"> 
          <div className="absolute bottom-4 right-4 bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-white text-lg">
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Charvi_Golechha_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="app font-inter bg-white text-gray-900 min-h-screen px-4 md:px-8">
      {/* Header */}
      <button
        onClick={handleResumeDownload}
        className="fixed top-4 right-4 bg-white border border-gray-800 text-gray-800 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition-all z-50"
      >
        Resume
      </button>

      {/* Home Section */}
      <section className="home flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Charvi Golechha</h1>
        <p className="text-lg md:text-xl text-gray-800 text-center">
          UX Researcher • Product Designer • Wannabe Analyst
        </p>
      </section>

      {/* My Work Section */}
      <section className="my-work py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 text-left">My Work</h2>
        <p className="italic text-gray-500 mb-8 text-left">(what you’re probably here for)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <ProjectCard
              key={i}
              title="Driving player-learning experience for casual puzzle games"
              company="Playsimple Games"
              year="2025"
            />
          ))}
        </div>
      </section>

      {/* My Life Section */}
      <section className="my-life py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4">
        
        {/* Left Content Block - Corrected Responsive Polaroid */}
        <div className="w-full md:w-2/3 md:max-w-[600px] mx-auto md:mx-0">
          
          {/* The entire white frame container */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            
            {/* 1. Image Placeholder Area (The Thin-Bordered Part) */}
            {/* Set the responsive height for the image area using Tailwind's aspect ratio */}
            <div className="relative w-full aspect-w-4 aspect-h-3 bg-gray-300"> 
                {/* We use a slightly darker gray inside to simulate the actual picture area */}
                <div className="w-full h-full bg-gray-400"></div> 
            </div>

            {/* 2. Thick Bottom White Border/Caption Area */}
            {/* This area has a fixed height/padding to simulate the thick bottom frame */}
            <div className="p-4 bg-white flex flex-col justify-center">
              <p className="text-black text-base text-left font-normal leading-tight">
                Presenting my research on scalable game design at Gamafest 2025
              </p>
            </div>
          </div>
          
        </div>

        {/* Right Heading Block (Moves below on mobile, left-aligned) */}
        <div className="flex-shrink-0 w-full mt-6 text-left md:w-1/3 md:mt-0 md:text-right">
          <h2 className="text-4xl font-bold text-black">My Life</h2>
          <p className="italic text-gray-500">(what i wish you were here for)</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-20 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
        <p className="text-lg leading-relaxed">
          (what i wish you were here for) (what i wish you were here for) (what i wish you were here for) (what i wish you were here for) (what i wish you were here for)
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-gray-300">
        <p className="mb-2">golechhacharvi@gmail.com</p>
        <p className="mb-2">© 2025 Charvi Golechha • Designed & coded with care.</p>
        <p className="flex justify-center gap-4 flex-wrap">
          <a href="https://linkedin.com/in/charvigolechha" target="_blank" className="text-gray-800 hover:text-gray-600">LinkedIn</a>• 
          <a href="https://behance.net/charvigolechha" target="_blank" className="text-gray-800 hover:text-gray-600">Behance</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
