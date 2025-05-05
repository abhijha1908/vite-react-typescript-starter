import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Small Business Owner",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "ShieldX360 has been a game-changer for my business. The ransomware protection alone saved us from what could have been a devastating attack."
  },
  {
    name: "Michael Chen",
    title: "IT Manager",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "After testing numerous security solutions, ShieldX360 stands out for its comprehensive protection and minimal impact on system performance."
  },
  {
    name: "Emily Rodriguez",
    title: "Freelance Designer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 4,
    text: "I needed something that would protect my work across multiple devices. ShieldX360 does exactly that, and the user interface is intuitive and clean."
  },
  {
    name: "David Wilson",
    title: "Healthcare Professional",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "Patient data security is paramount in our field. ShieldX360 gives us peace of mind with its advanced protection features and compliance capabilities."
  }
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(document.getElementById('testimonials') as Element);
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-blue-600 font-medium mb-3">Testimonials</h5>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600">
            See what our customers are saying about ShieldX360's protection.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${animate ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl p-6 shadow-md border border-gray-100 
                        transition-all duration-500 ${index === active ? 'md:scale-105 shadow-lg' : ''}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-12 w-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                  />
                ))}
              </div>
              
              <p className="text-gray-700">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-12 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === active ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Trust Logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {/* Use gray logos for a more subtle, professional look */}
            <div className="h-8 w-24 bg-gray-300 rounded opacity-60"></div>
            <div className="h-8 w-32 bg-gray-300 rounded opacity-60"></div>
            <div className="h-8 w-28 bg-gray-300 rounded opacity-60"></div>
            <div className="h-8 w-20 bg-gray-300 rounded opacity-60"></div>
            <div className="h-8 w-36 bg-gray-300 rounded opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;