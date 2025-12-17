import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Tech: React.FC = () => {
  const techCategories = [
    { 
      name: 'AI Mentor', 
      coaches: 40, 
      image: '/images/AI.webp' 
    },
    { 
      name: 'Blockchain & Crypto', 
      coaches: 12, 
      image: '/images/Blockchain.webp' 
    },
    { 
      name: 'Coding & Engineering', 
      coaches: 12, 
      image: '/images/Coding.webp' 
    },
    { 
      name: 'UX & Product Design', 
      coaches: 12, 
      image: '/images/Ux.webp' 
    },
    { name: 'Data Science', coaches: 18, image: '/images/Data.webp' },
    { name: 'DevOps & Cloud', coaches: 15, image: '/images/Devops.webp' },
    { name: 'Mobile Development', coaches: 22, image: '/images/Mobile.webp' },
    { name: 'Cybersecurity', coaches: 14, image: '/images/Cyber.webp' }
  ];

  return (
    <section className="tech">
      <div className="tech__container">
        {/* Header Section */}
        <div className="tech__header">
          <div className="tech__header-content">
            <div className="tech__header-title-container">
              <div className="tech__eyebrow">
                AI & Technology Coaching
              </div>
            </div>
            <div className="tech__heading">
              <div className="tech__title">
                Làm chủ công nghệ, dẫn đầu thay đổi
              </div>
            </div>
          </div>
          <div className="tech__description-container">
            <div className="tech__description">
              Đừng chỉ theo kịp công nghệ, hãy đón đầu nó.
              Học cùng chuyên gia tại <span className="tech__description--bold">CoHub</span> để ứng dụng AI, viết code và làm chủ sản phẩm như một người kiến tạo.
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="tech__content">
          <div className="tech__slider-container">
              <Swiper
                className="tech__swiper"
                slidesPerView="auto"
                spaceBetween={16}
                grabCursor={true}
                loop={false}
                speed={300}
                autoplay={false}
                pagination={{
                  clickable: true,
                  el: '.tech-pagination'
                }}
                navigation={{
                  nextEl: '.tech__navigation-arrow',
                  prevEl: '.tech__navigation-prev'
                }}
                modules={[Navigation, Pagination, FreeMode]}
                freeMode={true}
                breakpoints={{
                  1025: {
                    slidesPerView: 4,
                    freeMode: false,
                    spaceBetween: 24
                  }
                }}
              >
                {techCategories.map((category, index) => (
                  <SwiperSlide key={index}>
                    <div className="tech-card">
                      <div 
                        className="tech-card__background"
                        style={{
                          backgroundImage: `url('${category.image}')`
                        }}
                      />
                      <div className="tech-card__overlay">
                        <div className="tech-card__content">
                          <div className="tech-card__info">
                            <div className="tech-card__name-container">
                              <div className="tech-card__name">
                                {category.name}
                              </div>
                            </div>
                            <div className="tech-card__coaches-container">
                              <div className="tech-card__coaches">
                                {category.coaches} Coach
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            {/* Navigation Arrows */}
            <div className="tech__navigation-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5.5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 7L5 12L10 17" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>

            <div className="tech__navigation-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H18.5" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 17L19 12L14 7" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>
          </div>

          {/* Custom Pagination */}
          <div className="tech__pagination tech-pagination">
            {/* Pagination bullets will be automatically generated by Swiper */}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="tech__bottom-section">
          <button
            className="tech__view-all-button"
            onClick={() => { window.location.href = '/404'; }}
          >
            <div className="tech__button-text-container">
              <div className="tech__button-text">
                Xem tất cả
              </div>
            </div>
            <div className="tech__button-icon-container">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 17L19.5 12L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tech;
