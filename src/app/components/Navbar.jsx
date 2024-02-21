import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-300 py-4  ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/">Tech Blog</Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/blogpost">Blogs</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/services">Services</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Navigation Link Component
const NavLink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default Navbar;
