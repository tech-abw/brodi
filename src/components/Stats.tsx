const Stats = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 w-[95%]">
        <div className="flex justify-around text-center">
          <div className="bg-white p-8 rounded-2xl  shadow-md w-[30%]">
            <div className="text-4xl font-semibold text-[#189A55] font-sora text-left ">100%</div>
            <div className="text-gray-600 text-left">Trabajadores activos</div>
          </div>
          <div className="bg-white p-8 rounded-2xl  shadow-md w-[30%]">
            <div className="text-4xl font-semibold text-[#189A55] font-sora text-left ">~48 horas</div>
            <div className="text-gray-600 text-left">Recibe candidatos</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-md w-[30%]">
            <div className="text-4xl font-semibold text-[#189A55] font-sora text-left ">100%</div>
            <div className="text-gray-600 text-left">Personas reales y en base a tu perfil</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
