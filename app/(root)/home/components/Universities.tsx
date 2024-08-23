import React from 'react';

function Universities() {
  return (
    <>
      {/* Section 3: Prestigious Universities */}
      <section className="bg-darkNavy text-white py-10 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-slideInUp">
            Prestigious Universities Connected to Us
          </h2>
          <div className="text-darkNavy grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Indian Institute of Technology (IIT) Bombay', logo: '/assets/images/uni1.png' },
              { name: 'Indian Institute of Science (IISc) Bangalore', logo: '/assets/images/uni2.png' },
              { name: 'Jawaharlal Nehru University (JNU)', logo: '/assets/images/uni3.jpeg' },
              { name: 'University of Delhi', logo: '/assets/images/uni4.jpeg' },
              { name: 'Indian Institute of Management (IIM) Ahmedabad', logo: '/assets/images/uni5.png' },
              { name: 'Banaras Hindu University (BHU)', logo: '/assets/images/uni6.jpeg' }
            ].map((university, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 ml-3 mr-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 animate-slideInUp delay-200 flex items-center"
              >
                <img
                  src={university.logo}
                  alt={`${university.name} logo`}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{university.name}</h3>
                  <p className="text-darkNavy">
                    World-renowned for excellence in education and research.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-white mt-5">
            Disclaimer: The universities featured on this page are not directly affiliated with us. The information and images are used solely as a resource for the website, sourced from the internet.
          </p>
        </div>
      </section>
    </>
  );
}

export default Universities;
