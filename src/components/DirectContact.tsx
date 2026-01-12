import Image from 'next/image';

const DirectContact = () => {
  return (
    <section className="bg-[url('/images/fondo2comp.webp')] bg-cover text-white relative overflow-hidden">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
    <div >
     
      <h2 className="text-5xl font-bold font-sora leading-tight text-center">
        Habla con candidatos que sí responden
      </h2>
      <p className="mt-2 text-lg opacity-90 text-center">
        Filtra mejor desde el inicio y habla solo con candidatos disponibles. Reclutamiento operativo ágil, directo y sin fricción.
      </p>
      <div className="absolute top-90 left-100">
        <div className="inline-block bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-br-none ">
          Aquí sí me hablaron directo para trabajar
        </div>
      </div>
      <div className="mt-4 absolute top-10 left-40">
        <div className="inline-block bg-[#E9BE11] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-bl-none">
          ¿No tienes trabajos más formales?
        </div>
      </div>
      <div className="absolute top-105 left-20 pb-20">
        <div className="inline-block bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-bl-none">
          ¿No tienes trabajos más formales?
        </div>
      </div>
    </div>
    <div className="relative flex justify-center">
      <Image
        src="/images/phone-brodi.png"
        alt="Chat en teléfono"
        width={800}
        height={800}
        className="object-contain"
      />
    </div>
  </div>
</section>
  );
};

export default DirectContact;
