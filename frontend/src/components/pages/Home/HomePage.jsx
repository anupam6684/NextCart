import SliderPage from "./SliderPage";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ProductSlider from "./ProductSlider";
import { useNavigate } from "react-router-dom";
import { products } from "../../../data/products";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <SliderPage />

      <div className="container mt-4">
        <div className="row align-items-start">
          {/* Left banner image */}
          <div className="col-lg-3 col-md-4 mb-3 mb-md-0">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
              alt="product"
              className="img-fluid rounded"
            />
          </div>

          {/* Right content */}
          <div className="col-lg-9 col-md-8">
            {/* Header row */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <h2 className="fw-bold fs-5 mb-1">BEST SELLERS</h2>
                <p className="text-muted mb-0" style={{ fontSize: "12px" }}>
                  Do not miss the current offers until the end of March.
                </p>
              </div>

              <button
                className="btn btn-sm btn-outline-dark rounded-pill d-flex align-items-center gap-2 px-4"
                onClick={() => navigate("/products")}
                style={{ fontSize: "12px" }}
              >
                View All <ArrowRightAltIcon />
              </button>
            </div>

            {/* Product slider */}
            <ProductSlider products={products} />
          </div>
        </div>
      </div>
    </>
  );
}
