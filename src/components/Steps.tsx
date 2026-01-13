import Image from 'next/image';

interface StepProps {
  number: string;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md text-left z-10">
    <div className="flex flex-col items-left mb-4">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#046950] text-white font-semibold text-4xl">
        {number}
      </div>
      <h3 className="mt-2 text-xl font-semibold text-gray-800 font-sora">{title}</h3>
    </div>
    <p className="text-gray-600 font-sora">{description}</p>
  </div>
);

const Steps = () => {
  return (
   <section className="py-20 w-[95%] mx-auto ">
  <div className=" container  mx-auto px-4 text-center relative">
    <div className=" hidden lg:block absolute -top-30 -right-[40px]">
 <Image src="/images/liston3.png" alt="Recruitment process" width={450} height={200} className="w-[700px] h-[700px] object-cover " />
</div>
<div className="hidden lg:block absolute -bottom-50 -left-[100px]">
 <Image src="/images/liston3.png" alt="Recruitment process" width={450} height={200} className="w-[800px] h-[450px] object-cover " />
</div>

    <h2 className="text-5xl font-semibold text-gray-800 font-sora">Pasos</h2>
    <div className="mt-16 grid md:grid-cols-3 gap-12 z-10">
      <Step
        number="1"
        title="Regístrate"
        description="Haz click en el botón de registro y sigue los pasos para llenar tus datos de tu empresa."
      />
      <Step
        number="2"
        title="Escoge tu plan"
        description="Es necesario que escogas el plan de suscripción de tu elección para poder publicar vacantes y recibir candidatos potenciales."
      />
      <Step
        number="3"
        title="Recibe candidatos"
        description="Publica tu vacante y recibe candidatos en cuestión de minutos u horas. Candidatos ya perfilados bajo tus requerimientos y que tengan interés en contactarse."
      />
    </div>
  </div>
</section>
  );
};


export default Steps;
