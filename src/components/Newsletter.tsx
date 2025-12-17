import React from 'react';

const Newsletter: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">
            Khởi đầu hành trình phát triển của bạn với CoHub
          </h2>
        </div>
        
        <div className="newsletter__form">
          <form onSubmit={handleSubmit} className="newsletter__form-wrapper">
            <div className="newsletter__input-container">
              <div className="newsletter__input-wrapper">
                <input 
                  type="email" 
                  placeholder="Nhập email của bạn" 
                  aria-label="Email" 
                  required 
                  className="newsletter__input"
                />
              </div>
            </div>
            <button type="submit" className="newsletter__button">
              <span className="newsletter__button-text">Nhận thông tin</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
