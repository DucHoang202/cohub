import React from 'react'
import "../../styles/reset.css"
const FindMore = () => {
    return (
        <div className="find-more">
            <div className="find-more__container">
                <div className="find-more__item" style={{ background: "linear-gradient(14deg, var(--color-grey-16, #2D2E26) 28.58%, var(--color-grey-160, rgba(45, 46, 38, 0.00)) 80.47%),url('/images/Teambuilding.webp')" }}>
                    <div className="title">Find more</div>
                    <div className="subtitle">Whether you’re a beginner trying to learn the basics or training to compete at the
                        highest levels, you’re not on this journey alone. Get a coach who will guide you to
                        your goals.</div>
                    <div className="button">Browse Coaches</div>
                </div>
                <div className="find-more__item" style={{ background: "linear-gradient(14deg, var(--color-grey-16, #2D2E26) 28.58%, var(--color-grey-160, rgba(45, 46, 38, 0.00)) 80.47%),url('/images/Teambuilding.webp')" }}>
                    <div className="title">Find more</div>
                    <div className="subtitle">Whether you’re a beginner trying to learn the basics or training to compete at the
                        highest levels, you’re not on this journey alone. Get a coach who will guide you to
                        your goals.</div>
                    <div className="button">Browse Coaches</div>
                </div>
            </div>
            <div className="find-more__container">
                <div className="find-more__banner">
                    <div className="title">Nếu bạn đã sẵn sàng bứt phá, <br></br><span className='green'>hãy bắt đầu ngay thôi</span></div>
                    <div className="button"> Tìm kiếm huấn luyện viên</div>
                </div>
            </div>
        </div>
    )
}

export default FindMore