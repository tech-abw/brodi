import Image from 'next/image';

const DirectContact = () => {
  return (
    <section className="bg-[url('/images/fondo2comp.webp')] bg-cover text-white relative overflow-hidden">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
    <div >
     
      <h2 className="pt-60 lg:pt-0 text-3xl lg:text-5xl font-bold font-sora leading-tight text-center">
        Habla con candidatos que sí responden
      </h2>
      <p className="mt-2 text-lg opacity-90 text-center">
        Filtra mejor desde el inicio y habla solo con candidatos disponibles. Reclutamiento operativo ágil, directo y sin fricción.
      </p>
      <div className="hidden lg:block absolute top-0 left-20 lg:top-100 lg:left-100">
        <div className="inline-block bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-br-none ">
          Aquí sí me hablaron directo para trabajar
        </div>
      </div>
      <div className="block lg:hidden absolute top-120 left-10 lg:top-90 lg:left-100">
        <div className="inline-block bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-br-none ">
          ¿No tienes trabajos más formales?
        </div>
      </div>
      <div className="hidden lg:block mt-4 absolute top-10 left-40">
        <div className="inline-block bg-[#E9BE11] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-bl-none">
          ¿No tienes trabajos más formales?
        </div>
      </div>
      <div className="block lg:hidden mt-4 absolute top-10 left-10">
        <div className="inline-block bg-[#E9BE11] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-bl-none">
          ¿No tienes trabajos más formales?
        </div>
      </div>
      <div className="hidden lg:block top-20 left-0 lg:top-105 absolute lg:left-20 pb-20">
        <div className="inline-block bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-bl-none">
          ¿No tienes trabajos más formales?
        </div>
      </div>
      <div className="block lg:hidden top-30 left-20 absolute">
        <div className="inline-block bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-bl-none">
          ¿No tienes trabajos más formales?
        </div>
      </div>
    </div>
    <div className="relative flex justify-center mt-20">
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
