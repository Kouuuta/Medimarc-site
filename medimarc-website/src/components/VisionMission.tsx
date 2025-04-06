import { useEffect, useState, useRef } from "react";
import "../styles/VisionMission.css"; // Importing the CSS file

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState({
    mission: false,
    vision: false,
  });
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };
    const missionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            mission: true,
          }));
          missionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const visionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({
            ...prev,
            vision: true,
          }));
          visionObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (missionRef.current) missionObserver.observe(missionRef.current);
    if (visionRef.current) visionObserver.observe(visionRef.current);

    return () => {
      if (missionRef.current) missionObserver.unobserve(missionRef.current);
      if (visionRef.current) visionObserver.unobserve(visionRef.current);
    };
  }, []);

  return (
    <div className="vision-mission-container">
      {/* Mission Section */}
      <div
        ref={missionRef}
        className={`section ${isVisible.mission ? "visible" : ""}`}
      >
        <div className="section-left">
          <h2>Our Mission</h2>
          <div className="underline"></div>
          <p>
            Our mission is to enhance the quality of work for our clients and
            partners by providing exceptional service, cutting-edge products,
            and innovative solutions. We are dedicated to improving the lives of
            patients through our commitment to excellence in all aspects of
            healthcare. With a focus on delivering impactful solutions, we seek
            to make a positive difference in the healthcare industry, empowering
            healthcare professionals, and improving patient outcomes. Our goal
            is to foster long-term relationships built on trust, reliability,
            and the continuous improvement of healthcare standards worldwide.
          </p>
        </div>
        <div className="section-right2">
          {" "}
          {/* Changed className to section-right2 */}
          <img
            src="https://www.nextecgroup.com/wp-content/uploads/2021/08/iStock-1267162531-scaled.jpg"
            alt="Scientists in laboratory"
          />
        </div>
      </div>

      <div
        ref={visionRef}
        className={`section ${isVisible.vision ? "visible" : ""}`}
      >
        <div className="section-left">
          <h2>Our Vision</h2>
          <div className="underline"></div>
          <p>
            Our vision is to become a global leader in healthcare, offering
            exceptional service, product innovation, and advanced technologies
            that improve the quality of work for our clients and partners. By
            delivering high-quality, reliable solutions, we strive to enhance
            the quality of life for patients, providing them with the best care
            possible. Through continuous growth, innovation, and collaboration,
            we aim to create a healthier future for individuals and communities
            worldwide.
          </p>
        </div>
        <div className="section-right">
          {" "}
          {/* Keeping section-right class for this one */}
          <img
            src="https://www.floridatoday.com/gcdn/-mm-/88059d553bda2d43ab07f80a8e315b1f28f0946d/c=0-612-5939-3953/local/-/media/2022/08/20/USATODAY/usatsports/elderly-woman-with-younger-doctor.jpg"
            alt="Healthcare professionals meeting"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
