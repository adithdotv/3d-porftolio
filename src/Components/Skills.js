import React from 'react'
import { skills } from '../data/constants'
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <section className="py-12 bg-gray-100" id="skills">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
                <div className="flex flex-wrap justify-center gap-6">
                {skills.map((category, index) => (
                    <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition duration-300 ease-in-out"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.1 }}
                    >
                    <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                    {category.skills.map((skill, idx) => (
                        <div key={idx} className="flex flex-col items-center m-2">
                            <motion.img
                                src={skill.image}
                                alt={skill.name}
                                className="w-16 h-16 mb-4"
                                initial={{ scale: 1 }}
                                animate={{ rotate: 0 }}
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                            />
                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                        </div>
                    ))}
                    </motion.div>
                ))}
                </div>
            </div>
        </section>
      );
}

export default Skills
