import React from 'react';
const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add form submission logic here
    };
  
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <img src="/images/email.png" alt="Email" className="w-10 h-10" />
                <a href="mailto:haneen.abumazrou@gmail.com" 
                   className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                  haneen.abumazrou@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/images/github.png" alt="GitHub" className="w-10 h-10" />
                <a href="https://github.com/HaneenAbumazrou" 
                   className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                  Haneen Abumazrou
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <img src="/images/phone.png" alt="Phone" className="w-10 h-10" />
                <a href="tel:+962791846461" 
                   className="text-blue-500 hover:text-blue-600 transition-colors duration-300">
                  0791846461
                </a>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 
                         transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  export default Contact;