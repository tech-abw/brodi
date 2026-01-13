import Image from 'next/image';


const Hero = () => {
  return (
    <section className="py-20 relative overflow-hidden">
        <div className="absolute  hidden lg:block -top-5 -left-0">
                    <Image
  src="/images/liston1.png"
  alt="Recruitment process"
  width={350}
  height={300}
  className="w-[100%] h-[450px] object-cover "
/>
 </div>
      <div className="absolute  hidden lg:block -top-5 -right-50">
                    <Image
  src="/images/liston2.png"
  alt="Recruitment process"
  width={350}
  height={300}
  className="w-[950px] h-[850px] object-cover "
/>
</div>
      <div className="absolute  block lg:hidden -top-5 -left-50">
                    <Image
  src="/images/liston1.png"
  alt="Recruitment process"
  width={350}
  height={300}
  className="w-[100%] h-[450px] object-cover "
/>
 </div>
      <div className="absolute  block lg:hidden top-30 -right-60">
                    <Image
  src="/images/liston2.png"
  alt="Recruitment process"
  width={350}
  height={300}
  className="w-[900px] h-[350px] object-cover "
/>

 </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-gray-800 font-sora">
            Contrata talento operativo
            <br />
          <span className="bg-gradient-to-r from-[#189A55] to-[#99DF63] bg-clip-text text-transparent font-semibold">
  en tiempo récord
</span>


          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Encuentra la solución de operarios en un solo canal. Recibe postulaciones al instante, filtra automáticamente y acelera tus contrataciones.
          </p>
          <button className="bg-[#00594D] text-white px-6 py-3 rounded-md mt-8 hover:bg-green-600">
            Publica tu vacante
          </button>
        </div>
        <div className="mt-12 flex justify-center items-center">
          {/*<ChatBubble className="absolute -top-0 -left-0 w-66 bg-green-500 text-white rounded-lg p-4 shadow-xl">
              <p className="text-sm font-bold">¡Bienvenido a Brodi!</p>
              <p className="text-xs mt-1">Te ayudamos a encontrar empleo operativo de forma rápida y sencilla, sin complicaciones.</p>
              <p className="text-xs text-left mt-2 opacity-75">11:14 AM</p>
            </ChatBubble>*/}
  <div className="hidden lg:block">
  <Image
    src="/images/brodi-header.png"
    alt="Recruitment process"
    width={750}
    height={700}
    className="w-[100%] h-[450px] object-cover"
  />
</div>
<div className="block lg:hidden">
  <Image
    src="/images/banner-brodi-mobile.png"
    alt="Recruitment process"
    width={750}
    height={700}
    className="w-[100%] h-[220px] object-cover"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
