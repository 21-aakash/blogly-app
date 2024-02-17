import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" mx-auto bg-purple-700 p-4 flex justify-between items-center">
      <div className=" mx-8 text-white font-bold text-lg">
        <Link href="/">
         CodeKarleBhai
        </Link>
      </div>
      <div className="text-white ">
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
