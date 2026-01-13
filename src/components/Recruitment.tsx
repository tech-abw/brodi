const Recruitment = () => {
  return (
    <section className="hidden lg:block bg-gradient-to-b from-[#129C59] to-[#00594D] text-white py-20 sm:py-60 relative w-[90%] mx-auto flex justify-center items-center rounded-2xl">
      {/* Texto principal */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-2xl sm:text-4xl font-medium font-sora">
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

      {/* Chat bubbles + avatares */}
      <div className="relative w-full h-full max-w-4xl">
        {/* Bubble 1 */}
        <div className="absolute -top-80 left-10 p-4">
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-bl-none font-semibold shadow-md max-w-xs text-sm">
            No tuve que estar mandando mil solicitudes
          </div>
        </div>
        {/* Avatar 1 */}
        <div className="absolute -top-100 left-10 z-10">
          <img
            src="/images/avatar1-brodi.jpg"
            alt="Foto de perfil"
            className="w-14 h-14 rounded-full object-cover"
          />
        </div>

        {/* Bubble 2 */}
        <div className="absolute -top-90 left-100 z-10">
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-bl-none font-semibold shadow-md max-w-xs text-sm">
            ¿No tienes trabajos más formales?
          </div>
        </div>

        {/* Bubble 3 */}
        <div className="absolute -top-85 -right-90 z-10">
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md max-w-xs text-sm">
            Por fin una plataforma que sí responde
          </div>
        </div>

        {/* Avatar 2 */}
        <div className="absolute -top-100 -right-110 z-10">
          <img
            src="/images/photo8.webp"
            alt="Foto de perfil"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>

        {/* Avatar 3 */}
        <div className="absolute -top-40 -right-70 z-10">
          <img
            src="/images/photo7.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Avatar 4 */}
        <div className="absolute -top-40 left-50 z-10">
          <img
            src="/images/photo3.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Avatar 5 */}
        <div className="absolute -bottom-10 left-50 z-10">
          <img
            src="/images/photo2.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Bubble 4 */}
        <div className="absolute -bottom-30 left-40 z-10">
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md max-w-xs text-sm">
            Encontré este trabajo gracias a Brodi
          </div>
        </div>

        {/* Bubble 5 */}
        <div className="absolute -bottom-20 -right-110 z-10">
          <div className="bg-[#99DF63] text-black p-3 rounded-lg rounded-br-none font-semibold shadow-md max-w-xs text-sm">
            Aquí sí me hablaron directo para trabajar
          </div>
        </div>

        {/* Avatar 6 */}
        <div className="absolute -bottom-55 left-55 z-10">
          <img
            src="/images/photo4.webp"
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>

        {/* Avatar 7 */}
        <div className="absolute -bottom-50 -right-80 z-10">
          <img
            src="/images/photo5.webp"
            alt="Foto de perfil"
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        {/* Avatar 8 */}
        <div className="absolute bottom-0 -right-100 z-10">
          <img
            src="/images/photo6.webp"
            alt="Foto de perfil"
            className="w-8 h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </section>
    
    
    
  );
};

export default Recruitment;