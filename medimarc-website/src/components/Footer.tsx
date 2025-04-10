import { Phone, MapPin, Mail } from "lucide-react";
import "../styles/Footer.css"; // Adjusted path

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div>
            <h3 className="footer-logo">
              <span className="footer-logo-text">MEDIMARC</span>
            </h3>
            <p className="footer-description">
              Delivering essential healthcare supplies to our valued customers
              since 2020. Give us a call or an email.
            </p>
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.facebook.com/medimarctrading"
                className="social-icon facebook"
              >
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://shopee.ph/medimarc"
                className="social-icon shopee"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-shopee"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l.867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2 -1.857l.867 -12.143h-16z" />
                  <path d="M8.5 7c0 -1.653 1.5 -4 3.5 -4s3.5 2.347 3.5 4" />
                  <path d="M9.5 17c.413 .462 1 1 2.5 1s2.5 -.897 2.5 -2s-1 -1.5 -2.5 -2s-2 -1.47 -2 -2c0 -1.104 1 -2 2 -2s1.5 0 2.5 1" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@medimarc.trading"
                className="social-icon tiktok"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-tiktok"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact">
              <a href="https://www.google.com/maps/place/96+Maginhawa,+Diliman,+Lungsod+Quezon,+1101+Kalakhang+Maynila/@14.6462724,121.0595875,3a,90y,213.97h,95.01t/data=!3m7!1e1!3m5!1s4gHXprIrPEEyEtiTNhEpiQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-5.011025688878405%26panoid%3D4gHXprIrPEEyEtiTNhEpiQ%26yaw%3D213.97461207332043!7i16384!8i8192!4m15!1m8!3m7!1s0x3397b77381800257:0xba61bc9ea698eb59!2s96+Maginhawa,+Diliman,+Lungsod+Quezon,+1101+Kalakhang+Maynila!3b1!8m2!3d14.6461479!4d121.0595174!16s%2Fg%2F11kqgs9q7_!3m5!1s0x3397b77381800257:0xba61bc9ea698eb59!8m2!3d14.6461479!4d121.0595174!16s%2Fg%2F11kqgs9q7_?entry=ttu&g_ep=EgoyMDI1MDQwOC4wIKXMDSoASAFQAw%3D%3D">
                <li className="contact-item">
                  <MapPin className="contact-icon" />
                  <span className="contact-text">
                    Unit 303 M-Place Bldg, No. 96 Maginhawa, <br />
                    St. Teachers Village, Quezon City
                  </span>
                </li>
              </a>
              <a href="tel:+639178637544">
                <li className="contact-item">
                  <Phone className="contact-icon" />
                  <span className="contact-text">+63 917 863 7544</span>
                </li>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
                <li className="contact-item">
                  <Mail className="contact-icon" />
                  <span className="contact-text">medimarc.mrc@gmail.com</span>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            All information, pictures and images on this site are copyrighted
            material and owned by their respective creators or owners.
          </p>
          <p>
            © {new Date().getFullYear()} Medimarc Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
