import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { number: '1,500+', description: 'Học viên đã tham gia buổi coaching & workshop trải nghiệm' },
    { number: '100+', description: 'Coach & Mentor từ nhiều lĩnh vực đã onboard cùng Cohub' },
    { number: '95%', description: 'Người dùng đánh giá tích cực sau buổi coaching đầu tiên' }
  ];

  return (
    <section className="section-tight">
      <div className="container">
        <div className="stats">
          <div className="stats__container">
            <div className="stats__intro">
              <h3 className="stats__heading">
               Hành trình CoHub <br /> qua những con số ấn tượng
              </h3>
            </div>
            <div className="stats__metrics">
              {stats.map((stat, index) => (
                <div key={index} className="stats__item">
                  <div className="stats__card">
                    <div className="stats__number">{stat.number}</div>
                    <div className="stats__description">{stat.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
