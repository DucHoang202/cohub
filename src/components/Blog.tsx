import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Blog: React.FC = () => {
  const knowledgeArticles = [
    {
      title: 'Life Coaching: Tìm kiếm ý nghĩa cuộc sống và hạnh phúc cá nhân',
      description: 'Khám phá các phương pháp coaching giúp định hướng mục tiêu sống, xây dựng lối sống cân bằng và tìm kiếm hạnh phúc thực sự.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9b0bfedec469eb76d21662300d63fd47033c7cd9?width=736',
      category: 'Life Coaching'
    },
    {
      title: 'Career Coaching: Phát triển sự nghiệp vượt bậc trong thời đại số',
      description: 'Hướng dẫn xây dựng kế hoạch nghề nghiệp, phát triển kỹ năng lãnh đạo và thích ứng với xu hướng công việc hiện đại.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ab4290a49bb61f50aa8d941425d0ecd513621732?width=736',
      category: 'Career Coaching'
    },
    {
      title: 'Executive Coaching: Lãnh đạo hiệu quả và quản lý đội nhóm',
      description: 'Phương pháp coaching dành cho các nhà lãnh đạo, tập trung vào việc phát triển tầm nhìn chiến lược và kỹ năng quản lý.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/47466c990abc6177768f440128b78156aa741c7c?width=736',
      category: 'Executive Coaching'
    },
    {
      title: 'Health & Wellness Coaching: Lối sống khỏe mạnh và cân bằng',
      description: 'Hướng dẫn xây dựng thói quen sống khỏe, quản lý stress và tạo dựng sự cân bằng giữa công việc và cuộc sống.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/019697c88afff3ce9e9cb15132d289aab17ea05c?width=736',
      category: 'Health Coaching'
    },
    {
      title: 'Financial Coaching: Quản lý tài chính thông minh và đầu tư hiệu qu��',
      description: 'Chiến lược quản lý tài chính cá nhân, lập kế hoạch đầu tư và xây dựng tự do tài chính bền vững.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9f8e3368fef06572885332f4a383b37400321eea?width=736',
      category: 'Financial Coaching'
    },
    {
      title: 'Relationship Coaching: Xây dựng mối quan hệ tích cực và bền vững',
      description: 'Kỹ năng giao tiếp hiệu quả, xây dựng mối quan hệ tích cực trong gia đình, công việc và xã hội.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ab4290a49bb61f50aa8d941425d0ecd513621732?width=736',
      category: 'Relationship Coaching'
    },
    {
      title: 'Business Coaching: Khởi nghiệp và phát triển doanh nghiệp',
      description: 'Hướng dẫn xây dựng business plan, phát triển sản phẩm và mở rộng thị trường cho các doanh nghiệp khởi nghiệp.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/47466c990abc6177768f440128b78156aa741c7c?width=736',
      category: 'Business Coaching'
    },
    {
      title: 'Mindfulness Coaching: Thiền định và phát triển tâm linh',
      description: 'Thực hành mindfulness, kỹ thuật thiền định và phương pháp phát triển nhận thức trong cuộc sống hiện đại.',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9b0bfedec469eb76d21662300d63fd47033c7cd9?width=736',
      category: 'Mindfulness Coaching'
    }
  ];

  return (
    <section className="blog" id="blog">
      <div className="blog__container">
        <div className="blog__header">
          <div className="blog__intro">
            <h2 className="blog__label">Blog</h2>
            <h3 className="blog__title">Tri thức CoHub</h3>
          </div>
          <div className="blog__description">
            <p className="blog__description-text">
              Những bản tin mới nhất về đào tạo và kết nối trong lĩnh vực Coaching, được đội ngũ biên tập của CoHub chia sẻ tới quý vị bạn đọc hàng ngày
            </p>
          </div>
        </div>
        
        <div className="blog__content">
          <div className="blog__slider-container">
            <Swiper
              className="blog__swiper"
              slidesPerView="auto"
              spaceBetween={16}
              grabCursor={true}
              loop={false}
              speed={300}
              autoplay={false}
              pagination={{
                clickable: true,
                el: '.blog-pagination'
              }}
              modules={[Pagination, FreeMode]}
              freeMode={true}
              breakpoints={{
                1025: {
                  slidesPerView: 3,
                  freeMode: false,
                  spaceBetween: 24
                }
              }}
            >
              {knowledgeArticles.map((article, index) => (
                <SwiperSlide key={index}>
                  <article className="blog__card">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="blog__card-image"
                    />
                    <div className="blog__card-content">
                      <div className="blog__card-category">{article.category}</div>
                      <h4 className="blog__card-title">{article.title}</h4>
                      <p className="blog__card-description">{article.description}</p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Pagination */}
          <div className="blog__pagination blog-pagination">
            {/* Pagination bullets will be automatically generated by Swiper */}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="blog__bottom-section">
          <button
            className="blog__view-all-button"
            onClick={() => { window.location.href = '/404'; }}
          >
            <div className="blog__button-text-container">
              <div className="blog__button-text">
                Xem tất cả bài viết
              </div>
            </div>
            <div className="blog__button-icon-container">
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

export default Blog;
