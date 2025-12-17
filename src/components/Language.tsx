import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Language: React.FC = () => {
  const languageCategories = [
    { 
      name: 'TOEIC Coaching', 
      coaches: 35, 
      image: '/images/toeic.webp' 
    },
    { 
      name: 'IELTS Coaching', 
      coaches: 46, 
      image: '/images/ielts.webp' 
    },
    { 
      name: 'HSK Coaching', 
      coaches: 12, 
      image: '/images/hsk.webp' 
    },
    { 
      name: 'TOPIK Coaching', 
      coaches: 10, 
      image: '/images/kr.webp' 
    },
    { 
      name: 'TestDAF Coaching', 
      coaches: 46, 
      image: '/images/daf.webp' 
    },
    { 
      name: 'TCF Coaching', 
      coaches: 12, 
      image: '/images/tcf.webp' 
    },
    { 
      name: 'JLPT Coaching', 
      coaches: 25, 
      image: '/images/jp.webp' 
    },
  ];

  return (
    <section className="language">
      <div className="language__container">
        {/* Header Section */}
        <div className="language__header">
          <div className="language__header-content">
            <div className="language__header-title-container">
              <div className="language__eyebrow">
                Language Coaching
              </div>
            </div>
            <div className="language__heading">
              <div className="language__title">
                Phát triển kỹ năng ngôn ngữ & giao tiếp
              </div>
            </div>
          </div>
          <div className="language__description-container">
            <div className="language__description">
              Nâng cao khả năng giao tiếp hiệu quả. Tại{' '}
              <span className="language__description--bold">Cohub</span>, bạn được huấn luyện bởi những chuyên gia ngôn ngữ hàng đầu, theo phương pháp phù hợp nhất với nhu cầu của bạn.
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="language__content">
          <div className="language__slider-container">
            <Swiper
              className="language__swiper"
              slidesPerView="auto"
              spaceBetween={16}
              grabCursor={true}
              loop={false}
              speed={300}
              autoplay={false}
              pagination={{
                clickable: true,
                el: '.language-pagination'
              }}
              navigation={{
                nextEl: '.language__navigation-arrow',
                prevEl: '.language__navigation-prev'
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
              {languageCategories.map((category, index) => (
                <SwiperSlide key={index}>
                  <div className="language-card">
                    <div 
                      className="language-card__background"
                      style={{
                        backgroundImage: `url('${category.image}')`
                      }}
                    />
                    <div className="language-card__overlay">
                      <div className="language-card__content">
                        <div className="language-card__info">
                          <div className="language-card__name-container">
                            <div className="language-card__name">
                              {category.name}
                            </div>
                          </div>
                          <div className="language-card__coaches-container">
                            <div className="language-card__coaches">
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
            <div className="language__navigation-prev">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5.5" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10 7L5 12L10 17" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>

            <div className="language__navigation-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H18.5" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 17L19 12L14 7" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10"/>
              </svg>
            </div>
          </div>

          {/* Custom Pagination */}
          <div className="language__pagination language-pagination">
            {/* Pagination bullets will be automatically generated by Swiper */}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="language__bottom-section">
          <button
            className="language__view-all-button"
            onClick={() => { window.location.href = '/404'; }}
          >
            <div className="language__button-text-container">
              <div className="language__button-text">
                Xem tất cả
              </div>
            </div>
            <div className="language__button-icon-container">
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

export default Language;
