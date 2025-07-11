'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 shadow-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-purple-400">Jayasri</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="hover:text-purple-400 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-950 text-white pb-6 space-y-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="hover:text-purple-400 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
