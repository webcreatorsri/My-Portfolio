'use client';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link?: string;
};

const certifications: Certification[] = [
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'EDUREKA',
    date: 'oct 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_edureka-certifiedskills-webdevelopment-activity-7251628679892471808-_Xsg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
  },
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'TOPPER WORLD',
    date: 'Sep 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_webdevelopment-internship-topperworld-activity-7251097122719068160-BhlC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
  },
  {
    title: 'Full Stack Web Development Internship',
    issuer: 'PROMPT INFOTECH',
    date: 'Aug 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_just-wrapped-up-an-intensive-5-day-internship-activity-7237488409454288896-vJJH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
  },
  {
    title: 'Gen-AI Course',
    issuer: 'NXT-WAVE',
    date: 'Mar 2025',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_generativeai-aiworkshop-nxtwave-activity-7314190941228027904-IzKB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
  },
  {
    title: 'Java & Python 100 Days Mastery',
    issuer: 'Udemy & Simplilearn',
    date: 'Mar 2025 by udemy only shown',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_python-100daysofcode-coding-activity-7309490405429903360-MCZl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M ',
  },
  {
    title: 'Web Development for Beginners',
    issuer: 'Simplilearn',
    date: 'Oct 2024',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_webdevelopment-simplilearn-learningjourney-activity-7251097913798311938-fmFa?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
  },
  {
    title: 'AI Bootcamp',
    issuer: 'NXT-WAVE & Great Learning',
    date: 'Nov 2024 by Great Learning only shown',
    link: 'https://www.linkedin.com/posts/jayasri-panchamurthi-b99a312b6_course-completion-certificate-in-artificial-activity-7251241758838128640-8fE6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEv4mGUBV_Ry6Zo2Zi03sHtIC5RUGNJiO-M',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="bg-gray-950 text-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">
        🏅 Certifications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl border border-purple-700 bg-gray-900 p-5 shadow-lg hover:shadow-purple-700 transition"
            >
              <h3 className="text-lg font-semibold text-purple-300">{cert.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                <strong>{cert.issuer}</strong> — {cert.date}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-300 mt-3 inline-flex items-center gap-1"
                >
                  View Certificate <FaExternalLinkAlt className="text-xs" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
