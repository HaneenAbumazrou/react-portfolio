import React from 'react';
const Portfolio = () => {
    const projects = [
      {
        image: '/images/project1.png',
        title: 'MobixStore E-commerce Website',
        link: '#'
      },
      {
        image: '/images/project2.png',
        title: 'Airbnb website',
        link: '#'
      },
      {
        image: '/images/project3.png',
        title: 'JO BEST Movie Website',
        link: '#'
      }
    ];
  
    return (
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">My Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="group relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-white text-xl font-semibold mb-4">{project.title}</h4>
                    <a href={project.link} 
                       className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full 
                                hover:bg-blue-600 transition-colors duration-300">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Portfolio;