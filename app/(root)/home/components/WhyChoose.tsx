import React from 'react';

function WhyChoose() {
  return (
    <section className="bg-gray-100 py-10 md:py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-darkNavy text-3xl md:text-4xl font-bold mb-6 text-center text-navy-blue animate-fadeIn">
        Why Choose Our Alumni Platform?
      </h2>
      <p className="text-lg md:text-xl mb-8 text-center text-gray-700 animate-fadeIn delay-150">
        Our Alumni Association platform is designed to overcome the challenges faced by traditional alumni networks. By offering a comprehensive suite of features, we aim to foster meaningful connections and support among graduates. Here's how our platform stands out:
      </p>

      {/* Section for each service */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: 'Alumni Registration',
            description: 'Effortlessly join and update your profile on both web and mobile platforms. This functionality ensures that alumni can easily access and maintain their profiles, which is crucial for engaging with other platform features.',
            icon: '/assets/images/registration.webp'
          },
          {
            title: 'Donation Portal',
            description: 'Contribute to various college initiatives through secure donation mechanisms. This feature allows alumni to financially support their alma mater, enhancing institutional projects and scholarships.',
            icon: '/assets/images/donation.webp'
          },
          {
            title: 'Networking Hub',
            description: 'Connect with alumni based on shared interests and professions. This hub facilitates the formation of professional and personal connections, aiding in career growth and community building.',
            icon: '/assets/images/networking.webp'
          },
          {
            title: 'Job Portal',
            description: 'Explore job opportunities and connect with potential employers. The job portal provides a dedicated space for alumni to find career opportunities and network with employers, enhancing job search efficiency.',
            icon: '/assets/images/job-portal.webp'
          },
          {
            title: 'Alumni Directory',
            description: 'Search and connect with alumni based on various criteria. This directory allows users to find and interact with fellow alumni, fostering networking and collaboration within the community.',
            icon: '/assets/images/directory.webp'
          },
          {
            title: 'Success Story Tracking',
            description: 'Showcase and track achievements and success stories of alumni. This feature highlights notable accomplishments, inspiring others and celebrating the diverse successes of the alumni community.',
            icon: '/assets/images/success-stories.webp'
          },
          {
            title: 'Events and Reunions',
            description: 'Organize and manage alumni events and reunions. This tool simplifies the planning and management of events, ensuring effective organization and increased participation.',
            icon: '/assets/images/events.webp'
          },
          {
            title: 'Feedback and Surveys',
            description: 'Provide feedback and participate in surveys. Gathering insights from alumni helps in refining platform features and ensuring that the community’s needs are met effectively.',
            icon: '/assets/icons/feedback.svg'
          }
        ].map((service, index) => (
          <div
            key={index}
            className="bg-darkNavy text-white p-10 ml-6 mr-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            style={{}}
          >
            <div className="flex flex-col items-center space-y-4 h-full">
              {/* Icon at the top */}
              <img src={service.icon} alt={service.title} className="w-16 h-16 rounded-full" />
              
              {/* Title below the icon */}
              <h3 className="text-xl font-semibold">{service.title}</h3>
              
              {/* Description below the title */}
              <p className="text-center">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-lg md:text-xl text-gray-700 animate-fadeIn delay-300">
          Our platform ensures a user-friendly experience, enhanced security, and scalability, catering to the diverse needs of our alumni community. Join us in creating a dynamic ecosystem where alumni can connect, contribute, and thrive.
        </p>
      </div>

    </div>
  </section>
  );
}

export default WhyChoose;
