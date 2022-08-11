import React from "react";

const Footer = () => {
  return (
    <div>
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
              <p>FAQ</p>
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
    </div>
  );
};

export default Footer;
