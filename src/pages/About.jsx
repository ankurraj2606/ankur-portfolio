import React from "react";
import SkillBar from "../components/SkillBar";
import AnimatedCounter from "../components/AnimatedCounter";
import {
  personalInfo,
  skills,
  experience,
  education,
  certifications,
  stats,
} from "../utils/data";

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = personalInfo.resumeUrl;
    link.download = "Resume-AnkurRaj.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Learn more about my journey, skills, and professional experience
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Professional Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Achievements
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    JavaScript SDKs adopted by 15+ banks globally
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    40% improvement in user engagement through React.js
                    applications
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    30% reduction in integration time through optimized
                    architecture
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    90% ADA compliance across healthcare applications
                  </li>
                </ul>
              </div>
              <button
                onClick={handleDownloadResume}
                className="btn-primary"
                aria-label="Download Ankur Raj Resume PDF"
              >
                <svg
                  className="w-5 h-5 mr-2 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-4-4m4 4l4-4m6 4v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1a3 3 0 013-3h1m0-4l5 2 5-2m-10 0V9a3 3 0 013-3h4a3 3 0 013 3v.5a5 5 0 01-1 3v1a3 3 0 01-3 3h-4a3 3 0 01-3-3v-1a5 5 0 01-1-3V9z"
                  />
                </svg>
                Download Resume
              </button>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/ankur_image.jpeg"
                    alt="Ankur Raj - Frontend Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl -z-10 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Professional <span className="text-gradient">Impact</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="card text-center">
              <AnimatedCounter end={stats.yearsExperience} suffix="+" />
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Years Experience
              </p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={stats.banksAdopted} suffix="+" />
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Banks Adopted
              </p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={stats.projectsCompleted} suffix="+" />
              <p className="text-gray-600 dark:text-gray-400 mt-2">Projects</p>
            </div>
            <div className="card text-center">
              <AnimatedCounter end={stats.clientsSatisfied} suffix="+" />
              <p className="text-gray-600 dark:text-gray-400 mt-2">Clients</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(
              skills.reduce((acc, skill) => {
                if (!acc[skill.category]) acc[skill.category] = [];
                acc[skill.category].push(skill);
                return acc;
              }, {})
            ).map(([category, categorySkills]) => (
              <div key={category} className="card">
                <h3 className="text-xl font-semibold text-primary-400 mb-4">
                  {category}
                </h3>
                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="card">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary-400 mb-1">
                      {exp.company} {exp.client && `(Client: ${exp.client})`}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                    {exp.period}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Education
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-400">
                  {education.degree}
                </h3>
                <h4 className="text-md font-medium text-gray-800 dark:text-gray-200">
                  {education.specialization}
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {education.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {education.location}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600 dark:text-gray-400">
                    {education.year}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                    {education.grade}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {education.description}
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-primary-400">
                    {cert.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {cert.issuer} • {cert.year}
                  </p>
                  {cert.description && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      {cert.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
