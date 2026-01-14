"use client";
import { useEffect, useRef, useState } from "react";

const Recruitment = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Observer con margen para disparar antes de que el bloque esté 100% visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Si quieres que solo dispare una vez:
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -15% 0px", // dispara cuando el 85% inferior entra
      }
    );

    observer.observe(node);

    // Fallback: si por cualquier razón el observer no dispara, chequea en scroll
    const onScrollFallback = () => {
      const rect = node.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
      if (inView) {
        setVisible(true);
        window.removeEventListener("scroll", onScrollFallback);
      }
    };

    window.addEventListener("scroll", onScrollFallback, { passive: true });
    // Ejecuta una vez por si ya está en viewport al montar
    onScrollFallback();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScrollFallback);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block bg-gradient-to-b from-[#129C59] to-[#00594D] text-white py-20 sm:py-60 relative w-[90%] mx-auto flex justify-center items-center rounded-2xl"
    >
      {/* Texto principal */}
      <div
        className={`container mx-auto px-4 text-center relative z-10 transform transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl sm:text-4xl font-medium font-sora">
          Deja atrás los procesos lentos de reclutamiento
        </h2>
        <p className="mt-4 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base">
          En brodi conectas fácilmente con trabajadores operativos listos para responder. No busques candidatos, que ellos te encuentren a ti.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-md mt-8 font-bold hover:bg-gray-200 transition duration-300 ease-in-out">
          Únete ahora
        </button>
      </div>

      {/* Chat bubbles + avatares */}
      <div className="relative w-full h-full max-w-4xl">
        {/* Bubble 1 */}
        <div
          className={`absolute -top-80 left-10 p-4 transition-all duration-700 ease-out delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-bl-none font-semibold shadow-md max-w-xs text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
            No tuve que estar mandando mil solicitudes
          </div>
        </div>

        {/* Avatar 1 */}
        <div
          className={`absolute -top-100 left-10 z-10 transition-all duration-700 ease-out delay-350 ${
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
          className={`absolute -top-90 left-100 z-10 transition-all duration-700 ease-out delay-500 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-bl-none font-semibold shadow-md max-w-xs text-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-green-400">
            ¿No tienes trabajos más formales?
          </div>
        </div>

        {/* Bubble 3 */}
        <div
          className={`absolute -top-85 -right-90 z-10 transition-all duration-700 ease-out delay-650 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md max-w-xs text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Por fin una plataforma que sí responde
          </div>
        </div>

        {/* Avatar 2 */}
        <div
          className={`absolute -top-100 -right-110 z-10 transition-all duration-700 ease-out delay-800 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo8.webp"
            alt="Foto de perfil"
            className="w-10 h-10 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-green-500"
          />
        </div>

        {/* Avatar 3 */}
        <div
          className={`absolute -top-40 -right-70 z-10 transition-all duration-700 ease-out delay-950 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo7.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </div>

        {/* Avatar 4 */}
        <div
          className={`absolute -top-40 left-50 z-10 transition-all duration-700 ease-out delay-1000 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo3.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:ring-2 hover:ring-green-500"
          />
        </div>

        {/* Avatar 5 */}
        <div
          className={`absolute -bottom-10 left-50 z-10 transition-all duration-700 ease-out delay-1100 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo2.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-3"
          />
        </div>

        {/* Bubble 4 */}
        <div
          className={`absolute -bottom-30 left-40 z-10 transition-all duration-700 ease-out delay-1200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md max-w-xs text-sm transition duration-300 ease-in-out hover:scale-105 hover:bg-green-400">
            Encontré este trabajo gracias a Brodi
          </div>
        </div>

        {/* Bubble 5 */}
        <div
          className={`absolute -bottom-20 -right-110 z-10 transition-all duration-700 ease-out delay-1300 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md max-w-xs text-sm transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            Aquí sí me hablaron directo para trabajar
          </div>
        </div>

        {/* Avatar 6 */}
        <div
          className={`absolute -bottom-55 left-55 z-10 transition-all duration-700 ease-out delay-1400 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo4.webp"
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full object-cover transition duration-300 ease-in-out hover:scale-125 hover:ring-2 hover:ring-green-500"
          />
        </div>

        {/* Avatar 7 */}
        <div
          className={`absolute -bottom-50 -right-80 z-10 transition-all duration-700 ease-out delay-1500 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo5.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover transition duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
        </div>

        {/* Avatar 8 */}
        <div
          className={`absolute bottom-0 -right-100 z-10 transition-all duration-700 ease-out delay-1600 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
        >
          <img
            src="/images/photo6.webp"
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full object-cover transition duration-300 ease-in-out hover:scale-125 hover:ring-2 hover:ring-green-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Recruitment;