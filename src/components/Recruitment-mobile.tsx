"use client";
import { useEffect, useRef, useState } from "react";

const RecruitmentMobile = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -15% 0px",
      }
    );

    observer.observe(node);

    const onScrollFallback = () => {
      const rect = node.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.85 &&
        rect.bottom > window.innerHeight * 0.15;

      if (inView) {
        setVisible(true);
        window.removeEventListener("scroll", onScrollFallback);
      }
    };

    window.addEventListener("scroll", onScrollFallback, { passive: true });
    onScrollFallback();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollFallback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="block lg:hidden bg-gradient-to-b from-[#129C59] to-[#00594D] text-white relative w-[90%] mx-auto py-10 px-10 flex flex-col justify-center items-center rounded-2xl"
    >
      {/* Línea 1 */}
      <div className="flex flex-row justify-between items-center w-full pb-20">
        <div
          className={`pb-30 z-10 transition-all duration-700 ease-out delay-350 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/avatar1-brodi.jpg"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </div>

        <div
          className={`z-10 transition-all duration-700 ease-out delay-350 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo5.webp"
            alt="Foto de perfil"
            className="w-14 h-14 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </div>
        <div
          className={`z-10 transition-all duration-700 ease-out delay-350 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo2.webp"
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </div>
        
      </div>

      {/* Texto principal */}
      <div
        className={`container mx-auto px-4 text-center relative z-10 transform transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
          <h2 className="text-2xl sm:text-4xl font-medium font-sora">
            Deja atrás los procesos lentos de reclutamiento
          </h2>
          <p className="mt-4 mx-auto text-sm sm:text-base">
            En brodi conectas fácilmente con trabajadores operativos listos para responder. No busques candidatos, que ellos te encuentren a ti.
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-md mt-8 font-bold hover:bg-gray-200 transition duration-300 ease-in-out">
            Únete ahora
          </button>
        </div>
      

      {/* Línea 4: chat bubbles + avatares */}
      <div className="pt-20 w-full h-full flex flex-col justify-between items-center ">
        <div className="flex flex-row justify-between gap-30 w-[100%]">
         
        <div
          className={` z-10 transition-all duration-700 ease-out delay-1100 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo7.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-3"
          />
        </div>
        <div
          className={`pb-20 z-10 transition-all duration-700 ease-out delay-1100 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo6.webp"
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-3"
          />
        </div>

        </div>
        

        <div className="flex flex-row py-10 items-center gap-10 w-[100%]">
          <div
            className={`z-10 transition-all duration-700 ease-out delay-1200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md text-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-green-400">
              Encontré este trabajo gracias a Brodi
            </div>
          </div>
          </div>
          <div className="flex flex-row justify-end items-center gap-10 w-[100%]">
          {/* Avatar 6 */}
          <div
            className={`z-10 transition-all duration-700 ease-out delay-1400 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <img
              src="/images/photo4.webp"
              alt="Foto de perfil"
              className="w-8 h-8 rounded-full object-cover transition duration-300 ease-in-out hover:scale-125 hover:ring-2 hover:ring-green-500"
            />
          </div>
        </div>

        <div className="flex flex-row py-10 items-center gap-10 w-[90%]">
          {/* Avatar 6 */}
          <div
            className={`z-10 transition-all duration-700 ease-out delay-1400 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <img
              src="/images/photo8.webp"
              alt="Foto de perfil"
              className="w-8 h-8 rounded-full object-cover transition duration-300 ease-in-out hover:scale-125 hover:ring-2 hover:ring-green-500"
            />
          </div>
        </div>

        <div className="flex flex-row pb-10 justify-start">
          

          {/* Avatar 7 */}
          <div
            className={`z-10 transition-all duration-700 ease-out delay-1500 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
                        <img
              src="/images/photo5.webp"
              alt="Foto de perfil"
              className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-6"
            />
          </div>
          </div>
          <div className="flex flex-row justify-end items-center gap-10 w-[100%]">
          {/* Bubble 5 */}
          <div
            className={`z-10 transition-all duration-700 ease-out delay-1300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              Aquí sí me hablaron directo para trabajar
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default RecruitmentMobile;