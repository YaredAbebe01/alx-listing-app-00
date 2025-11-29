// pages/index.tsx
import React, { useMemo, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import type { PropertyProps } from '@/interfaces';

const FILTERS = [
  'Top Villa',
  'Self Checkin',
  'Beachfront',
  'Pet Friendly',
  'Pool',
  'Mountain View',
];

const Pill: React.FC<{ label: string; active: boolean; onClick(): void }> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-full text-sm border ${active ? 'bg-slate-900 text-white' : 'bg-white text-slate-700'}`}
    aria-pressed={active}
  >
    {label}
  </button>
);

const PropertyCard: React.FC<{ p: PropertyProps }> = ({ p }) => {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm flex flex-col">
      <div className="relative h-48 sm:h-44 md:h-40 lg:h-44">
        {/* Using next/image would be ideal; using placeholder <img> if remote url */}
        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
        {p.discount ? (
          <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs px-2 py-1 rounded">{p.discount}% OFF</span>
        ) : null}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{p.name}</h3>
          <p className="text-sm text-slate-500 mt-1">{p.address.city}, {p.address.country}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-semibold">${p.price}</span>
            <span className="text-xs text-slate-500">/ night</span>
            <span className="ml-auto text-sm text-yellow-500">⭐ {p.rating}</span>
          </div>
          <p className="text-sm text-slate-500 mt-2">
            {p.category.slice(0, 3).join(' • ')}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-slate-600">
            <div>{p.offers.bed} beds • {p.offers.shower} baths</div>
            <div>{p.offers.occupants} guests</div>
          </div>
          <button className="px-3 py-2 bg-slate-900 text-white rounded">Book</button>
        </div>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filters = FILTERS;
  const properties = useMemo(() => {
    if (!activeFilter) return PROPERTYLISTINGSAMPLE;
    const f = activeFilter.toLowerCase();
    return PROPERTYLISTINGSAMPLE.filter(p =>
      p.category.some(c => c.toLowerCase().includes(f)) ||
      p.name.toLowerCase().includes(f)
    );
  }, [activeFilter]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}
      <section className="relative rounded-lg overflow-hidden bg-slate-800 text-white mb-8">
        <div className="absolute inset-0">
          {/* background image - replace with your imported asset if available */}
          <img src="https://images.unsplash.com/photo-1505691723518-36a8b4d8b4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=60"
               alt="hero" className="w-full h-full object-cover brightness-75" />
        </div>
        <div className="relative z-10 px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-bold max-w-2xl">Find your favorite place here!</h1>
          <p className="mt-4 text-lg max-w-2xl">The best prices for over 2 million properties worldwide.</p>
          <div className="mt-6 flex gap-3">
            <button className="px-5 py-3 bg-slate-900 text-white rounded">Explore</button>
            <button className="px-5 py-3 border rounded bg-white/10">Learn more</button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="mb-6">
        <div className="flex flex-wrap gap-3">
          {filters.map((f) => (
            <Pill
              key={f}
              label={f}
              active={activeFilter === f}
              onClick={() => setActiveFilter(prev => (prev === f ? null : f))}
            />
          ))}
        </div>
      </section>

      {/* Listing grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Listings</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {properties.map((p) => (
            <PropertyCard key={p.name + p.address.city} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
