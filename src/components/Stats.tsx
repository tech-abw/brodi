"use client";
import { useEffect, useRef, useState } from "react";

const Stats = () => {
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
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12">
      <div className="container mx-auto px-4 w-[95%]">
        <div className="flex flex-col gap-6 md:flex-row md:justify-around text-center">
          
          {/* Card 1 */}
          <div
            className={`bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full md:w-[30%] transform transition-all duration-700 ease-out delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#189A55] font-sora text-left">
              100%
            </div>
            <div className="text-gray-600 text-left text-sm sm:text-base">
              Trabajadores activos
            </div>
          </div>

          {/* Card 2 */}
          <div
            className={`bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full md:w-[30%] transform transition-all duration-700 ease-out delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#189A55] font-sora text-left">
              ~48 horas
            </div>
            <div className="text-gray-600 text-left text-sm sm:text-base">
              Recibe candidatos
            </div>
          </div>

          {/* Card 3 */}
          <div
            className={`bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full md:w-[30%] transform transition-all duration-700 ease-out delay-600 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-105 hover:shadow-xl`}
          >
            <div className="text-3xl sm:text-4xl font-semibold text-[#189A55] font-sora text-left">
              100%
            </div>
            <div className="text-gray-600 text-left text-sm sm:text-base">
              Personas reales y en base a tu perfil
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;