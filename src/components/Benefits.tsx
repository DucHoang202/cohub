import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    { 
      title: 'Coach phù hợp nhất cho bạn',
      description: 'AI và hệ thống review minh bạch giúp bạn tìm đúng chuyên gia.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#007AFF"/>
          <path d="M20 14C18.895 14 18 14.895 18 16C18 17.105 18.895 18 20 18C21.105 18 22 17.105 22 16C22 14.895 21.105 14 20 14Z" fill="white"/>
          <path d="M26 24C26 21.791 24.209 20 22 20H18C15.791 20 14 21.791 14 24V26C14 26.552 14.448 27 15 27C15.552 27 16 26.552 16 26V24C16 22.896 16.896 22 18 22H22C23.104 22 24 22.896 24 24V26C24 26.552 24.448 27 25 27C25.552 27 26 26.552 26 26V24Z" fill="white"/>
        </svg>
      )
    },
    { 
      title: 'Học tập cá nhân hóa',
      description: 'Lộ trình được thiết kế theo mục tiêu và phong cách học của riêng bạn.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#6E56CF"/>
          <path d="M27 15H13C12.448 15 12 15.448 12 16C12 16.552 12.448 17 13 17H27C27.552 17 28 16.552 28 16C28 15.448 27.552 15 27 15Z" fill="white"/>
          <path d="M27 19H13C12.448 19 12 19.448 12 20C12 20.552 12.448 21 13 21H27C27.552 21 28 20.552 28 20C28 19.448 27.552 19 27 19Z" fill="white"/>
          <path d="M21 23H13C12.448 23 12 23.448 12 24C12 24.552 12.448 25 13 25H21C21.552 25 22 24.552 22 24C22 23.448 21.552 23 21 23Z" fill="white"/>
          <path d="M26 26L24 24L22 26L24 28L26 26Z" fill="white"/>
        </svg>
      )
    },
    { 
      title: 'Thời gian linh hoạt',
      description: 'Đặt lịch học dễ dàng, học mọi lúc – mọi nơi.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#52A9FF"/>
          <path d="M20 12C15.589 12 12 15.589 12 20C12 24.411 15.589 28 20 28C24.411 28 28 24.411 28 20C28 15.589 24.411 12 20 12ZM20 26C16.691 26 14 23.309 14 20C14 16.691 16.691 14 20 14C23.309 14 26 16.691 26 20C26 23.309 23.309 26 20 26Z" fill="white"/>
          <path d="M21 16H19V21L23 23.5L24 22L21 20V16Z" fill="white"/>
        </svg>
      )
    },
    { 
      title: 'Kết quả đo lường được',
      description: 'Theo dõi tiến bộ, đánh giá năng lực và thấy sự thay đổi rõ ràng.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#4169E1"/>
          <path d="M14 25V23C14 22.448 14.448 22 15 22C15.552 22 16 22.448 16 23V25C16 25.552 15.552 26 15 26C14.448 26 14 25.552 14 25Z" fill="white"/>
          <path d="M18 25V20C18 19.448 18.448 19 19 19C19.552 19 20 19.448 20 20V25C20 25.552 19.552 26 19 26C18.448 26 18 25.552 18 25Z" fill="white"/>
          <path d="M22 25V17C22 16.448 22.448 16 23 16C23.552 16 24 16.448 24 17V25C24 25.552 23.552 26 23 26C22.448 26 22 25.552 22 25Z" fill="white"/>
          <path d="M26 25V21C26 20.448 26.448 20 27 20C27.552 20 28 20.448 28 21V25C28 25.552 27.552 26 27 26C26.448 26 26 25.552 26 25Z" fill="white"/>
        </svg>
      )
    },
    { 
      title: 'Thanh toán minh bạch, an toàn',
      description: 'Không phí ẩn, hoàn tiền 100% nếu không hài lòng.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#22C55E"/>
          <path d="M28 15H12C11.448 15 11 15.448 11 16V24C11 24.552 11.448 25 12 25H28C28.552 25 29 24.552 29 24V16C29 15.448 28.552 15 28 15Z" fill="white"/>
          <path d="M13 19H15C15.552 19 16 19.448 16 20C16 20.552 15.552 21 15 21H13C12.448 21 12 20.552 12 20C12 19.448 12.448 19 13 19Z" fill="#22C55E"/>
          <path d="M26 17L24 19L26 21" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        </svg>
      )
    },
    { 
      title: 'Cộng đồng chất lượng',
      description: 'Kết nối, trao đổi và phát triển cùng những người có cùng mục tiêu.',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="8" fill="#8B5A2B"/>
          <path d="M16 18C17.657 18 19 16.657 19 15C19 13.343 17.657 12 16 12C14.343 12 13 13.343 13 15C13 16.657 14.343 18 16 18Z" fill="white"/>
          <path d="M24 18C25.657 18 27 16.657 27 15C27 13.343 25.657 12 24 12C22.343 12 21 13.343 21 15C21 16.657 22.343 18 24 18Z" fill="white"/>
          <path d="M20 20C18.343 20 17 21.343 17 23C17 24.657 18.343 26 20 26C21.657 26 23 24.657 23 23C23 21.343 21.657 20 20 20Z" fill="white"/>
          <path d="M12 25C12 23.343 13.343 22 15 22H17C17.35 22 17.687 22.06 18 22.17C17.405 22.837 17 23.706 17 24.667V26C17 26.667 17.18 27.287 17.49 27.82C16.7 27.93 15.87 28 15 28C13.343 28 12 26.657 12 25Z" fill="white"/>
          <path d="M28 25C28 26.657 26.657 28 25 28C24.13 28 23.3 27.93 22.51 27.82C22.82 27.287 23 26.667 23 26V24.667C23 23.706 22.595 22.837 22 22.17C22.313 22.06 22.65 22 23 22H25C26.657 22 28 23.343 28 25Z" fill="white"/>
        </svg>
      )
    }
  ];


  return (
    <section className="benefits">
      <div className="benefits__container">
        {/* Section 1: Main Benefits */}
        <div className="benefits__header">
          <div className="benefits__title-container">
            <h2 className="benefits__title">
              Trải nghiệm học tập thế hệ mới với Cohub
            </h2>
          </div>
          <div className="benefits__description-container">
            <div className="benefits__description">
              Kết nối nhanh chóng – Minh bạch – Cá nhân hóa
            </div>
          </div>
        </div>

        {/* Benefits Grid - 6 items in 3x2 layout */}
        <div className="benefits__grid benefits__grid--six">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefits__card">
              <div className="benefits__card-icon">
                {benefit.icon}
              </div>
              <div className="benefits__card-content">
                <div className="benefits__card-title">
                  {benefit.title}
                </div>
                <div className="benefits__card-description">
                  {benefit.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Kết nối để phát triển đúng hướng */}
        <div className="benefits__feature">
          <div className="benefits__feature-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
              alt="Kết nối để phát triển đúng hướng"
              className="benefits__feature-img"
            />
          </div>
          <div className="benefits__feature-content">
            <div className="benefits__feature-text-container">
              <div className="benefits__feature-title">
                Kết nối để phát triển đúng hướng
              </div>
              <div className="benefits__feature-description">
                Với Cohub, bạn không chỉ học mà còn xây dựng sự thay đổi bền vững. Dù bạn muốn nâng cao thể lực, cải thiện ngoại ngữ hay phát triển sự nghiệp, chúng tôi đều có coach sẵn sàng đồng hành.
              </div>
              <div className="benefits__feature-list">
                <div className="benefits__feature-item">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83509 12.7051L0.285095 8.15514C0.0117393 7.88178 0.0117393 7.43857 0.285095 7.16518L1.27502 6.17523C1.54838 5.90185 1.99162 5.90185 2.26497 6.17523L5.33007 9.2403L11.8952 2.67523C12.1685 2.40188 12.6118 2.40188 12.8851 2.67523L13.875 3.66518C14.1484 3.93854 14.1484 4.38175 13.875 4.65514L5.82505 12.7052C5.55167 12.9785 5.10845 12.9785 4.83509 12.7051Z" fill="#0051FF"/>
                  </svg>
                  <span>Học trực tiếp hoặc trực tuyến, tùy theo nhu cầu.</span>
                </div>
                <div className="benefits__feature-item">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83509 12.5049L0.285095 7.95494C0.0117393 7.68159 0.0117393 7.23837 0.285095 6.96499L1.27502 5.97504C1.54838 5.70165 1.99162 5.70165 2.26497 5.97504L5.33007 9.04011L11.8952 2.47504C12.1685 2.20168 12.6118 2.20168 12.8851 2.47504L13.875 3.46499C14.1484 3.73834 14.1484 4.18156 13.875 4.45494L5.82505 12.505C5.55167 12.7783 5.10845 12.7783 4.83509 12.5049Z" fill="#0051FF"/>
                  </svg>
                  <span>Huấn luyện 1:1, theo nhóm hoặc workshop.</span>
                </div>
                <div className="benefits__feature-item">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.83509 12.3052L0.285095 7.75524C0.0117393 7.48188 0.0117393 7.03867 0.285095 6.76528L1.27502 5.77533C1.54838 5.50195 1.99162 5.50195 2.26497 5.77533L5.33007 8.8404L11.8952 2.27533C12.1685 2.00197 12.6118 2.00197 12.8851 2.27533L13.875 3.26528C14.1484 3.53864 14.1484 3.98185 13.875 4.25524L5.82505 12.3053C5.55167 12.5786 5.10845 12.5786 4.83509 12.3052Z" fill="#0051FF"/>
                  </svg>
                  <span>Lựa chọn coach phù hợp với tính cách, mục tiêu và ngân sách.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Lộ trình thông minh, tiến bộ rõ ràng */}
        <div className="benefits__feature">
          <div className="benefits__feature-content">
            <div className="benefits__feature-text-container">
              <div className="benefits__feature-title">
                Lộ trình thông minh, tiến bộ rõ ràng
              </div>
              <div className="benefits__feature-description">
                Học với Cohub là một hành trình liên tục. Hệ thống giúp bạn không chỉ học xong một buổi, mà xây dựng được cả thói quen phát triển lâu dài.
              </div>
              <div className="benefits__feature-list">
                <div className="benefits__feature-item">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75502 12.96L0.205017 8.41002C-0.0683389 8.13666 -0.0683389 7.69345 0.205017 7.42007L1.19494 6.43011C1.4683 6.15673 1.91154 6.15673 2.1849 6.43011L5.24999 9.49518L11.8151 2.93011C12.0884 2.65676 12.5317 2.65676 12.805 2.93011L13.795 3.92007C14.0683 4.19342 14.0683 4.63664 13.795 4.91002L5.74497 12.96C5.47159 13.2334 5.02837 13.2334 4.75502 12.96Z" fill="#0051FF"/>
                  </svg>
                  <span>Báo cáo tiến độ minh bạch sau mỗi buổi học.</span>
                </div>
                <div className="benefits__feature-item">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75502 12.7598L0.205017 8.20983C-0.0683389 7.93647 -0.0683389 7.49326 0.205017 7.21987L1.19494 6.22992C1.4683 5.95654 1.91154 5.95654 2.1849 6.22992L5.24999 9.29499L11.8151 2.72992C12.0884 2.45656 12.5317 2.45656 12.805 2.72992L13.795 3.71987C14.0683 3.99323 14.0683 4.43644 13.795 4.70983L5.74497 12.7599C5.47159 13.0332 5.02837 13.0332 4.75502 12.7598Z" fill="#0051FF"/>
                  </svg>
                  <span>Gợi ý điều chỉnh lộ trình bằng AI.</span>
                </div>
                <div className="benefits__feature-item">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.75502 12.5601L0.205017 8.01012C-0.0683389 7.73676 -0.0683389 7.29355 0.205017 7.02016L1.19494 6.03021C1.4683 5.75683 1.91154 5.75683 2.1849 6.03021L5.24999 9.09528L11.8151 2.53021C12.0884 2.25686 12.5317 2.25686 12.805 2.53021L13.795 3.52017C14.0683 3.79352 14.0683 4.23674 13.795 4.51012L5.74497 12.5601C5.47159 12.8335 5.02837 12.8335 4.75502 12.5601Z" fill="#0051FF"/>
                  </svg>
                  <span>Đánh giá kết quả dựa trên mục tiêu cá nhân và phản hồi từ coach.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="benefits__feature-image">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format"
              alt="Lộ trình thông minh, tiến bộ rõ ràng"
              className="benefits__feature-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
