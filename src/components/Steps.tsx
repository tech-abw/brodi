"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps & { visible: boolean; delay: string }> = ({
  number,
  title,
  description,
  visible,
  delay,
}) => (
  <div
    className={`bg-white p-8 rounded-2xl shadow-md text-left z-10 transform transition-all duration-700 ease-out ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } hover:scale-105 hover:shadow-xl`}
  >
    <div className="flex flex-col items-left mb-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#046950] text-white font-semibold text-4xl transition-transform duration-500 hover:rotate-6">
        {number}
      </div>
      <h3 className="mt-2 text-xl font-semibold text-gray-800 font-sora">{title}</h3>
    </div>
    <p className="text-gray-600 font-sora">{description}</p>
  </div>
);

const Steps = () => {
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
    <section id="steps" className="py-10 w-[95%] mx-auto" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center relative">
        {/* Decoraciones */}
        <div className="hidden lg:block absolute -top-30 -right-[40px]">
          <Image
            src="/images/liston3.png"
            alt="Recruitment process"
            width={450}
            height={200}
            className="w-[700px] h-[700px] object-cover"
          />
        </div>
        <div className="hidden lg:block absolute -bottom-50 -left-[100px]">
          <Image
            src="/images/liston3.png"
            alt="Recruitment process"
            width={450}
            height={200}
            className="w-[800px] h-[450px] object-cover"
          />
        </div>

        <h2
          className={`text-5xl font-medium text-gray-800 font-sora transform transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Pasos
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-12 z-10">
          <Step
            number="1"
            title="Regístrate"
            description="Haz click en el botón de registro y sigue los pasos para llenar los datos de tu empresa."
            visible={visible}
            delay="delay-200"
          />
          <Step
            number="2"
            title="Escoge tu plan"
            description="Selecciona el plan de suscripción que prefieras para publicar vacantes y recibir candidatos."
            visible={visible}
            delay="delay-400"
          />
          <Step
            number="3"
            title="Recibe candidatos"
            description="Publica tu vacante y recibe candidatos en minutos u horas, ya perfilados según tus requerimientos."
            visible={visible}
            delay="delay-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Steps;