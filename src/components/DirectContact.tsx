'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const DirectContact = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // opcional: si quieres que se oculte al salir
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hidden md:block bg-[url('/images/fondo2comp.webp')] bg-cover text-white  overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div
          className={`text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}

        >
        <div className="">
              <div className="inline-block bg-[#E9BE11] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-bl-none">
                ¡Hola! Busco trabajo de repartidor
              </div>
        </div>
          <h2 className="text-3xl md:text-5xl  font-bold font-sora mb-6 mt-10 ">
           Habla con candidatos que sí responden
          </h2>
          <p className="mb-8  text-center mx-auto">
            Filtra mejor desde el inicio y habla solo con candidatos disponibles. Reclutamiento operativo ágil, directo y sin fricción.
          </p>
          {/* Chat bubbles */}
          <div className="flex  flex-row gap-4 h-48 gap-10 items-center justify-center">
            
            <div className="">
              <div className="inline-block bg-[#A855F7] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-br-none">
                ¿Cuál es tu disponibilidad?
              </div>
            </div>
            <div className="pb-20">
              <div className="inline-block bg-[#3B82F6] text-white text-sm font-semibold px-4 py-2 rounded-lg rounded-bl-none">
                Tengo experiencia de 2 años
              </div>
            </div>
          </div>
        </div>

        <div
          className={`relative flex justify-center transition-all duration-700 ease-out delay-300  ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
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