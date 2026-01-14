'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  const handleClose = () => setIsOpen(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
        behavior: "smooth",
    });
  };

  const handleMobileLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
      handleScrollTo(e);
      handleClose();
  }

  return (
    <header className={`bg-white  fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="#hero" onClick={handleScrollTo}>
          <Image src="/images/brodi.png" alt="Brodi Logo" width={120} height={40} />
        </Link>

        {/* Menú centrado desktop */}
        <nav className="hidden md:flex space-x-6 items-center absolute left-1/2 transform -translate-x-1/2 animate-fadeIn">
          <Link href="#steps" onClick={handleScrollTo} className="text-gray-600 hover:text-green-500 transition duration-300 ease-in-out">
            Cómo funciona
          </Link>
          <Link href="#casos" onClick={handleScrollTo} className="text-gray-600 hover:text-green-500 transition duration-300 ease-in-out">
            Casos de éxito
          </Link>
          <Link href="#faq" onClick={handleScrollTo} className="text-gray-600 hover:text-green-500 transition duration-300 ease-in-out">
            Preguntas
          </Link>
        </nav>

        {/* Botones desktop */}
        <div className="hidden md:flex space-x-4 animate-fadeIn">
          <Link href="#" className="bg-[#99DF63] text-[#00594D] px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
            Inicia sesión
          </Link>
          <Link href="#" className="bg-[#00594D] text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out">
            Regístrate
          </Link>
        </div>

        {/* Botón hamburguesa mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#00594D] z-50 md:hidden animate-slideDown">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="#hero" onClick={handleMobileLink}>
              <Image src="/images/brodi.png" alt="Brodi Logo" width={120} height={40} />
            </Link>
            <button onClick={handleClose}>
              <X size={28} className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
            <Link href="#steps" onClick={handleMobileLink} className="text-white text-2xl transition duration-500 ease-out hover:opacity-80">
              Cómo funciona
            </Link>
            <Link href="#casos" onClick={handleMobileLink} className="text-white text-2xl transition duration-500 ease-out hover:opacity-80">
              Casos de éxito
            </Link>
            <Link href="#faq" onClick={handleMobileLink} className="text-white text-2xl transition duration-500 ease-out hover:opacity-80">
              Preguntas
            </Link>

            <div className="flex flex-col items-center space-y-4 absolute bottom-20">
              <Link href="#" onClick={handleClose} className="bg-[#99DF63] text-black px-8 py-1 rounded-md text-lg transition duration-500 ease-out hover:bg-[#7ccf4a]">
                Inicia sesión
              </Link>
              <Link href="#" onClick={handleClose} className="border border-white text-white px-9 py-1 rounded-md text-lg transition duration-500 ease-out hover:bg-white hover:text-[#00594D]">
                Regístrate
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;