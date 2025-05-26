'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SwatiguptaFooter() {
  return (
    <footer className="relative bg-white text-center py-12">
      {/* Nelson Logo */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/images/Beuaty-Logo2x.png"
          alt="Nelson Logo"
          width={130}
          height={50}
        />
      </div>

      {/* Navigation Links */}
      <nav className="mb-4">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/about">About us</Link></li>
          <li><Link href="/features">Features</Link></li>
          <li><Link href="/news">News</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/contacts">Contacts</Link></li>
          <li><Link href="/appointment">Appointment</Link></li>
        </ul>
      </nav>

      {/* Copyright */}
      <p className="text-sm text-gray-500">ThemeREX © 2025. All Rights Reserved.</p>

      {/* Scroll to Top Button */}
      <a
        href="#"
        className="fixed bottom-5 right-5 z-50 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition"
        title="Scroll to top"
      >
        ↑
      </a>
    </footer>
  );
}
