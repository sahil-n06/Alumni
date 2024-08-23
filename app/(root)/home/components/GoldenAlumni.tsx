import React from 'react';

function GoldenAlumni() {
  return (
    <section className="bg-gray-100 py-10 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-darkNavy text-3xl md:text-4xl font-bold mb-6 text-center text-navy-blue animate-fadeIn">
        Our Golden Alumni
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: 'N. R. Narayana Murthy', achievement: 'Co-founder of Infosys', image: '/assets/images/alumni1.jpg' },
          { name: 'Dr. K. Radhakrishnan', achievement: 'Former Chairman of ISRO', image: '/assets/images/alumni2.jpg' },
          { name: 'Dr. Kalpana Chawla', achievement: 'An astronaut and the first woman of Indian origin in space', image: '/assets/images/alumni3.jpeg' },
        ].map((alumni, index) => (
          <div
            key={index}
            className="text-darkNavy bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fadeIn delay-200"
          >
            <img src={alumni.image} alt={alumni.name} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold mb-1">{alumni.name}</h3>
              <p className="text-gray-700">{alumni.achievement}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-darkNavy mt-5">
        Disclaimer: The alumni featured on this page are not directly affiliated with us. The information and images are used solely as a resource for the website, sourced from the internet.
        </p>
    </div>
  </section>

  );
}

export default GoldenAlumni;
