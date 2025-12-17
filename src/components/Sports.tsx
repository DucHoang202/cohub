import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Sports: React.FC = () => {
  const sportsCategories = [
    { 
      name: 'Pickleball', 
      coaches: 86, 
      image: '/images/Pickleball.webp'
    },
    { 
      name: 'Gym & Fitness', 
      coaches: 62, 
      image: '/images/Fitness.webp'
    },
    { 
      name: 'Bóng rổ', 
      coaches: 12, 
      image: '/images/Basketball.webp'
    },
    { 
      name: 'Bóng đá', 
      coaches: 16, 
      image: '/images/Football.webp'
    },
    { name: 'Pilates', coaches: 34, image: '/images/Pilates.webp' },
    { name: 'Golf', coaches: 28, image: '/images/Golf.webp' },
    { name: 'Yoga', coaches: 45, image: '/images/Yoga.webp' },
    { name: 'Boxing', coaches: 38, image: '/images/Boxing.webp' }
  ];

  return (
    <section className="sports">
      <div className="sports__container">
        {/* Header Section */}
        <div className="sports__header">
          <div className="sports__header-content">
            <div className="sports__header-title-container">
              <div className="sports__eyebrow">
                Sports & Physical Performance
              </div>
            </div>
            <div className="sports__heading">
              <div className="sports__title">
                Rèn luyện & phát triển sức khoẻ
              </div>
            </div>
          </div>
          <div className="sports__description-container">
            <div className="sports__description">
              Mỗi bước tiến đều cần người đồng hành đúng. Tại{' '}
              <span className="sports__description--bold">Cohub</span>, bạn được huấn luyện bởi những chuyên gia phù hợp nhất, theo cách phù hợp nhất với chính bạn.
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="sports__content">
          <div className="sports__slider-container">
            <Swiper
              className="sports__swiper"
              slidesPerView="auto"
              spaceBetween={16}
              grabCursor={true}
              loop={false}
              speed={300}
              autoplay={false}
              pagination={{
                clickable: true,
                el: '.sports-pagination'
              }}
              navigation={{
                nextEl: '.sports__navigation-arrow',
                prevEl: '.sports__navigation-prev'
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
              {sportsCategories.map((category, index) => (
                <SwiperSlide key={index}>
                  <div className="sports-card">
                    <div 
                      className="sports-card__background"
                      style={{
                        backgroundImage: `url('${category.image}')`
                      }}
                    />
                    <div className="sports-card__overlay">
                      <div className="sports-card__content">
                        <div className="sports-card__info">
                          <div className="sports-card__name-container">
                            <div className="sports-card__name">
                              {category.name}
                            </div>
                          </div>
                          <div className="sports-card__coaches-container">
                            <div className="sports-card__coaches">
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
            <div className="sports__navigation-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5.5" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 7L5 12L10 17" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>

            <div className="sports__navigation-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H18.5" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 17L19 12L14 7" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>
          </div>

          {/* Custom Pagination */}
          <div className="sports__pagination sports-pagination">
            {/* Pagination bullets will be automatically generated by Swiper */}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="sports__bottom-section">
          <button
            className="sports__view-all-button"
            onClick={() => { window.location.href = '/404'; }}
          >
            <div className="sports__button-text-container">
              <div className="sports__button-text">
                Xem tất cả
              </div>
            </div>
            <div className="sports__button-icon-container">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 12H19" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 17L19.5 12L14.5 7" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sports;
