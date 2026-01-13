const RecruitmentMobile = () => {
  return (
    <section className="block lg:hidden bg-gradient-to-b from-[#129C59] to-[#00594D] text-white  pt-20 relative w-[90%] mx-auto flex justify-center items-center rounded-2xl">
      

      {/* Chat bubbles + avatares */}
      <div className="relative w-full h-full max-w-4xl">
      {/* Avatar 1 */}
        <div className="absolute -top-15 left-10 z-10">
          <img
            src="/images/avatar1-brodi.jpg"
            alt="Foto de perfil"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
         {/* Avatar 7 */}
        <div className="absolute -top-5 left-40 z-10">
          <img
            src="/images/photo5.webp"
            alt="Foto de perfil"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>
         {/* Avatar 5 */}
        <div className="absolute -top-5 left-70 z-10">
          <img
            src="/images/photo2.webp"
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      <div className="p-2 pt-20">
          <div className="bg-[#99DF63] text-black p-3 rounded-2xl rounded-bl-none font-semibold shadow-md max-w-[250px] text-xs">
      ¿No tienes trabajos más formales?
          </div>
     </div>
        {/* Texto principal */}
      <div className="container mx-auto px-4  pt-5 text-center relative z-10">
        <h2 className="text-2xl sm:text-4xl font-semibold font-sora">
          Deja atrás los procesos lentos de reclutamiento
        </h2>
        <p className="mt-4 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base">
          En brodi conectas fácilmente con trabajadores operativos listos para
          responder. No busques candidatos, que ellos te encuentren a ti.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-md mt-8 font-bold hover:bg-gray-200">
          Únete ahora
        </button>
      </div>
        {/* Avatar 3 */}
        <div className="absolute top-75 left-10 z-10">
          <img
            src="/images/photo7.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
         {/* Avatar 8 */}
        <div className="absolute top-75 left-70 z-10">
          <img
            src="/images/photo6.webp"
            alt="Foto de perfil"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
         {/* Avatar 4 */}
        <div className="absolute top-100 left-70 z-10">
          <img
            src="/images/photo3.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="p-2 pt-20">
          <div className="bg-[#99DF63] text-black p-3 rounded-2xl rounded-bl-none font-semibold shadow-md max-w-[250px] text-xs">
      ¿No tienes trabajos más formales?
          </div>
     </div>

        {/* Avatar 2 */}
        <div className="absolute top-100 left-40 z-10">
          <img
            src="/images/photo8.webp"
            alt="Foto de perfil"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        {/* Avatar 6 */}
        <div className="absolute top-145   left-5 z-10">
          <img
            src="/images/photo4.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="p-20 ">
          <div className="bg-[#99DF63] text-black p-3 rounded-2xl rounded-bl-none font-semibold shadow-md max-w-[250px] text-xs">
      ¿No tienes trabajos más formales?
          </div>
     </div>
       
      </div>
    </section>
    
    
    
  );
};

export default RecruitmentMobile;