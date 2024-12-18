import React from 'react';
const Services = () => {
    const services = [
      {
        title: 'Full Stack Web Development',
        description: 'Building responsive, feature-rich websites and applications using modern front-end and back-end technologies.'
      },
      {
        title: 'Mobile App Development',
        description: 'Developing cross-platform mobile applications with Flutter, ensuring seamless performance on both iOS and Android devices.'
      },
      {
        title: 'UI/UX Design',
        description: 'Designing intuitive user interfaces with a focus on user experience and accessibility.'
      },
      {
        title: 'Frontend Development',
        description: 'Crafting interactive, fast, and responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap.'
      },
      {
        title: 'Custom Web Solutions',
        description: 'Creating tailored web solutions to meet specific business needs, from e-commerce platforms to content management systems.'
      },
      {
        title: 'System Integration',
        description: 'Integrating various technologies and platforms to ensure smooth communication between systems and enhance functionality.'
      }
    ];
  
    return (
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} 
                   className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Services;