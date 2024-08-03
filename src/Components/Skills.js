import React from 'react'
import { skills } from '../data/constants'

const Skills = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
          {skills.map((category, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
              <div className="flex flex-wrap">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex flex-col items-center m-2">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-16 h-16 mb-2 object-contain"
                    />
                    <p className="text-lg">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
}

export default Skills
