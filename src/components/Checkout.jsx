import React from "react";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-cart col">
          <h3>Shopping Cart Summary</h3>
          <div className="cart-img">
            <img
              src="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
              alt=""
            />
            <div className="cart-info">
              <h5>An apple mobile which is nothing like apple</h5>
              <div className="button">
                <button>+</button>
                <span>1</span> <button>-</button>
              </div>
            </div>
          </div>
          <div className="cart-img">
            <img
              src="https://dummyjson.com/image/i/products/2/thumbnail.jpg"
              alt=""
            />
            <div className="cart-info">
              <h5>
                "SIM-Free, Model A19211 6.5-inch Super Retina HD display with
                OLED technology A12 Bionic chip with ..."
              </h5>
              <div className="button">
                <button>+</button>
                <span>1</span> <button>-</button>
              </div>
            </div>
          </div>
          <div className="cart-price">
            <div>
              <p>Subtotal</p>
              <p>1000$</p>
            </div>
            <div>
              <p>Shipping</p>
              <p>900$</p>
            </div>
            <div>
              <h3>Subtotal</h3>
              <h3>1900$</h3>
            </div>
          </div>
        </div>
        <div className="form col">
          <div>
            <label htmlFor="first">First Name*</label>
            <br />
            <input
              type="text"
              id="first"
              placeholder="Enter First Name*"
              required
            />
          </div>
          <div>
            <label htmlFor="last">Last Name*</label>
            <br />
            <input
              type="text"
              id="last"
              placeholder="Enter Last Name*"
              required
            />
          </div>
          <div>
            <label htmlFor="mail">Email Address*</label>
            <br />
            <input
              type="email"
              id="mail"
              placeholder="Enter Email Address*"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number*</label>
            <br />
            <input
              type="number"
              id="phone"
              placeholder="+90(5__)___ __ __"
              required
            />
          </div>
          <div>
            <label htmlFor="city">City*</label>
            <br />
            <select id="city">
              <option value="06">Ankara</option>
              <option value="40">Kırşehir</option>
              <option value="34">İstanbul</option>
              <option value="45">Manisa</option>
            </select>
          </div>
          <div>
            <label htmlFor="address">Address*</label>
            <br />
            <textarea
              id=""
              cols="60"
              rows="10"
              required
              placeholder="Enter neighborhood"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
