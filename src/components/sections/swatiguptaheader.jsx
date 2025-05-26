'use client';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { FiPhone } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { FaAngleRight } from 'react-icons/fa'; // submenu arrow
import { useState } from 'react';

const navLinks = [
  {
    label: 'Home',
    dropdown: [
      { label: 'Hair Salon', href: 'https://hair.nelson.themerex.net/' },
      { label: 'Hair Salon Calendar', href: 'https://hair.nelson.themerex.net/home-2/' },
      { label: 'Beauty Salon', href: 'https://hair.nelson.themerex.net/beauty-salon-homepage/' },
      { label: 'Barbershop Video background', href: 'https://nelson.themerex.net/', external: true },
      { label: 'Nails Artist', href: 'https://nails.nelson.themerex.net', external: true },
    ],
  },
  { label: 'Services', href: 'https://hair.nelson.themerex.net/our-services/' },
  { label: 'About us', href: 'https://hair.nelson.themerex.net/about-us/' },
  {
    label: 'Pages',
    dropdown: [
      {
        label: 'Tools',
        dropdown: [
          { label: 'Shortcodes', href: 'https://hair.nelson.themerex.net/shortcodes/' },
          { label: 'Typography', href: 'https://hair.nelson.themerex.net/typography/' },
          { label: 'Service Plus', href: 'https://hair.nelson.themerex.net/service-plus/' },
          { label: 'Privacy Policy', href: 'https://hair.nelson.themerex.net/privacy-policy/' },
          { label: 'FAQ', href: 'https://hair.nelson.themerex.net/faq/' },
        ],
      },
      { label: 'Gallery', href: 'https://hair.nelson.themerex.net/gallery/' },
      { label: 'Simple Gallery', href: 'https://hair.nelson.themerex.net/simple-gallery/' },
      {
        label: 'Our Team',
        dropdown: [
          { label: 'Team Members', href: 'https://hair.nelson.themerex.net/our-team/' },
          { label: 'Team Member 1', href: 'https://hair.nelson.themerex.net/team/angela-davis/' },
          { label: 'Team Member 2', href: 'https://hair.nelson.themerex.net/team/roger-philips-2/' },
        ],
      },
    ],
  },
  {
    label: 'News',
    dropdown: [
      { label: 'All Posts', href: 'https://hair.nelson.themerex.net/all-posts/' },
      {
        label: 'Classic',
        dropdown: [
          { label: 'Classic 2 columns', href: 'https://hair.nelson.themerex.net/classic-2-columns/' },
          { label: 'Classic 3 columns', href: 'https://hair.nelson.themerex.net/classic-3-columns/' },
        ],
      },
      {
        label: 'Portfolio',
        dropdown: [
          { label: 'Portfolio 2 columns', href: 'https://hair.nelson.themerex.net/portfolio-2-columns/' },
          { label: 'Portfolio 3 columns', href: 'https://hair.nelson.themerex.net/portfolio-3-columns/' },
          { label: 'Portfolio 4 columns', href: 'https://hair.nelson.themerex.net/portfolio-4-columns/' },
        ],
      },
      {
        label: 'Chess',
        dropdown: [
          { label: 'Chess 2 columns', href: 'https://hair.nelson.themerex.net/chess-2-columns/' },
          { label: 'Chess 4 columns', href: 'https://hair.nelson.themerex.net/chess-4-columns/' },
          { label: 'Chess 6 columns', href: 'https://hair.nelson.themerex.net/chess-6-columns/' },
        ],
      },
    ],
  },
];

function Dropdown({ items, parentKey = '', level = 0 }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <ul
      className={`sub-menu animated fast fadeIn absolute z-50 min-w-[220px] bg-[#f7f3ec] text-black border border-gray-200 rounded-md shadow-lg text-sm font-normal ${level === 0 ? 'left-0 top-full' : 'left-full top-0 ml-1'
        }`}
    >
      {items.map((item, idx) => {
        const hasSubmenu = !!item.dropdown;
        return (
          <li
            key={`${parentKey}-${item.label}-${idx}`}
            className="relative group px-0 py-0 hover:bg-[#eee] cursor-pointer whitespace-nowrap"
            onMouseEnter={() => setOpenIdx(idx)}
            onMouseLeave={() => setOpenIdx(null)}
          >
            {hasSubmenu ? (
              <>
                <a
                  href={item.href || '#'}
                  target="_blank"
                  rel="nofollow"
                  className="w-full block px-4 py-2 hover:text-[#008AB4] flex items-center justify-between"
                  tabIndex={0}
                >
                  <span>{item.label}</span>
                  <FaAngleRight className="ml-2 text-xs" />
                </a>
                {openIdx === idx && (
                  <Dropdown items={item.dropdown} parentKey={`${parentKey}-${item.label}-${idx}`} level={level + 1} />
                )}
              </>
            ) : (
              <a
                href={item.href}
                target="_blank"
                rel="nofollow"
                className="w-full block px-4 py-2 hover:text-[#008AB4]"
              >
                <span>{item.label}</span>
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function NelsonHeader() {
  const [openNavIdx, setOpenNavIdx] = useState(null);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <style>{`body, .font-gilroy { font-family: 'Montserrat', sans-serif; font-weight: 400; }`}</style>
      </Head>
      <header className="w-full bg-white font-gilroy border-b">
        <div className="max-w-[1200px] mx-auto pl-0 pr-4 py-6 min-h-[90px] flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex justify-start">
            <Link href="/">
              <Image
                src="/images/Beuaty-Logo2x.png"
                alt="Nelson Logo"
                width={130}
                height={35}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>
          {/* Center: Navigation */}
          <nav className="flex justify-center gap-8 text-[17px] font-normal pr-20">
            {navLinks.map((link, idx) => (
              <div
                key={`nav-${link.label}-${idx}`}
                className="relative group"
                onMouseEnter={() => setOpenNavIdx(idx)}
                onMouseLeave={() => setOpenNavIdx(null)}
              >
                {link.dropdown ? (
                  <>
                    <span
                      className={`px-2 cursor-pointer transition-colors ${link.label === 'Home' ? 'text-[#008AB4]' : 'text-black hover:text-[#008AB4]'}`}
                      style={{ fontSize: '17px', fontWeight: 400, fontFamily: 'Montserrat, sans-serif', whiteSpace: 'nowrap' }}
                    >
                      {link.label}
                    </span>
                    {openNavIdx === idx && (
                      <Dropdown items={link.dropdown} parentKey={`nav-${link.label}-${idx}`} level={0} />
                    )}
                  </>
                ) : (

                  <a
                    href={link.href}
                    className={`px-2 transition-colors ${link.label === 'Home' ? 'text-[#008AB4]' : 'text-black hover:text-[#008AB4]'}`}
                    style={{ fontSize: '17px', fontWeight: 400, fontFamily: 'Montserrat, sans-serif', whiteSpace: 'nowrap' }}
                  >
                    <span>{link.label}</span>
                  </a>
                )}
              </div>
            ))}
          </nav>
          {/* Right: Contact Info */}
          <div className="hidden md:flex justify-end gap-6 text-sm font-normal">
            <a href="tel:+18002182020" className="flex items-center gap-2 text-[#008AB4]">
              <FiPhone className="text-lg" />
              <span className="text-black">1.800.218.20.20</span>
            </a>
            <div className="flex items-center gap-2 text-[#008AB4]">
              <GoLocation className="text-lg" />
              <span className="text-black">128 Winston st, New York</span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
} 