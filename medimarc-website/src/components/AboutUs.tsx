import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/AboutUs.css"; // Adjusted path
import VisionMission from "../components/VisionMission";

const tabs = [
  {
    id: "history",
    label: "History",
    content: (
      <div className="aboutus-content">
        <p className="aboutus-description">
          Established by Arnold M. Castillo, the single proprietor company
          initially retailed medical consumable products from his former
          employers where trust were gained in the course of his employment as
          Sales Manager at Lifelink, Inc. The joining of his spouse, Mirriam R.
          Castillo, in the year 2020 and in the summit of Covid-19 pandemic,
          still opens new opportunities for marketing new products and sales
          development.
        </p>
        <div className="aboutus-highlight">
          <p className="highlight-text">
            <span className="highlight-title">MEDIMARC TRADING</span>, with
            business office situated in Quezon City, provides a wide range of
            quality and cost-effective hospital supplies since its establishment
            in 2013 as wholesaler of medical devices.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "first-sale",
    label: "First Sale",
    content: (
      <div className="aboutus-content">
        <p className="aboutus-description">
          October 2022, in the establishment of the first Nipro Medical
          Corporation’s sales subsidiary in the Philippines, Medimarc Trading
          was appointed by Nipro Medical Corporation as one of the authorized
          distributors for Hospital Care Products in Metro Manila and with
          exclusive distributorship agreement for Southern Luzon and Bambang
          Area.
        </p>
        <div className="aboutus-highlight">
          <p className="highlight-text">
            <span className="highlight-title">MEDIMARC TRADING</span>, with
            business office situated in Quezon City, provides a wide range of
            quality and cost-effective hospital supplies since its establishment
            in 2013 as wholesaler of medical devices.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "clients",
    label: "Clients",
    content: (
      <div className="aboutus-content">
        <p className="aboutus-description">
          St Luke’s Medical Center- Quezon City and Global City, Makati Medical
          Center , FEU-NRMF Medical Center , The Medical City, Cardinal Santos
          Medical Center , UERM Memorial Medical Center , Chinese General
          Hospital
        </p>
        <div className="aboutus-highlight">
          <p className="highlight-text">
            <span className="highlight-title">MEDIMARC TRADING</span>, with
            business office situated in Quezon City, provides a wide range of
            quality and cost-effective hospital supplies since its establishment
            in 2013 as wholesaler of medical devices.
          </p>
        </div>
      </div>
    ),
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [activeTab, setActiveTab] = useState("history");
  return (
    <section className="aboutus-section">
      <div className="aboutus-container" data-aos="fade-up">
        <div className="aboutus-header">
          <h2 className="aboutus-title" data-aos="fade-up">
            About Us
          </h2>
          <div
            className="aboutus-title-underline"
            data-aos="fade-up"
            data-aos-delay="100"
          ></div>
        </div>
        <div className="aboutus-card">
          <div
            className="tabs-container"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="tab-content" data-aos="fade-up">
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </div>
        </div>
        <VisionMission />
      </div>
    </section>
  );
};

export default AboutUs;
