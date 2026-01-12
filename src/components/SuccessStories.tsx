import SuccessCard from './SuccessCard';

const stories = [
  {
    title: 'Lorem ipsum',
    description: 'Conecta con repartidores, choferes y agentes de call center ya filtrados. Ellos aplican por WhatsApp, tu recibes solo candidatos que cumplen tus requisitos.',
    name: 'Fernando',
    role: 'Fundador',
    imageUrl: '/images/photo8.webp',
  },
  {
    title: 'Lorem ipsum',
    description: 'Conecta con repartidores, choferes y agentes de call center ya filtrados. Ellos aplican por WhatsApp, tu recibes solo candidatos que cumplen tus requisitos.',
    name: 'Paulina',
    role: 'Fundador',
    imageUrl: '/images/photo2.webp',
  },
  {
    title: 'Lorem ipsum',
    description: 'Conecta con repartidores, choferes y agentes de call center ya filtrados. Ellos aplican por WhatsApp, tu recibes solo candidatos que cumplen tus requisitos.',
    name: 'Roberto',
    role: 'Fundador',
    imageUrl: '/images/photo3.webp',
  },
  {
    title: 'Lorem ipsum',
    description: 'Conecta con repartidores, choferes y agentes de call center ya filtrados. Ellos aplican por WhatsApp, tu recibes solo candidatos que cumplen tus requisitos.',
    name: 'Héctor',
    role: 'Fundador',
    imageUrl: '/images/photo4.webp',
  },
  {
    title: 'Lorem ipsum',
    description: 'Conecta con repartidores, choferes y agentes de call center ya filtrados. Ellos aplican por WhatsApp, tu recibes solo candidatos que cumplen tus requisitos.',
    name: 'Alberto',
    role: 'Fundador',
    imageUrl: '/images/photo5.webp',
  },
  {
    title: 'Lorem ipsum',
    description: 'Conecta con repartidores, choferes y agentes de call center ya filtrados. Ellos aplican por WhatsApp, tu recibes solo candidatos que cumplen tus requisitos.',
    name: 'Jorge',
    role: 'Nombre puesto placeholder',
    imageUrl: '/images/photo6.webp',
  },
];

const SuccessStories = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center w-[95%]">
        <h2 className="text-5xl font-semibold text-gray-800 font-sora mb-16">Casos de éxito</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <SuccessCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
