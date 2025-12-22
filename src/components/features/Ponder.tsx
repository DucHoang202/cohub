import "./feature.scss";
import React, { useRef, useEffect } from "react";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
const Ponder: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const ref3 = useRef<HTMLDivElement | null>(null);
  const ref4 = useRef<HTMLDivElement | null>(null);
  const ref5 = useRef<HTMLDivElement | null>(null);
  const ref6 = useRef<HTMLDivElement | null>(null);
  const ref7 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeouts: number[] = [];

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        [ref1, ref4, ref2, ref5, ref3, ref6, ref7].forEach((ref, i) => {
          const id = window.setTimeout(() => {
            ref.current?.classList.add("is-visible");
          }, i * 300);

          timeouts.push(id);
        });
      } else {
        timeouts.forEach(clearTimeout);
        timeouts.length = 0;

        [ref1, ref2, ref3, ref4, ref5, ref6, ref7].forEach((ref) => {
          ref.current?.classList.remove("is-visible");
        });
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      timeouts.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);


  const MarqueeItem = () => (
    <span className="ponder-section__masonry">
      <span className="text">Start today</span>
      <span className="star-container"></span>
      <span className="text">Keep growing</span>
      <span className="star-container"></span>
      <span className="text">Learn faster</span>
      <span className="star-container"></span>
      <span className="text">Rise higher</span>
      <span className="star-container"></span>
      <span className="text">Push beyond limit</span>
      <span className="star-container"></span>
    </span>
  )
  const data = ["How do I find the right coach?", "I get information overload <br /> with somany online golf tips", "I can get lost and I need help knowing what to work on", "Golf lessons are too expensive", "I can't get help with I need it most.", `I struggle to take my "range" <br /> "game" to the course`]
  let threeLongestSentences = data.sort((a, b) => b.length - a.length).slice(0, 6);
  // let threeLongestSentences = data.slice(0, 3);
  console.log(threeLongestSentences);
  return (
    <section className="ponder-section">
      <div className="ponder-section__container">
        <div className="ponder-section__title">
          Bạn đã cố gắng tự tập luyện chăm chỉ{" "}
          <div className="highlight">nhưng vẫn không hiệu quả?</div>
        </div>

        <div className="ponder-section__subtitle">
          Xem bao nhiêu video trên YouTube cũng không thể giúp bạn tiến bộ.
          Bạn cần một huấn luyện viên thật sự phù hợp, nhưng giữa thị trường hỗn loạn,
          đâu mới là người đáng tin?
        </div>

        <div className="ponder-section__content">
          <div className="opacity-0">

            <div className="ponder-section__grid grid gray b1" dangerouslySetInnerHTML={{ __html: threeLongestSentences[0] }} ref={ref}></div>
            <div className="ponder-section__grid grid yellow b2" dangerouslySetInnerHTML={{ __html: threeLongestSentences[1] }}></div>
            <div className="ponder-section__grid grid yellow b3" dangerouslySetInnerHTML={{ __html: threeLongestSentences[2] }}></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Bubbles */}
            <div className="ponder-section__item gray b1 " ref={ref1}>Tìm kiếm HLV giỏi ở đâu?</div>
            <div className="ponder-section__item yellow b2" ref={ref2}>Tôi không biết ai thực sự <br></br>phù hợp với tôi</div>
            <div className="ponder-section__item yellow b3" ref={ref3}>Chi phí bỏ ra cho HLV không xứng đáng<br></br> với kết quả nhận được</div>
            <div className="ponder-section__item yellow b4" ref={ref4}>Có quá nhiều HLV “lùa gà” trên mạng</div>
            <div className="ponder-section__item gray b5" ref={ref5}>I can't get help with I need it most.</div>
            <div className="ponder-section__item gray b6" ref={ref6}>Tôi bị mất niềm tin vào HLV trên mạng</div>
            {/* Center */}
            <div className="ponder-section__item red center" ref={ref7}>
              Làm thế nào để tôi chơi thực sự tốt hơn?

            </div>

          </motion.div>

        </div>
      </div>

      <Marquee speed={100} gradient={false}>
        {Array(50).fill(0).map((_, i) => (
          <div key={i}>
            <MarqueeItem />
          </div>
        ))}
      </Marquee>


    </section>
  );
};

export default Ponder;
