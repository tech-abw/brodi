



const Recruitment = () => {
  return (
    <section className="bg-gradient-to-b from-[#129C59] to-[#00594D] text-white py-60 relative w-[90%] mx-auto flex justify-center items-center rounded-2xl">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-semibold font-sora">Deja atrás los procesos lentos de reclutamiento</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          En brodi conectas fácilmente con trabajadores operativos listos para responder. No busques candidatos, que ellos te encuentren a ti.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-md mt-8 font-bold hover:bg-gray-200">
          Únete ahora
        </button>
      </div>
      <div className="absolute inset-0 z-0 flex items-center justify-center ">
        <div className="relative w-full h-full max-w-4xl">
          {/* Placeholder for chat bubbles background elements */}
          <div className="absolute top-30 -left-50">
            <div className="bg-[#99DF63] z-10 text-black p-3 rounded-lg rounded-bl-none font-semibold shadow-md">
              No tuve que estar mandando mil solicitudes
            </div>
          </div>
          <div className="absolute top-10 -left-50 z-10">
          <img 
            src="/images/avatar1-brodi.jpg" 
            alt="Foto de perfil" 
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
        <div className="absolute top-15 left-60">
            <div className="bg-[#99DF63] z-10 text-black p-3 rounded-lg rounded-bl-none font-semibold shadow-md">
              ¿No tienes trabajos más formales?
            </div>
          </div>
          <div className="absolute top-25 -right-40">
            <div className="bg-[#99DF63] z-10 text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md">
              Por fin una plataforma que sí responde
            </div>
          </div>
          <div className="absolute top-10 -right-50 z-10">
          <img 
            src="/images/photo8.webp" 
            alt="Foto de perfil" 
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
         <div className="absolute top-60 -right-30 z-10">
          <img 
            src="/images/photo7.webp" 
            alt="Foto de perfil" 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
         <div className="absolute top-60 -left-10 z-10">
          <img 
            src="/images/photo3.webp" 
            alt="Foto de perfil" 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="absolute top-90 -left-50 z-10">
          <img 
            src="/images/photo2.webp" 
            alt="Foto de perfil" 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="absolute top-25 -right-40">
            <div className="bg-[#99DF63] z-10 text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md">
              Por fin una plataforma que sí responde
            </div>
          </div>
           <div className="absolute bottom-25 -left-40">
            <div className="bg-[#99DF63] z-10 text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md">
              Encontré este trabajo gracias a Brodi
            </div>
          </div>
          <div className="absolute bottom-30 -right-40">
            <div className="bg-[#99DF63] z-10 text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md">
              Aquí si me hablaron directo para trabajar
            </div>
          </div>
          <div className="absolute bottom-5 -left-10 z-10">
          <img 
            src="/images/photo4.webp" 
            alt="Foto de perfil" 
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
        <div className="absolute bottom-5 -right-10 z-10">
          <img 
            src="/images/photo5.webp" 
            alt="Foto de perfil" 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
         <div className="absolute bottom-50 -right-50 z-10">
          <img 
            src="/images/photo6.webp" 
            alt="Foto de perfil" 
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        </div>
      </div>
    </section>
  );
};

export default Recruitment;
