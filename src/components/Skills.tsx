'use client';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJs,
  FaFigma,
} from 'react-icons/fa';
import {
  SiDotnet,
  SiMysql,
  SiFlask,
  SiStreamlit,
  SiGooglecloud,
  SiSqlite,
  SiWebflow,
  SiDjango,
  SiPostgresql,
} from 'react-icons/si';

const allSkills = [
  { name: 'JavaScript', icon: <FaJs size={40} className="text-yellow-400" /> },
  { name: 'HTML', icon: <FaHtml5 size={40} className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt size={40} className="text-blue-400" /> },
  { name: 'Python', icon: <FaPython size={40} className="text-yellow-500" /> },
  { name: 'React.js', icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: '.NET Core', icon: <SiDotnet size={40} className="text-purple-400" /> },
  { name: 'Django', icon: <SiDjango size={40} className="text-green-600" /> },
  { name: 'Entity Framework', icon: <SiDotnet size={40} className="text-green-300" /> },
  { name: 'MySQL', icon: <SiMysql size={40} className="text-yellow-300" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={40} className="text-blue-500" /> },
  { name: 'SQLite', icon: <SiSqlite size={40} className="text-white" /> },
  { name: 'Flask', icon: <SiFlask size={40} className="text-white" /> },
  { name: 'Streamlit', icon: <SiStreamlit size={40} className="text-pink-400" /> },
  { name: 'Google Cloud', icon: <SiGooglecloud size={40} className="text-blue-300" /> },
  { name: 'Figma', icon: <FaFigma size={40} className="text-pink-400" /> },
  { name: 'Web Design', icon: <SiWebflow size={40} className="text-indigo-400" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-950 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-4">
          🛠️ My Skills
        </h2>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Tools & technologies I use to build impactful web applications
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-purple-600 transition-all"
            >
              {skill.icon}
              <p className="mt-3 text-lg font-medium text-center text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
