'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-gray-950 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
          👩‍💻About Me
        </h2>

        <div className="max-w-3xl mx-auto space-y-8 text-center text-lg leading-relaxed text-gray-300">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I’m <span className="font-semibold text-white"></span>a
            curious and creative Full-Stack Developer currently pursuing a degree in IT. I
            love transforming ideas into powerful, real-world solutions by blending
            frontend creativity with backend logic.
          </motion.p>

          {/* 🚀 Project Card with Hover Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-900 border border-purple-600 rounded-2xl px-6 py-6 text-left shadow-lg hover:shadow-purple-700 transition"
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              🚀 Projects I’ve Built
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-300 text-base">
              <li>
                <span className="text-white font-semibold">SmartMail AI</span> – AI-powered email assistant using Google Cloud & Python.
              </li>
              <li>
                <span className="text-white font-semibold">Hospital Booking System</span> – Full-stack app using React, .NET Core & MySQL.
              </li>
              <li>
                <span className="text-white font-semibold">AI Tool Recommender Chatbot</span> – Streamlit & NLP-based tool suggestion system.
              </li>
              <li>
                <span className="text-white font-semibold">Python Mini Projects Hub (50+)</span> – Utility tools developed using Flask & MYSQL.
              </li>
            </ul>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            🔍 I explore new tech daily, catch ideas quickly, and turn them into impactful creations.<br />
            <span className="text-purple-300 font-semibold">
              Let’s build the future — one innovation at a time!
            </span>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
