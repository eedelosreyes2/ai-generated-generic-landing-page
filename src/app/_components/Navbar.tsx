"use client";

import { MouseEvent } from "react";

export function Navbar() {
  return (
    <nav className="w-full p-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white flex justify-between items-center shadow-lg sticky top-0 z-50">
      <img src="/favicon.ico" alt="Logo" className="w-8 h-8 md:w-14 md:h-14 cursor-pointer rounded-full p-1" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      <button className="md:hidden px-4" onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}>
        ☰
      </button>
      <ul id="mobile-menu" className="hidden md:flex md:space-x-6 px-4 w-full md:w-auto bg-gray-900 md:bg-transparent md:flex-row md:static absolute left-0 top-full text-center md:text-left space-y-2 md:space-y-0">
        <li><a href="#features" className="block p-4 hover:text-gray-300" onClick={(e) => smoothScroll(e, 'features')}>Features</a></li>
        <li><a href="#gallery" className="block p-4 hover:text-gray-300" onClick={(e) => smoothScroll(e, 'gallery')}>Gallery</a></li>
        <li><a href="#testimonials" className="block p-4 hover:text-gray-300" onClick={(e) => smoothScroll(e, 'testimonials')}>Testimonials</a></li>
        <li><a href="#pricing" className="block p-4 hover:text-gray-300" onClick={(e) => smoothScroll(e, 'pricing')}>Pricing</a></li>
        <li><a href="#faq" className="block p-4 hover:text-gray-300" onClick={(e) => smoothScroll(e, 'faq')}>FAQ</a></li>
        <li><a href="#contact" className="block p-4 hover:text-gray-300" onClick={(e) => smoothScroll(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}

function smoothScroll(event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, targetId: string) {
  event.preventDefault();
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.classList.add('hidden');
  }
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
}