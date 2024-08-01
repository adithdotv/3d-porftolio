// Home.js
import React from 'react';
import adith from '../images/adith.jpg'

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen bg-gray-100 p-4">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">Adith V</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Full Stack Developer</h2>
        <p className="text-gray-600 mb-6">
          Welcome to my portfolio website! I am a passionate full stack developer with experience in building web applications using modern technologies.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Contact Me
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={adith}
          alt="Adith V"
          className="rounded-lg shadow-lg w-80 h-80 object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
