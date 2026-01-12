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
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="#" className="text-gray-600 hover:text-green-500">Cómo funciona</Link>
          <Link href="#" className="text-gray-600 hover:text-green-500">Nosotros</Link>
          <Link href="#" className="text-gray-600 hover:text-green-500">Preguntas</Link>
          <Link href="#" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Únete ahora</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-md z-20">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="#" className="text-gray-600 hover:text-green-500">Cómo funciona</Link>
            <Link href="#" className="text-gray-600 hover:text-green-500">Nosotros</Link>
            <Link href="#" className="text-gray-600 hover:text-green-500">Preguntas</Link>
            <Link href="#" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Únete ahora</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
