import React from "react";
import Listitem from "./Listitem";
import "./Cart.css";
const CartItem = () => {
  return (
    <>
      <div className="Cart-container">
        {/* button part */}
        <div className="Privous-button">
          <button type="button" class="btn btn-outline-danger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
              style={{ marginRight: "10px" }}
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              ></path>
            </svg>
            Go to privous page
          </button>
        </div>

        <div className="location-w-item">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                deliver to 36001 Rajkot,...
              </a>
              <ul class="dropdown-menu dropdown-menu">
                <div className="list-item"></div>
                <li>
                  <a class="dropdown-item" href="#"></a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <p className="p1">My Cart: 2 Item</p>
        </div>

        {/* list item part */}
        <Listitem></Listitem>
        <div className="cart-footer">
          <p>Paybal Amount: ₹350</p>
          <div className="checkout">
            <button className="checkoutbtn">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
