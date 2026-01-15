'use client';

import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpenDefault = false }) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left font-bold text-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-gray-600">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
