import React from 'react';

const ExperienceCard = ({ company, title, duration,employnent_type, location, responsibilities }) => {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-0"  style={{height: '100%'}}>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <h3 className="text-xl mb-2">{company}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{duration}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{employnent_type}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{location}</p>
        <ul className="p-4 list-disc list-inside">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-justify text-gray-700 dark:text-gray-300">{responsibility}</li>
          ))}
        </ul>
      </div>
    );
  };

export default ExperienceCard;