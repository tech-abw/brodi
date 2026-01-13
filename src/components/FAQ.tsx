import React from 'react';
import Image from 'next/image';
import FAQItem from './FAQItem';

const faqs = [
  {
    question: 'Pregunta 1',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis fames cursus egestas pretium in. Nunc in donec est odio id dolor mattias aenean nec.',
  },
  {
    question: 'Pregunta 2',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis fames cursus egestas pretium in. Nunc in donec est odio id dolor mattias aenean nec.',
  },
  {
    question: 'Pregunta 3',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis fames cursus egestas pretium in. Nunc in donec est odio id dolor mattias aenean nec.',
  },
  {
    question: 'Pregunta 4',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis fames cursus egestas pretium in. Nunc in donec est odio id dolor mattias aenean nec.',
  },
  {
    question: 'Pregunta 5',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis fames cursus egestas pretium in. Nunc in donec est odio id dolor mattias aenean nec.',
  },
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-medium text-gray-800 font-sora text-center mb-16">
          Preguntas frecuentes
        </h2>

        {/* Decoraciones solo en mobile */}
        <div className="absolute hidden lg:block -top-30 -left-20">
          <Image
            src="/images/liston1.png"
            alt="Recruitment process"
            width={350}
            height={300}
            className="w-full h-[650px] object-cover"
          />
        </div>

        <div className="absolute hidden lg:block -top-30 -right-20">
          <Image
            src="/images/liston2.png"
            alt="Recruitment process"
            width={350}
            height={300}
            className="w-[650px] h-[600px] object-cover"
          />
        </div>

        {/* Caja FAQ */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md relative z-10">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
