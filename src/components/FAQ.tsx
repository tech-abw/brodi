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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-semibold text-gray-800 font-sora text-center mb-16">Preguntas frecuentes</h2>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
