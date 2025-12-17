import React from 'react';

// Footer component redesigned according to Figma specifications - PR #6

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Header Section */}
        <div className="footer__header">
          <div className="footer__brand">
            <div className="footer__logo">
              <img 
                src="/images/cohub-logo.svg" 
                alt="CoHub Logo" 
                className="footer__logo-icon"
              />
          
            </div>
            <div className="footer__tagline">
              Nền tảng áp dụng AI hỗ trợ Coaching đầu tiên tại VN
            </div>
          </div>
          
          <div className="footer__social">
            <a href="#" className="footer__social-link">
              <svg className="footer__social-icon" width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.043 1.13086H6.957C3.11475 1.13086 0 4.24561 0 8.08786V34.1739C0 38.0161 3.11475 41.1309 6.957 41.1309H33.043C36.8852 41.1309 40 38.0161 40 34.1739V8.08786C40 4.24561 36.8852 1.13086 33.043 1.13086Z" fill="#637381"/>
                <path d="M22.0499 15.9027H23.4799V13.4147C22.7881 13.34 22.0927 13.3032 21.3969 13.3047C19.3369 13.3047 17.9259 14.5997 17.9259 16.9817V19.1737H15.6519V21.9557H17.9259V28.9557H20.7129V21.9557H22.8949L23.2409 19.1747H20.7119V17.2577C20.7129 16.4537 20.9299 15.9027 22.0499 15.9027Z" fill="white"/>
              </svg>
            </a>
            <a href="#" className="footer__social-link">
              <svg className="footer__social-icon" width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.043 1.13086H6.957C3.11475 1.13086 0 4.24561 0 8.08786V34.1739C0 38.0161 3.11475 41.1309 6.957 41.1309H33.043C36.8852 41.1309 40 38.0161 40 34.1739V8.08786C40 4.24561 36.8852 1.13086 33.043 1.13086Z" fill="#637381"/>
                <mask id="mask0_118_103" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="12" y="13" width="17" height="17">
                  <path d="M12.1738 13.3057H28.1738V29.3057H12.1738V13.3057Z" fill="white"/>
                </mask>
                <g mask="url(#mask0_118_103)">
                  <path d="M23.9679 20.7207C23.8985 20.6877 23.8285 20.656 23.7579 20.6257C23.6349 18.3497 22.3919 17.0477 20.3039 17.0337H20.2749C19.0269 17.0337 17.9879 17.5667 17.3489 18.5367L18.4969 19.3247C18.9739 18.5997 19.7239 18.4447 20.2759 18.4447H20.2949C20.9819 18.4497 21.5009 18.6497 21.8369 19.0397C22.0815 19.3243 22.2445 19.7143 22.3259 20.2097C21.6735 20.1043 21.0113 20.0728 20.3519 20.1157C18.3669 20.2297 17.0919 21.3877 17.1769 22.9957C17.2199 23.8127 17.6269 24.5137 18.3209 24.9727C18.9089 25.3607 19.6649 25.5497 20.4509 25.5067C21.4889 25.4507 22.3039 25.0537 22.8709 24.3297C23.3029 23.7797 23.5759 23.0667 23.6969 22.1697C24.1919 22.4677 24.5579 22.8597 24.7609 23.3327C25.1049 24.1357 25.1249 25.4557 24.0489 26.5307C23.1049 27.4727 21.9709 27.8807 20.2579 27.8937C18.3579 27.8797 16.9199 27.2697 15.9849 26.0817C15.1099 24.9687 14.6579 23.3617 14.6409 21.3057C14.6579 19.2487 15.1099 17.6417 15.9849 16.5287C16.9199 15.3407 18.3569 14.7307 20.2579 14.7167C22.1729 14.7307 23.6349 15.3437 24.6059 16.5367C25.0809 17.1227 25.4399 17.8597 25.6759 18.7177L27.0219 18.3587C26.7349 17.3017 26.2839 16.3917 25.6709 15.6367C24.4269 14.1057 22.6069 13.3217 20.2629 13.3057H20.2529C17.9129 13.3217 16.1139 14.1087 14.9059 15.6457C13.8299 17.0127 13.2759 18.9157 13.2559 21.2997V21.3107C13.2759 23.6957 13.8299 25.5977 14.9059 26.9657C16.1139 28.5017 17.9139 29.2887 20.2529 29.3057H20.2629C22.3429 29.2907 23.8089 28.7457 25.0169 27.5397C26.5969 25.9607 26.5489 23.9817 26.0289 22.7667C25.6549 21.8967 24.9409 21.1877 23.9679 20.7207ZM20.3779 24.0977C19.5079 24.1467 18.6039 23.7557 18.5589 22.9197C18.5259 22.2997 19.0009 21.6077 20.4309 21.5247C20.5949 21.5153 20.7559 21.5107 20.9139 21.5107C21.4001 21.5078 21.8852 21.5571 22.3609 21.6577C22.1959 23.7167 21.2299 24.0507 20.3779 24.0977Z" fill="white"/>
                </g>
              </svg>
            </a>
            <a href="#" className="footer__social-link">
              <svg className="footer__social-icon" width="40" height="42" viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.043 0.408203H6.957C3.11475 0.408203 0 3.52296 0 7.3652V33.4512C0 37.2934 3.11475 40.4082 6.957 40.4082H33.043C36.8852 40.4082 40 37.2934 40 33.4512V7.3652C40 3.52296 36.8852 0.408203 33.043 0.408203Z" fill="#637381"/>
                <path d="M27.8229 28.2341H27.8269V22.4931C27.8269 19.6851 27.2219 17.5211 23.9389 17.5211C22.3609 17.5211 21.3019 18.3881 20.8689 19.2091H20.8239V17.7841H17.7099V28.2341H20.9509V23.0581C20.9509 21.6961 21.2089 20.3781 22.8969 20.3781C24.5589 20.3781 24.5839 21.9331 24.5839 23.1451V28.2331L27.8229 28.2341ZM12.4319 17.7851H15.6769V28.2351H12.4319V17.7851ZM14.0529 12.5821C13.5542 12.5821 13.0761 12.7801 12.7235 13.1327C12.3709 13.4853 12.1729 13.9634 12.1729 14.4621C12.1729 15.4991 13.0159 16.3591 14.0529 16.3591C15.0909 16.3591 15.9329 15.4991 15.9329 14.4611C15.9329 13.4231 15.0899 12.5821 14.0529 12.5821Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="footer__separator"></div>

        {/* Navigation Sections */}
        {/* <div className="footer__navigation">
          <div className="footer__nav-column">
            <h4 className="footer__nav-title">Về Chúng tôi</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Giới thiệu CoHub</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Thông tin liên hệ</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav-column">
            <h4 className="footer__nav-title">Dịch vụ</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Sự kiện trực tuyến</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Đặt lịch hẹn chuyên gia</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Khoá học</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav-column">
            <h4 className="footer__nav-title">Hỗ trợ</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Trung tâm hỗ trợ</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Điều khoản sử dụng</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Điều khoản dành cho Chuyên gia</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Hướng dẫn thanh toán VNPAY</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav-column">
            <h4 className="footer__nav-title">Chính sách và quy định</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Quy chế hoạt động</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Chính sách bảo mật thông tin</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Cơ chế giải quyết tranh chấp khiếu nại</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Chính sách bảo mật thanh toán</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Chính sách đổi trả và kiểm hàng</a>
              </li>
              <li className="footer__nav-item">
                <a href="#" className="footer__nav-link">Điều kiện vận chuyển và giao nhận</a>
              </li>
            </ul>
          </div>

          <div className="footer__nav-column">
            <div className="footer__payments">
              <h4 className="footer__nav-title">Phương thức thanh toán</h4>
              <div className="footer__payment-methods">
                <div className="footer__payment-row">
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/visa-logo.svg" alt="Visa" className="footer__payment-logo" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/mastercard-logo.svg" alt="Mastercard" className="footer__payment-logo" />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/jcb-logo.svg" alt="JCB" className="footer__payment-logo" />
                </div>
                <div className="footer__payment-row">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/8eb044134e72f4e892ff6cebea59d92fee675451?width=130" 
                    alt="VNPay" 
                    className="footer__payment-logo footer__payment-logo--vnpay"
                  />
                  <img src="https://api.builder.io/api/v1/image/assets/TEMP/atm-logo.svg" alt="ATM" className="footer__payment-logo" />
                </div>
              </div>
            </div>

            <div className="footer__certifications">
              <h4 className="footer__nav-title">Chứng nhận bởi</h4>
              <div className="footer__cert-logos">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ec04e2ab98c622a6b526e64836139b4f4234b235?width=224" 
                  alt="Certification Logo" 
                  className="footer__cert-logo"
                />
                <div className="footer__cert-group">
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9e76f18dd5780f412600964e2103c675422fb11f?width=80" 
                    alt="Certification" 
                    className="footer__cert-logo footer__cert-logo--small"
                  />
                  <img 
                    src="https://api.builder.io/api/v1/image/assets/TEMP/3f1297e5fe4593cb1c463d6a0cc26762404fea00?width=80" 
                    alt="Certification" 
                    className="footer__cert-logo footer__cert-logo--small"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Separator */}
        {/* <div className="footer__separator"></div> */}

        {/* Company Information */}
        <div className="footer__company">
          <div className="footer__company-info">
            <h3 className="footer__company-name">Công ty Cổ phần CoHub</h3>
            {/* <p className="footer__company-text">Mã số doanh nghiệp:</p>
            <address className="footer__company-address">
              192 Hoàng Cầu, Hà Nội
            </address>
            <div className="footer__company-contact">
              <div className="footer__contact-item">
                <span className="footer__contact-label">Email:</span>
                <a href="mailto:contact@cohub.vn" className="footer__contact-link">contact@cohub.vn</a>
              </div>
              <div className="footer__contact-group">
                <div className="footer__contact-item">
                  <span className="footer__contact-label">Hotline:</span>
                  <a href="tel:0888888888" className="footer__contact-link">0888888888</a>
                </div>
                <div className="footer__contact-item">
                  <span className="footer__contact-label">Office:</span>
                  <a href="tel:0388888888" className="footer__contact-link">0388888888</a>
                </div>
              </div>
            </div> */}
          </div>
          <div className="footer__copyright">
            Copyright © 2025 CoHub. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
