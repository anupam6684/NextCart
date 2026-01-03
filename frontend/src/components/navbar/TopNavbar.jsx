import { Link } from "react-router-dom";

export default function TopNavbar() {
  return (
    <>
      {" "}
      <div className="bg-primary ">
        <div className="container text-light  text-center fs-6">
          🎉 Enjoy <strong>Free Shipping</strong> on orders above ₹999 — Shop
          Now!
        </div>
      </div>
      <div className="border-bottom bg-light py-1 pb-1">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left Side - Links */}{" "}
          <div className="d-flex flex-row gap-3">
            <Link to="/about" className="text-decoration-none text-dark small">
              About Us
            </Link>

            <Link to="/auth" className="text-decoration-none text-dark small">
              My Account
            </Link>

            <Link
              to="/wishlist"
              className="text-decoration-none text-dark small"
            >
              Wishlist
            </Link>

            <Link to="/track" className="text-decoration-none text-dark small">
              Order Tracking
            </Link>
          </div>
          {/* Right Side - Info Text */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-muted small px-2 border-end">
              <i className="fa-solid fa-user-shield"></i>
              &nbsp;&nbsp; 100% Secure delivery without contacting the courier
            </div>
            <div className="text-muted small px-2 border-end">
              Need help? Call Us: + 0020 500
            </div>
            <div className="d-flex flex-row gap-3 ">
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Spanish
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      German
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USD
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      INR
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      GBP
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
