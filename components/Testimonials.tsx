import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Maria Gonzalez',
      role: 'Import Manager, Spain',
      content: 'Excellent customer service and consistent quality for 3 years now. Very professional team that understands international trade requirements.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Ahmed Al-Mansoori',
      role: 'CEO, Al Noor Trading, UAE',
      content: 'Ashirwad Enterprises has been our trusted partner for Indian rice and spices. Their quality and timely delivery are unmatched.',
      rating: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Sophie Martin',
      role: 'Purchasing Manager, France',
      content: 'We appreciate the attention to detail and the premium quality of products. Their customer support is available 24/7 which is crucial for our business.',
      rating: 4,
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 relative inline-block">
            What Our Clients Say
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-yellow-500 rounded-full"></span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for quality Indian agricultural products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-yellow-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={18} 
                    className={i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
