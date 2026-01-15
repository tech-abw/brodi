'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Hero = () => {
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
      id="hero"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Decoraciones desktop */}
      <div
        className={`absolute hidden lg:block -top-5 -left-0 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Image
          src="/images/liston1.png"
          alt="Recruitment process"
          width={350}
          height={300}
          className="w-full h-[450px] object-cover"
        />
      </div>
      <div
        className={`absolute hidden lg:block -top-5 -right-50 transition-all duration-1000 ease-out delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Image
          src="/images/liston2.png"
          alt="Recruitment process"
          width={350}
          height={300}
          className="w-[950px] h-[850px] object-cover"
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-medium leading-tight text-gray-800 font-sora">
            Contrata talento operativo
            <br />
            <span className="bg-gradient-to-r from-[#189A55] to-[#99DF63] bg-clip-text text-transparent font-medium font-sora">
              en tiempo récord
            </span>
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto transition-all duration-1000 ease-out delay-200">
            Encuentra la solución de operarios en un solo canal. Recibe postulaciones al instante,
            filtra automáticamente y acelera tus contrataciones.
          </p>

          <button
            className={`bg-[#00594D] text-white px-6 py-3 rounded-md mt-8 transition-all duration-1000 ease-out delay-400 hover:scale-105 hover:bg-green-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Publica tu vacante
          </button>
        </div>

        {/* Imagen principal */}
        <div
          className={`mt-12 flex justify-center items-center transition-all duration-1000 ease-out delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="hidden lg:block">
            <div>
            <Image
              src="/images/brodi-header.png"
              alt="Recruitment process"
              width={400}
              height={400}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            </div>
            {/* <div className="absolute top-0 left-1/4 pr-[72px] ">
              <Image
              src="/images/img-text-brodi.png"
              alt="Recruitment process"
              width={300}
              height={150}
              className="  "
            />
            </div>
             <div className="absolute bottom-0 left-[4%] pr-[4px] ">
              <Image
              src="/images/logo-brodi.png"
              alt="Recruitment process"
              width={70}
              height={70}
              className="  "
            />
            </div> */}

          </div>
          <div className="block lg:hidden">
            <Image
              src="/images/banner-brodi-mobile.png"
              alt="Recruitment process"
              width={750}
              height={700}
              className="w-full h-[200px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;