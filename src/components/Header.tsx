'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src="/images/brodi.png" alt="Brodi Logo" width={120} height={40} />
        </Link>
         {/* Menú centrado */}
  <nav className="hidden md:flex space-x-6 items-center absolute left-1/2 transform -translate-x-1/2">
    <Link href="#" className="text-gray-600 hover:text-green-500">Cómo funciona</Link>
    <Link href="#" className="text-gray-600 hover:text-green-500">Nosotros</Link>
    <Link href="#" className="text-gray-600 hover:text-green-500">Preguntas</Link>
    
  </nav>
  <div className="hidden md:flex space-x-4">
  <Link href="#" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
    Únete ahora
  </Link>
  <Link href="#" className="bg-[#00594D] text-white px-4 py-2 rounded-md hover:bg-green-600">
    Regístrate
  </Link>
</div>


        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-[#00594D] z-50 md:hidden">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/">
              <Image src="/images/brodi.png" alt="Brodi Logo" width={120} height={40} />
            </Link>
            <button onClick={() => setIsOpen(false)}>
              <X size={28} className="text-white" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
            <Link href="#" className="text-white text-2xl">Cómo funciona</Link>
            <Link href="#" className="text-white text-2xl">Nosotros</Link>
            <Link href="#" className="text-white text-2xl">Preguntas</Link>
            <div className="flex flex-col items-center space-y-4 absolute bottom-20">
              <Link href="#" className="bg-[#99DF63] text-black px-8 py-1 rounded-md text-lg">Inicia sesión</Link>
              <Link href="#" className="border border-white text-white px-9 py-1 rounded-md text-lg">Regístrate</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
