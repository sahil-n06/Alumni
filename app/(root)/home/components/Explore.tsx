import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function Explore() {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-5 md:py-10"
        style={{ backgroundImage: 'url(/assets/images/title.jpg)', height: '100vh' }}
      >
        {/* Light overlay to reduce the intensity of the background image */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        {/* Content with higher z-index to appear above the overlay */}
        <div className="relative z-20 wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold text-black font-poppins">Bridging Past & Present for a Stronger Future</h1>
            <p className="p-regular-20 md:p-regular-24 text-grey-500">Connect with trusted alumni, seek guidance, offer mentorship, and build meaningful relationships. Join our secure community and empower your future.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit ">
              <Link href="#">
                Explore Now
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Explore;
