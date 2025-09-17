import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SkillBar = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [ref, isVisible] = useScrollAnimation();

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm text-primary-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
