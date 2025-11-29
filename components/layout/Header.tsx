// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-slate-800">ALX Listings</a>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/"><a className="text-sm hover:text-slate-600">Rooms</a></Link>
          <Link href="/"><a className="text-sm hover:text-slate-600">Mansion</a></Link>
          <Link href="/"><a className="text-sm hover:text-slate-600">Countryside</a></Link>
          <Link href="/"><a className="text-sm hover:text-slate-600">Beachfront</a></Link>
        </nav>

        <div className="flex items-center gap-3">
          <input
            className="hidden sm:block border rounded-lg px-3 py-2 text-sm w-64 focus:outline-none"
            placeholder="Search by city, state..."
            aria-label="search"
          />
          <button className="text-sm px-4 py-2 border rounded-md">Sign in</button>
          <button className="text-sm px-4 py-2 bg-slate-900 text-white rounded-md">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
