import Image from 'next/image';

const Partners = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-8 md:space-x-16">
          <Image src="/images/partner-ultra.png" alt="Ultra Logo" width={100} height={40} />
          <Image src="/images/partner-power-module.png" alt="Power Module Logo" width={150} height={40} />
          <Image src="/images/partner-logoipsum1.png" alt="Logoipsum" width={120} height={40} />
          <Image src="/images/partner-logoipsum2.png" alt="Logoipsum" width={120} height={40} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
