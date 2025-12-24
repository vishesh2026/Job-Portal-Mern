// About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Wrapper */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          About Job Portal
        </h1>

        {/* Intro */}
        <p className="text-lg mb-4">
          Job Portal is a web application that connects companies
          with candidates for technology and related roles. It is built as a
          project to practice real‑world hiring workflows and job management.
        </p>

        {/* Section: What you can do */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">What you can do here</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Companies can create profiles, post job openings, and manage
              applications from a single dashboard.
            </li>
            <li>
              Candidates can explore open roles, view company details, and apply
              directly through the platform.
            </li>
            <li>
              Admins get a clear view of their posted jobs, applicants, and
              basic hiring status.
            </li>
          </ul>
        </section>

        {/* Section: Contact / links */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Contact & feedback</h2>
          <p className="mb-2">
            If you have feedback, suggestions, or would like to collaborate,
            feel free to reach out or open an issue on the project repository.
          </p>
          {/* Replace with your real links */}
          <ul className="space-y-1">
            <li>
              
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/vishesh-kumawat-b3b1a5265/"
                className="text-blue-600 underline"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li>Email: test@gmail.com</li>
          </ul>
        </section>

        {/* Small footer note */}
        <p className="text-sm text-gray-500">
          
        </p>
      </div>
    </div>
  );
};

export default About;
