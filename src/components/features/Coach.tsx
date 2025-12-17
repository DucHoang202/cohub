import "./feature.scss";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/free-mode";

// 🧩 Coach Data
const coaches = [
  {
    name: "Lê Tuấn Anh",
    role: "Fitness Coach",
    rating: "4.98 (182)",
    students: "887",
    background: "/images/half.jpg"
  },
  {
    name: "Lê Tuấn Anh",
    role: "Fitness Coach",
    rating: "4.98 (182)",
    students: "887",
    background: "/images/half.jpg"
  },
  {
    name: "Lê Tuấn Anh",
    role: "Fitness Coach",
    rating: "4.98 (182)",
    students: "887",
    background: "/images/half.jpg"
  },
  {
    name: "Lê Tuấn Anh",
    role: "Fitness Coach",
    rating: "4.98 (182)",
    students: "887",
    background: "/images/half.jpg"
  },
  {
    name: "Lê Tuấn Anh",
    role: "Fitness Coach",
    rating: "4.98 (182)",
    students: "887",
    background: "/images/half.jpg"
  },
  {
    name: "Lê Tuấn Anh",
    role: "Fitness Coach",
    rating: "4.98 (182)",
    students: "887",
    background: "/images/half.jpg"
  },
  {
    name: "Lê Tuấn Anh",
    role: "Fitness Coach",
    rating: "4.98 (182)",
    students: "887",
    background: "/images/half.jpg"
  },
  {
    name: "Lê Tuấn Anh",
    role: "Fitness Coach",
    rating: "4.98 (182)",
    students: "887",
    background: "/images/half.jpg"
  }
];

