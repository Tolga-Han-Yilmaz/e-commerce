import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              CORPORATE
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <p>About us</p>
              <p>Press</p>
              <p>Human resources</p>
              <p>News from us</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              SHOPPING
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <p>OrderAnd Payment</p>
              <p>Cancellation and Refund</p>
              <p>Delivery Conditions</p>
              <p>Secure shopping</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              LEGAL
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Membership Agreement</p>
              <p>Distance Selling Contract</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              HELP CENTER
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <p p>FAQ</p>
              <p>Contact center</p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              CONTACT US
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div className="accordion-body">
              <p>Turkey</p>
              <p>123456789</p>
              <p>06thy40@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="corporate col">
          <h4>CORPORATE</h4>
          <p>About us</p>
          <p>Press</p>
          <p>Human resources</p>
          <p>News from us</p>
        </div>
        <div className="shopping col">
          <h4>SHOPPING</h4>
          <p>OrderAnd Payment</p>
          <p>Cancellation and Refund</p>
          <p>Delivery Conditions</p>
          <p>Secure shopping</p>
        </div>
        <div className="legal col">
          <h4>LEGAL</h4>
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Membership Agreement</p>
          <p>Distance Selling Contract</p>
        </div>
        <div className="help col">
          <h4>HELP CENTER</h4>
          <p>FAQ</p>
          <p>Contact center</p>
        </div>
        <div className="contact col">
          <h4>CONTACT US</h4>
          <p>Turkey</p>
          <p>123456789</p>
          <p>06thy40@gmail.com</p>
        </div>
        <div className="footer-icon col">
          <FaFacebookF className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaPinterestP className="icon" />
        </div>
      </div>
      <div className="footer--icon">
        <FaFacebookF className="icon" />
        <FaTwitter className="icon" />
        <FaYoutube className="icon" />
        <FaPinterestP className="icon" />
      </div>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Tolga Han YILMAZ</span>
      </h5>
    </footer>
  );
};

export default Footer;
