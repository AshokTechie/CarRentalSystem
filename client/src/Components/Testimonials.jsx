import React from 'react';
import { assets } from '../assets/assets';
import Title from './Title';

const Testimonials = () => {
  // ✅ Added unique `id` to each testimonial object
  const testimonials = [
    {
      id: 1, // ✅ Added ID
      name: 'Emma Rodriguez',
      address: 'Bangalore', // ✅ Corrected spelling from "Banglore"
      image: assets.testimonial_image_1,
      rating: 5,
      review:
        'Rented the BMW X5 for a weekend getaway — the process was seamless, and the car was in perfect condition. Highly recommend!',
    },
    {
      id: 2, // ✅ Added ID
      name: 'Lian',
      address: 'Mysuru',
      image: assets.testimonial_image_2,
      rating: 4,
      review:
        'I was a bit nervous at first, but the insurance and verification process made me feel secure. Drove the Corolla across the city with zero issues!',
    },
    {
      id: 3, // ✅ Added ID
      name: 'George Hamilton',
      address: 'Hyderabad',
      image: assets.testimonial_image_1,
      rating: 5,
      review:
        'Smooth booking, prompt support, and a top-class driving experience. I’ve already booked my next ride!',
    },
  ];

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30">
      <Title
        title="What Our Customers Are Saying"
        subTitle="Real stories from real users. Discover how our service has made a difference—and if you've had a great experience, we'd love to hear from you too."
      />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
        {testimonials.map((testimonial) => (
          // ✅ Using `testimonial.id` as the unique key
          <div
            key={testimonial.id}
            className="bg-light p-6 rounded-xl shadow max-w-xs hover:-translate-y-1 transition-all duration-500"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-playfair text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.address}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mt-4">
              {/* ✅ Dynamic star rendering based on testimonial.rating */}
              {Array(testimonial.rating)
                .fill(0)
                .map((_, index) => (
                  <img
                    key={index}
                    src={assets.star_icon}
                    alt="Star icon"
                    className="h-4 w-4"
                  />
                ))}
            </div>

            <p className="text-gray-500 max-w-90 mt-4">
              "{testimonial.review}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