const Coach: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isLargeDesktop = useMediaQuery({ minWidth: 1370 });
  const divide = isMobile ? 4 : isTablet ? 4 : isLargeDesktop ? 4 : 4;
  const rows = [];
  for (let i = 0; i < coaches.length; i += divide) {
    rows.push(coaches.slice(i, i + divide));
  }
  return (
    <section className="coach-section">
      <div className="coach-section__container">
        <div className="coach-section__wrapper">
          {/* Header */}
          <div className="coach-section__header">
            <div className="title">Đội ngũ huấn luyện viên xuất sắc</div>

            <div className="search-bar">
              <div className="search">
                <div className="magnifier">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M8.58335 17C12.9556 17 16.5 13.4556 16.5 9.08332C16.5 4.71107 12.9556 1.16666 8.58335 1.16666C4.2111 1.16666 0.666687 4.71107 0.666687 9.08332C0.666687 13.4556 4.2111 17 8.58335 17Z"
                      stroke="black"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div className="small">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="4" viewBox="0 0 3 4" fill="none">
                      <path
                        d="M2.33335 2.83335L0.666687 1.16669"
                        stroke="black"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <input type="text" placeholder="Tìm kiếm huấn luyện viên..." />
              </div>

              <div className="button">
                <div className="text">Xem tất cả</div>
                <div className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <path
                      d="M15.4506 12.6299C15.3386 12.7419 15.1854 12.8126 15.0086 12.8126C14.6669 12.8126 14.384 12.5298 14.384 12.188L14.384 5.65903L7.85506 5.65903C7.51329 5.65903 7.23045 5.37619 7.23045 5.03442C7.23045 4.69266 7.51329 4.40981 7.85506 4.40981L15.0086 4.40981C15.3504 4.40981 15.6332 4.69265 15.6332 5.03442L15.6332 12.188C15.6332 12.3648 15.5625 12.518 15.4506 12.6299Z"
                      fill="white"
                    />
                    <path
                      d="M15.3504 5.57677L5.43325 15.4939C5.19165 15.7355 4.79096 15.7355 4.54936 15.4939C4.30777 15.2523 4.30777 14.8517 4.54936 14.6101L14.4665 4.69289C14.7081 4.45129 15.1088 4.45129 15.3504 4.69289C15.592 4.93448 15.592 5.33518 15.3504 5.57677Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="coach-section__content">
            {rows.map((row, rowIndex) => (
              <Swiper
                key={rowIndex}
                modules={[FreeMode]}
                slidesPerView="auto"
                spaceBetween={20}
                freeMode={{
                  enabled: true,
                  momentum: true,
                  momentumRatio: 0.5,
                  momentumVelocityRatio: 0.5
                }}
                grabCursor={true}
                className="line"
              >
                {row.map((coach, index) => (
                  <SwiperSlide
                    className={`card ${index === row.length - 1 ? "last" : ""}`}
                    key={index}
                    style={{
                      backgroundImage: `url(${coach.background})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "285.438px"
                    }}
                  >
                    <div className="overlay">
                      <div className="title-container">
                        <div className="title">{coach.name}</div>
                        <div className="arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path
                              d="M15.4507 13.1297C15.3387 13.2416 15.1855 13.3124 15.0087 13.3124C14.667 13.3124 14.3841 13.0295 14.3841 12.6877L14.3841 6.15879L7.85518 6.15879C7.51341 6.15879 7.23057 5.87595 7.23057 5.53418C7.23057 5.19241 7.51341 4.90957 7.85518 4.90957L15.0087 4.90957C15.3505 4.90957 15.6334 5.19241 15.6334 5.53418L15.6334 12.6877C15.6334 12.8645 15.5626 13.0177 15.4507 13.1297Z"
                              fill="white"
                            />
                            <path
                              d="M15.3505 6.07653L5.43337 15.9937C5.19177 16.2353 4.79108 16.2353 4.54949 15.9937C4.30789 15.7521 4.30789 15.3514 4.54949 15.1098L14.4667 5.19264C14.7083 4.95105 15.1089 4.95105 15.3505 5.19264C15.5921 5.43424 15.5921 5.83493 15.3505 6.07653Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="role">{coach.role}</div>

                      <div className="row">
                        <div className="item">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                              <path d="M7.69297 12.4247L3.8026 14.7708C3.65773 14.8555 3.51255 14.891 3.36705 14.8776C3.22153 14.8641 3.0898 14.8151 2.97185 14.7305C2.85391 14.6459 2.7629 14.5353 2.6988 14.3987C2.63468 14.2622 2.62442 14.1113 2.66802 13.9459L3.7007 9.52857L0.266098 6.55549C0.137898 6.44396 0.0561724 6.3148 0.0209224 6.16802C-0.0143276 6.02122 -0.00503575 5.87859 0.0487976 5.74014C0.102648 5.60168 0.180214 5.48854 0.281498 5.40072C0.382781 5.3129 0.521239 5.25553 0.696873 5.22862L5.22955 4.83247L6.98915 0.661318C7.05325 0.5062 7.15036 0.391457 7.28047 0.317091C7.41061 0.242741 7.54811 0.205566 7.69297 0.205566C7.83784 0.205566 7.97534 0.242741 8.10547 0.317091C8.23559 0.391457 8.3327 0.5062 8.3968 0.661318L10.1564 4.83247L14.6891 5.22862C14.8647 5.25553 15.0032 5.3129 15.1044 5.40072C15.2057 5.48854 15.2833 5.60168 15.3371 5.74014C15.391 5.87859 15.4003 6.02122 15.365 6.16802C15.3298 6.3148 15.248 6.44396 15.1198 6.55549L11.6852 9.52857L12.7179 13.9459C12.7615 14.1113 12.7513 14.2622 12.6871 14.3987C12.623 14.5353 12.532 14.6459 12.4141 14.7305C12.2961 14.8151 12.1644 14.8641 12.0189 14.8776C11.8734 14.891 11.7282 14.8555 11.5833 14.7708L7.69297 12.4247Z" fill="#F4B43F" />
                            </svg>
                          </div>
                          <div className="number">{coach.rating}</div>
                        </div>

                        <div className="item">
                          <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                              <path d="M17.443 11.7097V5.95964L9.94303 10.043L0.776367 5.04297L9.94303 0.0429688L19.1097 5.04297V11.7097H17.443ZM9.94303 15.043L4.1097 11.8763V7.70964L9.94303 10.8763L15.7764 7.70964V11.8763L9.94303 15.043Z" fill="#F4B43F" />
                            </svg>
                          </div>
                          <div className="space-1px"></div>
                          <div className="number">{coach.students}</div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>))}

          </div>

          {/* Button */}
          <div className="coach-section__button">
            <div className="text">Xem tất cả</div>
            <div className="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13" viewBox="0 0 16 13" fill="none">
                <path d="M1 6.54297H14.5" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 11.543L15 6.54297L10 1.54297" stroke="#090F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;