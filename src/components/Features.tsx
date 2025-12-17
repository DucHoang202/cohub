import React from 'react';

const Features: React.FC = () => {
  return (
    <>
      {/* Feature: Đúng người... */}
      <section className="section">
        <div className="container grid grid-2" style={{alignItems: 'center'}}>
          <figure className="card soft" style={{border: 'none', boxShadow: 'none'}}>
            <img src="https://picsum.photos/seed/right-person/800/480" alt="Kết nối đúng chuyên gia" style={{borderRadius: '20px'}} />
          </figure>
          <div>
            <h2 className="heading-xl">Đúng người, đúng cách, đúng lúc</h2>
            <p className="lead">
              Cohub kết nối bạn với những chuyên gia phù hợp nhất, để học tập và phát triển theo cách phù hợp nhất với chính mình.
            </p>
            <ul className="checklist" style={{margin: '16px 0 0', padding: 0, listStyle: 'none'}}>
              <li><span className="tick"></span> Gặp chuyên gia trực tiếp hoặc online</li>
              <li><span className="tick"></span> Học 1:1, nhóm nhỏ hoặc workshop</li>
              <li><span className="tick"></span> Lựa chọn theo phong cách và mục tiêu</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature: Lộ trình */}
      <section className="section">
        <div className="container grid grid-2" style={{alignItems: 'center'}}>
          <div>
            <h2 className="heading-xl">Quản lý lộ trình học tập hiệu quả</h2>
            <ul className="checklist" style={{margin: '16px 0 0', padding: 0, listStyle: 'none'}}>
              <li><span className="tick"></span> Theo dõi tiến độ theo thời gian thực</li>
              <li><span className="tick"></span> Tự lập kế hoạch phù hợp mục tiêu</li>
              <li><span className="tick"></span> Đánh giá và điều chỉnh lộ trình dễ dàng</li>
            </ul>
          </div>
          <figure className="card soft" style={{border: 'none', boxShadow: 'none'}}>
            <img src="https://picsum.photos/seed/plan/800/800" alt="Quản lý lộ trình" style={{borderRadius: '20px'}} />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Features;
