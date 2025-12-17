import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <div className="hero__badge-new">
              <span className="hero__badge-new-text">
                NEW
              </span>
            </div>
            <span className="hero__badge-text">
              Nền tảng áp dụng AI hỗ trợ Coaching đầu tiên tại VN
            </span>
          </div>

          <h1 className="hero__heading">
            <span className="hero__heading-text--dark">Kết nối </span>
            <span className="hero__heading-text--blue">chuyên gia</span>
            <br className="hero__heading-desktop-break" />
            <br className="hero__heading-mobile-break" />
            <span className="hero__heading-text--blue">bứt phá </span>
            <span className="hero__heading-text--dark">khả năng</span>
          </h1>

          <div className="hero__description-container">
            <p className="hero__description">
              <span className="hero__description--bold">Cohub</span> là nền tảng hỗ trợ bạn kết nối với các chuyên gia hàng đầu trong các lĩnh vực tại Việt Nam giúp bạn phát triển đúng hướng, nhanh chóng và hiệu quả.
            </p>
          </div>

          <div className="hero__actions">
            <button
              className="hero__button hero__button--primary"
              onClick={() => {
                const sportsSection = document.querySelector('.sports');
                if (sportsSection) {
                  sportsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <span className="hero__button-text hero__button-text--white">
                Khám phá ngay
              </span>
              <svg className="hero__button-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 14L12 19L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              className="hero__button hero__button--secondary"
              onClick={() => { window.location.href = '/404'; }}
            >
              <span className="hero__button-text hero__button-text--dark">
                Trở thành chuyên gia
              </span>
            </button>
          </div>
        </div>

        <div className="hero__image-placeholder">
          {/* Placeholder for image positioning */}
        </div>
      </div>

      {/* Absolutely positioned image like in Figma */}
      <img
        className="hero__image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/ebcc052a04015720eb93c5c7311f387d5488d431?width=1448"
        alt="Hình minh hoạ coaching"
      />
    </section>
  );
};

export default Hero;
