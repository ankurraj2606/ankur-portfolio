import React from "react";
import { Link } from "react-router-dom";
import { useTypingEffect } from "../hooks/useTypingEffect";
import AnimatedCounter from "../components/AnimatedCounter";
import { personalInfo, stats } from "../utils/data";

const Home = () => {
  const { displayText: typedTitle } = useTypingEffect(
    personalInfo.title,
    100,
    1000
  );

  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="animate-fade-in">
            <p className="text-primary-400 text-lg mb-4">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.name}
            </h1>
          </div>

          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light">
              <span className="typing-animation">{typedTitle}</span>
            </h2>
          </div>

          <div className="animate-slide-up max-w-3xl mx-auto mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <button
              onClick={handleDownloadResume}
              className="btn-outline"
              aria-label="View Ankur Raj Resume (opens in new tab)"
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              View Resume
            </button>
            <Link to="/contact" className="btn-outline">
              Get In Touch
            </Link>
          </div>

          <div className="animate-slide-up grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedCounter end={stats.yearsExperience} suffix="+" />
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.banksAdopted} suffix="+" />
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Banks Adopted SDKs
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.projectsCompleted} suffix="+" />
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <AnimatedCounter end={stats.clientsSatisfied} suffix="+" />
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Satisfied Clients
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;
