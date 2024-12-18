import React from 'react';
const Skills = () => {
    const skills = [
        { name: 'HTML', icon: 'html5', color: '#e14d2e', description: 'Expert in structuring web content with HTML5.' },
        { name: 'CSS', icon: 'css3-alt', color: '#264de4', description: 'Proficient in designing responsive and visually appealing web pages using CSS3.' },
        { name: 'JavaScript', icon: 'js', color: '#e9ca31', description: 'Experienced in adding interactivity and dynamic content to web pages using JavaScript.' },
        { name: 'Dart', icon: 'dart-lang', color: '#41c4ff', description: 'Skilled in using Dart for building scalable applications.' },
        { name: 'Flutter', icon: 'flutter', color: '#5ec8f8', description: 'Building cross-platform mobile applications using Flutter.' },
        { name: 'Bootstrap', icon: 'bootstrap', color: '#7952b3', description: 'Utilizing Bootstrap for responsive and mobile-first web development.' },
        { name: 'PHP', icon: 'php', color: '#8993be', description: 'Developing dynamic and interactive server-side web applications using PHP.' },
        { name: 'Laravel', icon: 'laravel', color: '#f05340', description: 'Building robust and scalable web applications using the Laravel PHP framework.' },
        { name: 'React', icon: 'react', color: '#61dafb', description: 'Developing interactive and component-based user interfaces with React.' },
        { name: 'MySQL', icon: 'database', color: '#00758f', description: 'Efficiently managing and querying relational databases with MySQL.' }
    ];
  
    return (
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} 
                   className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3">
                  <i className={`fab fa-${skill.icon}`} style={{ color: skill.color }}></i>
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Skills;