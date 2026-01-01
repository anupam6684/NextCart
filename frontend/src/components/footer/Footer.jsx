import DiscountBar from "./DiscountBar";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <>
      <DiscountBar />

      {/* this is topFooter part-1*/}
      <div style={{ backgroundColor: "#f7f8fd" }}>
        <div className="container  p-5 border-bottom">
          {/* iconsBox*/}
          <div className="row">
            <div className="col col-12 col-md-6 col-lg-3  border-end">
              <span>
                {" "}
                <ProductionQuantityLimitsIcon /> &nbsp; &nbsp; Everyday fresh
                products
              </span>
            </div>
            <div className="col col-12 col-md-6 col-lg-3 ps-5 border-end">
              <span>
                {" "}
                <i class="fa-regular fa-truck"></i> &nbsp;Free delivery for
                order over ₹70
              </span>
            </div>
            <div className="col col-12 col-md-6 col-lg-3 ps-5 border-end">
              <span>
                <i class="fa-solid fa-tag"></i>&nbsp;&nbsp;Daily Mega Discounts
              </span>
            </div>
            <div
              className="col col-12 col-md-6 col-lg-3  ps-5
          "
            >
              <span>
                {" "}
                <i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;&nbsp; Best
                price on the market
              </span>
            </div>
          </div>
        </div>

        {/* this is 2nd part of footer  */}

        <div className="container my-5 py-5">
          <div className="row g-2">
            <div className="col-6 col-sm-4 col-md d-flex flex-column mb-3 text-center">
              <h5>FRUIT & VEGETABLES</h5>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
            </div>
            <div className="col-6 col-sm-4 col-md d-flex flex-column  mb-3 text-center">
              <h5>FRUIT & VEGETABLES</h5>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
            </div>
            <div className="col-6 col-sm-4 col-md d-flex flex-column mb-3 text-center">
              <h5>FRUIT & VEGETABLES</h5>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
            </div>
            <div className="col-6 col-sm-4 col-md d-flex flex-column mb-3 text-center">
              <h5>FRUIT & VEGETABLES</h5>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
            </div>
            <div className="col-6 col-sm-4 col-md d-flex flex-column mb-3 text-center">
              <h5>FRUIT & VEGETABLES</h5>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
              <a href="#">Fresh Vegetables</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer part -3 */}
      <div className="container my-5 py-5 border-bottom">
        <div className="row">
          <div className=" col col-12 col-md-6 ">
            <h1>
              <PhoneIcon fontSize="inherit" /> +91 9999999999
            </h1>
            <div className="ms-5 ps-3"> Working 8:00 - 22:00</div>
          </div>
          <div className=" col col-12 col-md-6 d-flex ">
            <div>
              <span className="fw-bold ">Download App on Mobile :</span>
              <p className="fs-6 fw-lighter">
                15% discount on your first purchase
              </p>
            </div>
            <div className="ms-3 d-flex gap-3 justify-content-md-start justify-content-center">
              <img
                src="google-play.png"
                alt="google play"
                style={{ height: "45px" }}
              />
              <img
                src="app-store.png"
                alt="app store"
                style={{ height: "45px" }}
              />
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Footer part -last */}
      <div className="container">
        <div className="row">
          <div className="col">
            <p style={{ color: "#9B9BB4" }}>
              Copyright 2026 © NextCart WordPress Theme. All rights reserved.
              made by Anupam.
            </p>
          </div>
          <div className="col-6 d-flex gap-2">
            <p style={{ color: "#9B9BB4" }}>
              <a href="#"> Privacy Policy </a>&nbsp;&nbsp;
              <a href="#">Terms and Conditions </a>&nbsp;&nbsp;
              <a href="#"> Cookie</a>
            </p>
            <img src="payments.png" alt="" style={{ height: "25px" }} />
          </div>
        </div>
      </div>
    </>
  );
}
