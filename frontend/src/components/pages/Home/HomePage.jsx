import ProductSlider from "../Product/ProductSlider";
import SliderPage from "./SliderPage";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { products } from "../../../data/products";

export default function HomePage() {
  let displayData = () => {
    console.log(products);
  };
  return (
    <>
      <SliderPage />

      <div className="container mt-4">
        <div className="row ">
          {/* Left image */}
          <div className="col-md-3">
            <img
              src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg"
              alt="product"
              className="img-fluid"
            />
          </div>
          <div className="col ">
            {/* Middle text */}
            <div>
              <h2 className="fw-bold mb-1">BEST SELLERS</h2>
              {/* Right button */}
              <div className=" d-flex justify-content-end">
                <button
                  className="btn btn-outline-dark rounded-pill d-flex align-items-center gap-2 px-4"
                  onClick={displayData}
                >
                  View All
                  <ArrowRightAltIcon />
                </button>
              </div>
              <p className="text-muted mb-0">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            <ProductSlider />
          </div>
        </div>
      </div>
    </>
  );
}
