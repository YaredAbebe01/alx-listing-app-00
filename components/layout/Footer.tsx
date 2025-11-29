// components/layout/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-slate-600 flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-semibold text-slate-800">ALX Listings</h4>
          <p className="mt-2">Find the best properties worldwide.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <p>© {new Date().getFullYear()} ALX Listings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
