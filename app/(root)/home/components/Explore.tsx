import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Explore() {
  return (
    <section>
      {/* Explore section content */}
      <section
        className="relative bg-cover bg-center py-5 md:py-10"
        style={{ backgroundImage: 'url(/assets/images/title.jpg)', minHeight: '100vh' }}
      >
        {/* Light overlay to reduce the intensity of the background image */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content with higher z-index to appear above the overlay */}
        <div className="relative z-20 grid grid-cols-1 gap-5 md:grid-cols-2 text-white">
          <div className="flex flex-col justify-center gap-8 px-4">
            <h1 className="text-4xl font-bold">
              Bridging Past & Present for a Stronger Future
            </h1>
            <p className="text-lg md:text-xl">
              Connect with trusted alumni, seek guidance, offer mentorship, and build meaningful relationships. Join our secure community and empower your future.
            </p>
          </div>

          {/* Button positioned at the bottom of the page */}
          <div className="absolute bottom-0 left-0 p-5">
            <Button size="lg" asChild className="bg-darkNavy text-white hover:bg-blue-900">
              <Link href="#">Explore Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Explore;