import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HR: React.FC = () => {
  const hrCategories = [
    { 
      name: 'HR Management', 
      coaches: 40, 
      image: '/images/hr.webp' 
    },
    { 
      name: 'Leadership Mentors', 
      coaches: 12, 
      image: '/images/leadership.webp' 
    },
    { 
      name: 'Startup Mentors', 
      coaches: 12, 
      image: '/images/startup.webp' 
    },
    { 
      name: 'Career Coaches', 
      coaches: 12, 
      image: '/images/career.webp' 
    },
    { name: 'Team Building', coaches: 18, image: '/images/teambuilding.webp' },
    { name: 'Communication', coaches: 25, image: '/images/communication.webp' },
    { name: 'Presentation Skill', coaches: 15, image: '/images/present.webp' },
    { name: 'Org Culture', coaches: 20, image: '/images/org.webp' }
  ];

  return (
    <section className="hr">
      <div className="hr__container">
        {/* Header Section */}
        <div className="hr__header">
          <div className="hr__header-content">
            <div className="hr__header-title-container">
              <div className="hr__eyebrow">
                HR Management & Leadership
              </div>
            </div>
            <div className="hr__heading">
              <div className="hr__title">
                Quản trị nhân sự & vận hành doanh nghiệp
              </div>
            </div>
          </div>
          <div className="hr__description-container">
            <div className="hr__description">
              Mỗi bước tiến đều cần người đồng hành đúng. Tại{' '}
              <span className="hr__description--bold">Cohub</span>, bạn được huấn luyện bởi những chuyên gia phù hợp nhất, theo cách phù hợp nhất với chính bạn.
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="hr__content">
          <div className="hr__slider-container">
            <Swiper
              className="hr__swiper"
              slidesPerView="auto"
              spaceBetween={16}
              grabCursor={true}
              loop={false}
              speed={300}
              autoplay={false}
              pagination={{
                clickable: true,
                el: '.hr-pagination'
              }}
              navigation={{
                nextEl: '.hr__navigation-arrow',
                prevEl: '.hr__navigation-prev'
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
              {hrCategories.map((category, index) => (
                <SwiperSlide key={index}>
                  <div className="hr-card">
                    <div 
                      className="hr-card__background"
                      style={{
                        backgroundImage: `url('${category.image}')`
                      }}
                    />
                    <div className="hr-card__overlay">
                      <div className="hr-card__content">
                        <div className="hr-card__info">
                          <div className="hr-card__name-container">
                            <div className="hr-card__name">
                              {category.name}
                            </div>
                          </div>
                          <div className="hr-card__coaches-container">
                            <div className="hr-card__coaches">
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
            <div className="hr__navigation-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5.5" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 7L5 12L10 17" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>

            <div className="hr__navigation-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H18.5" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 17L19 12L14 7" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>
          </div>

          {/* Custom Pagination */}
          <div className="hr__pagination hr-pagination">
            {/* Pagination bullets will be automatically generated by Swiper */}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="hr__bottom-section">
          <button
            className="hr__view-all-button"
            onClick={() => { window.location.href = '/404'; }}
          >
            <div className="hr__button-text-container">
              <div className="hr__button-text">
                Xem tất cả
              </div>
            </div>
            <div className="hr__button-icon-container">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 12H19" stroke="#2463EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.5 17L19.5 12L14.5 7" stroke="#2463EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HR;
