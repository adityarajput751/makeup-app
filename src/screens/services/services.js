import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Services.css';

import service1 from '../../assets/service1.jpg'; // replace with real images

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: service1,
    number: '01',
    overlay: true
  },
  {
    title: 'Bridal Makeup',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: service1,
    number: '02',
    overlay: true
  },
  {
    title: 'Bridal Makeup',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: service1,
    number: '03',
    overlay: true
  },
  {
    title: 'Bridal Makeup',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: service1,
    number: '04',
    overlay: true
  }
];

function Services() {
  return (
    <section className="services-section" id="services">
      <p className="subtitle">Welcome To Bridal Makeup</p>
      <h2 className="main-title">Our Makeup Services</h2>
      <p className="desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="services-slider"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <div className="image-wrapper">
                <img src={service.image} alt={service.title} />
                {service.overlay && (
                  <div className="overlay">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                )}
                <span className="bg-number">{service.number}</span>
              </div>
              {!service.overlay && <h4 className="below-title">{service.title}</h4>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Services;
