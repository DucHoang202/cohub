import React, { useEffect, useRef } from 'react';

const Experts: React.FC = () => {
  const experts = [
    { name: 'Nguyễn Văn Huy', title: 'CEO / Founder, CoHub', image: '/images/nguyen-van-huy.svg' },
    { name: 'Trần Thị Mai', title: 'HR Director, ABC Bank', image: '/images/tran-thi-mai.svg' },
    { name: 'Lê Minh Hoàng', title: 'Senior AI Engineer', image: '/images/le-minh-hoang.svg' },
    { name: 'Phạm Thị Linh', title: 'Product Designer', image: '/images/pham-thi-linh.svg' },
    { name: 'Võ Quốc Đạt', title: 'Marketing Lead', image: '/images/vo-quoc-dat.svg' },
    { name: 'Hoàng Thị Hạnh', title: 'Growth Manager', image: '/images/hoang-thi-hanh.svg' },
    { name: 'Bùi Văn Long', title: 'Tech Advisor', image: '/images/bui-van-long.svg' },
    { name: 'Đỗ Thị Phương', title: 'Wellness Coach', image: '/images/do-thi-phuong.svg' },
    { name: 'Phan Tuấn Kiệt', title: 'Sports Strategist', image: '/images/phan-tuan-kiet.svg' },
    { name: 'Nguyễn Thị An', title: 'Community Manager', image: '/images/nguyen-thi-an.svg' }
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate animation speed (10% faster than previous 54s)
    const baseSpeed = 0.5; // pixels per frame (increased from ~0.45)
    let animationId: number;
    let translateX = 0;

    // Get the width of a single set of cards (including gaps)
    const cardWidth = 184 + 22; // card width + gap
    const singleSetWidth = experts.length * cardWidth;

    const animate = () => {
      if (!isHoveredRef.current) {
        translateX -= baseSpeed;
        
        // Reset position seamlessly when we've moved one full set
        if (Math.abs(translateX) >= singleSetWidth) {
          translateX = 0;
        }

        container.style.transform = `translateX(${translateX}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [experts.length]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  // Triple the array for seamless infinite loop
  const tripleExperts = [...experts, ...experts, ...experts];

  return (
    <section className="experts">
      {/* Background blur effects */}
      <div className="experts__background-blur experts__background-blur--right"></div>
      <div className="experts__background-blur experts__background-blur--left"></div>
      
      <div className="experts__container">
        <div className="experts__title-container">
          <h2 className="experts__title">
            Đồng hành 1:1 cùng các chuyên gia hàng đầu
          </h2>
        </div>
      </div>
      
      <div className="experts__slider">
        <div className="experts__track">
          <div 
            className="experts__cards-container"
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {tripleExperts.map((expert, index) => (
              <div key={index} className="experts__card">
                <div className="experts__card-content">
                  <div className="experts__image-container">
                    <img 
                      src={expert.image} 
                      alt={expert.name}
                      className="experts__image"
                    />
                  </div>
                  <div className="experts__info">
                    <div className="experts__name-container">
                      <div className="experts__name">
                        {expert.name}
                      </div>
                    </div>
                    <div className="experts__title-role-container">
                      <div className="experts__title-role">
                        {expert.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experts;
