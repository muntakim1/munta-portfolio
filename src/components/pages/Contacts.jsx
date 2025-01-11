import React from 'react';

const ContactCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-300 shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <div className="flex items-center mb-3">
        <svg
          className="w-6 h-6 text-blue-500 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 8c0-1.657-1.343-3-3-3S10 6.343 10 8s1.343 3 3 3 3-1.343 3-3zm-1 4h-4a4 4 0 00-4 4v1h12v-1a4 4 0 00-4-4z"
          />
        </svg>
        <span className="text-gray-600">John Doe</span>
      </div>
      <div className="flex items-center mb-3">
        <svg
          className="w-6 h-6 text-blue-500 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 12h1a2 2 0 012 2v6a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6a2 2 0 012-2h1"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 7h4M12 3v4m-4 4h8"
          />
        </svg>
        <span className="text-gray-600">+1 (555) 123-4567</span>
      </div>
      <div className="flex items-center mb-3">
        <svg
          className="w-6 h-6 text-blue-500 mr-2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 12h1a2 2 0 012 2v6a2 2 0 01-2 2h-8a2 2 0 01-2-2v-6a2 2 0 012-2h1"
          />
        </svg>
        <span className="text-gray-600">support@company.com</span>
      </div>
      <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Contact Support
      </button>
    </div>
  );
};

export default ContactCard;
