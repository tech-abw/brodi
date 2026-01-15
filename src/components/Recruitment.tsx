"use client";
import { useEffect, useRef, useState } from "react";

const Recruitment = () => {
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
      className="hidden lg:block bg-gradient-to-b from-[#129C59] to-[#00594D] text-white relative w-[90%] mx-auto py-10 px-10 flex justify-center items-center rounded-2xl"
    >
      {/* Línea 1 */}
      <div className="flex flex-row justify-start items-center">
        <div
          className={`z-10 transition-all duration-700 ease-out delay-350 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/avatar1-brodi.jpg"
            alt="Foto de perfil"
            className="w-14 h-14 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </div>

        {/* Bubble 2 */}
        <div
          className={`px-30 z-10 transition-all duration-700 ease-out delay-500 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-bl-none font-semibold shadow-md max-w-xs text-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-green-400">
            ¿No tienes trabajos más formales?
          </div>
        </div>
      </div>

      {/* Línea 2 */}
      <div className="flex flex-row justify-between items-center w-full">
        <div
          className={`py-10 p-4 transition-all duration-700 ease-out delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-bl-none font-semibold shadow-md text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            No tuve que estar mandando mil solicitudes
          </div>
        </div>

        {/* Bubble 3 */}
        <div
          className={`px-75 pb-20 transition-all duration-700 ease-out delay-650 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Por fin una plataforma que sí responde
          </div>
        </div>

        {/* Avatar 8 */}
        <div
          className={`z-10 transition-all duration-700 ease-out delay-1600 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo8.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-125 hover:ring-2 hover:ring-green-500"
          />
        </div>
      </div>

      {/* Línea 3 */}
      <div className="flex flex-row justify-end items-center w-[90%]">
        <div
          className={`z-10 transition-all duration-700 ease-out delay-1600 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo7.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-125 hover:ring-2 hover:ring-green-500"
          />
        </div>
      </div>

      {/* Texto principal */}
      <div
        className={`container mx-auto px-4 text-center relative z-10 transform transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div>
          <div
            className={`z-10 transition-all duration-700 ease-out delay-1000 ${
              visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
          >
            <img
              src="/images/photo3.webp"
              alt="Foto de perfil"
              className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-green-500"
            />
          </div>

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
      </div>

      {/* Línea 4: chat bubbles + avatares */}
      <div className="pt-20 w-full h-full flex flex-row justify-between items-center">
        <div
          className={`pb-20 z-10 transition-all duration-700 ease-out delay-1100 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo2.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-3"
          />
        </div>

        <div className="flex flex-col items-center gap-10">
          <div
            className={`z-10 transition-all duration-700 ease-out delay-1200 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md text-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-green-400">
              Encontré este trabajo gracias a Brodi
            </div>
          </div>

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

        <div className="flex flex-col justify-start gap-10">
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
      </div>
    </section>
  );
};

export default Recruitment;