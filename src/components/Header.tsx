import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <a href='/' className="header__brand">
            <img
              src="/images/cohub-logo.svg"
              alt="CoHub Logo"
              className="header__logo-icon"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            <div className="header__nav-item">
              <a href='/' className="header__nav-link">
                <span>Giới thiệu</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#919EAB" />
                </svg>
              </a>
            </div>

            <div className="header__nav-item">
              <a href='/features' className="header__nav-link">
                <span>Giải pháp</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#919EAB" />
                </svg>
              </a>
            </div>

            <div className="header__nav-item">
              <a href='/coaches2' className="header__nav-link">
                <span>Hỗ trợ</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#919EAB" />
                </svg>
              </a>
            </div>

            <div className="header__nav-item">
              <div className="header__nav-link header__nav-link--no-arrow">
                <span>Liên hệ</span>
              </div>
            </div>

            <div className="header__nav-item">
              <div className="header__nav-link header__nav-link--gradient header__nav-link--no-arrow">
                <span>AI Agent</span>
              </div>
            </div>
          </nav>
        </div>

        <div className="header__actions">
          <button
            className="header__button header__button--primary"
            onClick={() => { window.location.href = '/404'; }}
          >
            Tìm kiếm chuyên gia
          </button>
          <button
            className="header__button header__button--secondary"
            onClick={() => { window.location.href = '/404'; }}
          >
            Đăng nhập
          </button>

          {/* Mobile Burger Menu Button */}
          <button
            className="header__burger"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`header__burger-line ${isMobileMenuOpen ? 'header__burger-line--open' : ''}`}></span>
            <span className={`header__burger-line ${isMobileMenuOpen ? 'header__burger-line--open' : ''}`}></span>
            <span className={`header__burger-line ${isMobileMenuOpen ? 'header__burger-line--open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          <a href='/' className="header__mobile-nav-item">
            <span>Giới thiệu</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#919EAB" />
            </svg>
          </a>

          <a href='/features' className="header__mobile-nav-item">
            <span>Giải pháp</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#919EAB" />
            </svg>
          </a>

          <a href='/coaches2' className="header__mobile-nav-item">
            <span>Hỗ trợ</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.9999 13.3333C9.80519 13.3337 9.6165 13.2659 9.46657 13.1417L4.46657 8.97501C4.29639 8.83356 4.18937 8.6303 4.16905 8.40994C4.14874 8.18959 4.21679 7.97019 4.35824 7.80001C4.49969 7.62983 4.70295 7.52281 4.9233 7.50249C5.14366 7.48217 5.36306 7.55022 5.53324 7.69167L9.9999 11.425L14.4666 7.82501C14.5518 7.75578 14.6499 7.70409 14.7552 7.6729C14.8605 7.64171 14.9709 7.63163 15.0801 7.64324C15.1892 7.65486 15.2951 7.68794 15.3914 7.74058C15.4878 7.79323 15.5728 7.8644 15.6416 7.95001C15.7179 8.03569 15.7757 8.13621 15.8113 8.24527C15.847 8.35434 15.8598 8.46959 15.8488 8.58381C15.8379 8.69802 15.8034 8.80875 15.7477 8.90905C15.692 9.00935 15.6161 9.09705 15.5249 9.16667L10.5249 13.1917C10.3707 13.2963 10.1858 13.3461 9.9999 13.3333Z" fill="#919EAB" />
            </svg>
          </a>

          <div className="header__mobile-nav-item header__mobile-nav-item--no-arrow">
            <span>Liên hệ</span>
          </div>

          <div className="header__mobile-nav-item header__mobile-nav-item--gradient header__mobile-nav-item--no-arrow">
            <span>AI Agent</span>
          </div>

          <div className="header__mobile-actions">
            <button
              className="header__button header__button--secondary header__button--mobile"
              onClick={() => { window.location.href = '/404'; }}
            >
              Đăng nhập
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
