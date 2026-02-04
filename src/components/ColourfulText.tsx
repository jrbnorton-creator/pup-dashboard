import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const colors = [
  'rgb(45, 212, 191)',
  'rgb(94, 234, 212)',
  'rgb(20, 184, 166)',
  'rgb(255, 110, 0)',
  'rgb(255, 138, 51)',
  'rgb(34, 197, 94)',
  'rgb(251, 191, 36)',
  'rgb(45, 212, 191)',
  'rgb(94, 234, 212)',
  'rgb(255, 110, 0)',
];

export default function ColourfulText({ text }: { text: string }) {
  const [currentColors, setCurrentColors] = useState(colors);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${count}-${index}`}
          initial={{ y: 0 }}
          animate={{
            color: currentColors[index % currentColors.length],
            y: [0, -3, 0],
            scale: [1, 1.01, 1],
            filter: ['blur(0px)', 'blur(5px)', 'blur(0px)'],
            opacity: [1, 0.8, 1],
          }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="inline-block whitespace-pre font-sans tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </>
  );
}
