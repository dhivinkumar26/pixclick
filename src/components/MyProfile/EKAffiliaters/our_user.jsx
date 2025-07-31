import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import user1 from './../../../assets/MyProfile/user1.jpg';
import user2 from './../../../assets/MyProfile/user2.jpg';
import user3 from './../../../assets/MyProfile/user3.jpg';

const userImages = [
  { id: 1, src: user1 },
  { id: 2, src: user2 },
  { id: 3, src: user3 },
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 overflow-hidden relative">
      <div className="mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          See What <span className="text-emerald-600">Our Users</span> Have To Say
        </h2>

        <div className="relative flex justify-center items-center py-6 md:py-10">
          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-1 sm:left-2 md:-left-8 lg:-left-12 z-10 p-3 md:p-4 rounded-full bg-green-100/70 hover:bg-green-200/90 cursor-pointer shadow-md border-2 border-green-600 transition-all">
            <FaChevronLeft className="text-gray-600 text-lg md:text-xl" />
          </button>
          <button className="swiper-button-next-custom absolute right-1 sm:right-2 md:-right-8 lg:-right-12 z-10 p-3 md:p-4 rounded-full bg-green-100/70 hover:bg-green-200/90 cursor-pointer shadow-md border-2 border-green-600 transition-all">
            <FaChevronRight className="text-gray-600 text-lg md:text-xl" />
          </button>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            className="w-full max-w-4xl"
          >
            {userImages.map((image) => (
              <SwiperSlide key={image.id} className="flex justify-center items-center py-4">
                <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto">
                  <div
                    className="relative z-10 aspect-[16/9] transform-gpu"
                    style={{
                      transform: 'perspective(1000px) rotateX(8deg)',
                    }}
                  >
                    <img
                      src={image.src}
                      alt={`User ${image.id}`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
