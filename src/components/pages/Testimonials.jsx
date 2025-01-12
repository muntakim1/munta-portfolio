import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../assets/testimonials/1.png";
import Image2 from "../../assets/testimonials/2.png";
import Image3 from "../../assets/testimonials/3.png";
import Image4 from "../../assets/testimonials/4.png";
import Image5 from "../../assets/testimonials/5.png";
import Image6 from "../../assets/testimonials/6.png";
import Image7 from "../../assets/testimonials/7.png";
import Image8 from "../../assets/testimonials/8.png";
import Image9 from "../../assets/testimonials/9.png";

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];
  // Mock data fetching from LinkedIn (replace with real API)
  useEffect(() => {
    const fetchTestimonials = async () => {
      // Simulate API call
      const data = images.map((name, index) => ({
        id: index + 1,
        image: name,
      }));
      setTestimonials(data);
    };

    fetchTestimonials();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Testimonials from Clients and Former Colleagues
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-6 rounded-lg shadow-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full rounded-sm mr-4"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
