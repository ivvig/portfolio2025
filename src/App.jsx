import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StackCarousel from "./components/StackCarousel";
import ProjectPage from "./pages/ProjectPage";
import projects from "./data/projects";

/* Project Card */
function ProjectCard({ title, company, year, image, slug }) {
  return (
    <Link to={`/projects/${slug}`} className="block">
      <div className="project-card bg-white rounded-xl shadow-md mx-auto overflow-hidden w-full hover:shadow-lg transition">
        <div className="project-inner-padding">
          <div className="mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-black text-left leading-snug">
              {title}
            </h3>
            <hr className="hr-subtle my-3" />
          </div>

          <div className="flex justify-between text-sm text-gray-800 mb-3">
            <span>{company}</span>
            <span>{year}</span>
          </div>

          <div className="relative w-full rounded-lg overflow-hidden">
            <div className="w-full bg-gray-300 rounded-md flex items-center justify-center">
              {image ? (
                <div className="w-full aspect-[16/9] rounded-md overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover block"
                    draggable="false"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[16/9] bg-gray-400 rounded-md" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

/* Home */
function Home() {
  const lifeItems = [
    { src: "/images/life1.jpg", caption: "Presenting my research on equitable game design at ServDes 2025." },
    { src: "/images/life2.jpg", caption: "Game research talk — ServDes conference snapshot." },
    { src: "/images/life3.jpg", caption: "Fieldwork & playtesting sessions with real players." },
  ];

  return (
    <div className="relative">
      {/* Floating resume button */}
      <a
        href="public/Resume.pdf"
        download
        className="resume-fallback fixed top-4 right-4 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-0.5"
      >
        Resume
      </a>

      {/* Hero */}
      <section className="home flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Charvi Golechha</h1>
        <p className="text-lg md:text-xl text-gray-800 text-center">
          UX Researcher • Product Designer • Wannabe Analyst
        </p>
      </section>

      {/* My Work */}
      <section className="my-work py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-1 text-left">My Work</h2>
        <p className="italic text-gray-500 mb-8 text-left">(what you’re probably here for)</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              title={p.title}
              company={p.company}
              year={p.year}
              image={p.image}
              slug={p.slug}
            />
          ))}
        </div>
      </section>

      {/* My Life */}
      <section className="my-life py-16 relative">
        <div className="max-w-5xl mx-auto flex items-center justify-center">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex-shrink-0 md:w-1/2 flex justify-center">
              <div className="carousel-wrapper max-w-[560px] w-full md:-mr-6">
                <StackCarousel items={lifeItems} interval={4500} />
              </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left title-column">
              <h2 className="text-4xl font-bold text-black">My Life</h2>
              <p className="italic text-gray-500 mt-2">(what I wish you were here for)</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
          I’m a UX designer and researcher driven by curiosity — exploring how people interact with
          systems, interfaces, and each other. My work spans playful experiences, accessibility-focused
          design, and data-informed decision-making. Outside design, I love writing, tennis, and digging
          into game psychology.
        </p>
      </section>

      {/* Get In Touch */}
      <footer className="text-center py-12 border-t border-gray-300">
        <p className="mb-2">golechhacharvi@gmail.com</p>
        <p className="mb-2">© 2025 Charvi Golechha • Designed & coded with care.</p>
        <p className="flex justify-center gap-4 flex-wrap">
          <a href="https://linkedin.com/in/charvigolechha" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">LinkedIn</a>•
          <a href="https://behance.net/charvigolechha" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">Behance</a>
        </p>
      </footer>
    </div>
  );
}

/* Routes */
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectPage />} />
      <Route
        path="*"
        element={
          <div className="max-w-4xl mx-auto py-20 px-4">
            <h2 className="text-2xl font-bold mb-4">Page not found</h2>
            <p>
              <Link to="/" className="text-blue-600 underline">
                Return home
              </Link>
            </p>
          </div>
        }
      />
    </Routes>
  );
}
