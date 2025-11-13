import React from "react";
import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

/*
 ProjectPage shows a single project's details.
 Replace placeholders with your wireframe content later.
*/
export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <p>We couldn't find that project. Go back to <Link to="/" className="text-blue-600 underline">My Work</Link>.</p>
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto py-16 px-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-4xl font-extrabold">{project.title}</h1>
          <p className="text-gray-600 italic mt-2">{project.company} • {project.year}</p>
        </div>
        <div>
          <Link to="/" className="text-gray-700 hover:underline">← Back to My Work</Link>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden mb-8">
        <img src={project.image} alt={project.title} className="w-full object-cover rounded-lg" />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Goal / Problem statement</h2>
        <p className="text-gray-700">{project.goal}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Research</h2>
        <p className="text-gray-700">{project.research}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Brainstorming / Ideation</h2>
        <p className="text-gray-700">{project.ideation}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Solution</h2>
        <p className="text-gray-700">{project.solution}</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3">Testing</h2>
        <p className="text-gray-700">{project.testing}</p>
      </section>
    </main>
  );
}