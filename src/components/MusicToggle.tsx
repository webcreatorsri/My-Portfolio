'use client';
import { useRef, useState, useEffect } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setPlaying(true);
    };

    document.addEventListener('mousemove', handleStart, { once: true });
    return () => document.removeEventListener('mousemove', handleStart);
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.play().catch(() => {});
    else audioRef.current.pause();
  }, [playing]);

  return (
    <>
      <audio ref={audioRef} src="/lofi.mp3" loop preload="auto" />
      <button
        onClick={() => setPlaying(!playing)}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-purple-700 text-white hover:bg-purple-800 shadow-lg"
      >
        {playing ? <FaPause /> : <FaMusic />}
      </button>
    </>
  );
}
