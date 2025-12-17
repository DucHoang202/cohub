import React from 'react';

const AIAgent: React.FC = () => {
  const features = [
    {
      title: 'Personalized Match',
      description: '"AI hiểu bạn hơn chính bạn" – gợi ý đúng Coach, đúng kỹ năng, đúng thời điểm.'
    },
    {
      title: '24/7 Smart Support',
      description: 'Luôn có một "assistant" học tập sẵn sàng trả lời, giải thích và gợi ý thêm khi bạn cần.'
    },
    {
      title: 'Progress Intelligence',
      description: 'Không chỉ theo dõi tiến trình. AI dự báo bước tiếp theo và nhắc nhở để bạn không bỏ lỡ mục tiêu.'
    },
    {
      title: "Coach's Co-pilot",
      description: 'Coach không còn tốn công chấm điểm hay ghi chú, AI phân tích dữ liệu học viên và đưa insight tức thì.'
    },
    {
      title: 'Dynamic Content',
      description: 'Khóa học không tĩnh – AI liên tục gợi ý tài liệu, bài tập, video "chuẩn chỉnh" theo phong độ hiện tại của bạn.'
    },
    {
      title: 'Transparent Feedback',
      description: 'Phản hồi công tâm, không thiên vị. AI đưa ra đánh giá dựa trên dữ liệu thực, giúp cả Coach và học viên cùng tiến bộ.'
    }
  ];

  return (
    <section className="ai-agent">
      <div className="ai-agent__container">
        <div className="ai-agent__header">
          <div className="ai-agent__badge">
            <div className="ai-agent__badge-new">NEW</div>
            <span className="ai-agent__badge-text">Nền tảng áp dụng AI hỗ trợ Coaching đầu tiên tại VN</span>
          </div>
          <h2 className="ai-agent__title">AI for the Future of Coaching</h2>
          <p className="ai-agent__description">
            Cohub phát triển AI Agent riêng để cá nhân hóa và tái định hình cách chúng ta học tập, kết nối và phát triển năng lực.
          </p>
        </div>
        
        <div className="ai-agent__features">
          {features.map((feature, index) => (
            <div key={index} className="ai-agent__feature">
              <h3 className="ai-agent__feature-title">{feature.title}</h3>
              <p className="ai-agent__feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgent;
