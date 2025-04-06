import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import "../styles/Contact.css"; // Adjusted path

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="title">Contact Us</h2>
          <div className="title-underline"></div>
        </div>
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-info-items">
                <div className="contact-item">
                  <Facebook className="icon" />
                  <div>
                    <h3 className="contact-name">Medimarc Trading</h3>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone className="icon" />
                  <div>
                    <h3 className="contact-name">63+ 917 863 7544</h3>
                    <p className="contact-detail">Arnold M. Castillo</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Mail className="icon" />
                  <div>
                    <h3 className="contact-name">medimarc.mrc@gmail.com</h3>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="icon" />
                  <div>
                    <h3 className="contact-name">Unit 303 M-Place Bldg.</h3>
                    <p className="contact-detail">
                      No. 96 Maginhawa St., Teachers Village, Quezon City
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Message */}
            <div className="contact-message">
              <h3 className="message-title">
                Get in Touch with Medimarc Trading
              </h3>
              <p className="message-description">
                For inquiries, product details, or partnership opportunities,
                feel free to contact us. Reach out via phone, email, or Facebook
                for prompt assistance from our team. We're here to support your
                healthcare supply needs and answer any questions about our
                products and services. Connect with us today to explore how
                Medimarc Trading can help you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
