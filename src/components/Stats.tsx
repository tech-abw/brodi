const Stats = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 w-[95%]">
        {/* Mobile: columna | Desktop: fila */}
        <div className="flex flex-col gap-6 md:flex-row md:justify-around text-center">
          
          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full md:w-[30%]">
            <div className="text-3xl sm:text-4xl font-semibold text-[#189A55] font-sora text-left">
              100%
            </div>
            <div className="text-gray-600 text-left text-sm sm:text-base">
              Trabajadores activos
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full md:w-[30%]">
            <div className="text-3xl sm:text-4xl font-semibold text-[#189A55] font-sora text-left">
              ~48 horas
            </div>
            <div className="text-gray-600 text-left text-sm sm:text-base">
              Recibe candidatos
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md w-full md:w-[30%]">
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