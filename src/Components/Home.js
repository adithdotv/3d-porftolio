// Home.js
import React from 'react';
import adith from '../images/adith.jpg'
import {Bio} from '../data/constants'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 p-4">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">{Bio.name}</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">{Bio.roles.join(' | ')}</h2>
        <p className="text-gray-600 mb-6">{Bio.description}</p>
        <div className="flex space-x-4">
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-900 transition duration-300"
          >
            GitHub
          </a>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Resume
          </a>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
          >
            LinkedIn
          </a>
          <a
            href={Bio.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-400 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
          >
            Twitter
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={adith}
          alt={Bio.name}
          className="rounded-lg shadow-lg w-80 h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
