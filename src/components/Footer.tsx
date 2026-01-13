import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#00594D] text-white pt-20 pb-10 rounded-[30px] rounded-br-none rounded-bl-none">
      <div className="container mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-8 ">
          <div>
            <Image src="/images/brodi.png" alt="Brodi Logo" width={250} height={80} />
            <div className="flex justify-center md:justify-start space-x-4 mt-6 text-center">
              <Link href="#" className="hover:opacity-75"><Facebook size={24} /></Link>
              <Link href="#" className="hover:opacity-75"><Instagram size={24} /></Link>
              <Link href="#" className="hover:opacity-75"><Linkedin size={24} /></Link>
              <Link href="#" className="hover:opacity-75"><MessageCircle size={24} /></Link>
            </div>
          </div>
          <div >
            <h3 className="font-bold text-lg mb-4 lg:text-right text-center">Menú</h3>
            <ul className="space-y-2 text-center lg:text-right font-thin">
              <li><Link href="#" className="hover:underline">Cómo funciona</Link></li>
              <li><Link href="#" className="hover:underline">Nosotros</Link></li>
              <li><Link href="#" className="hover:underline">Preguntas</Link></li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:flex border-t border-white/20 mt-10 pt-6 justify-between text-sm">
  {/* Copyright a la derecha */}
  <p>&copy;2026. A better world ventures LLC. Todos los derechos reservados.</p>
  {/* Políticas a la izquierda */}
  <div className="flex space-x-6">
    <Link href="#" className="hover:underline">Términos y condiciones</Link>
    <Link href="#" className="hover:underline">Aviso de privacidad</Link>
  </div>

  
</div>
        <div  className="block lg:hidden mt-12">
            <Link href="#" className="hover:underline block text-center mb-2 text-sm">Términos y condiciones</Link>
            <Link href="#" className="hover:underline block text-center mb-2 text-sm">Aviso de privacidad</Link>
            <p className='text-sm text-center mb-2 mt-12'>&copy;2026. A better world ventures LLC. Todos los derechos reservados.</p>
            
          </div>
      </div>
    </footer>
  );
};

export default Footer;
