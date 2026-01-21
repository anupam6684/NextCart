import { products } from "../../../data/products";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ViewProductDetail from "./ViewProductDetail";

export default function AllProduct() {
  const [open, setOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="container my-3">
      {/* ===== Banner Section ===== */}
      <div className="position-relative mb-3">
        <img
          src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg"
          alt="banner"
          className="w-100 rounded "
          style={{ height: "300px", objectFit: "cover" }}
        />

        {/* Overlay text */}
        <div className="position-absolute top-50 start-50 translate-middle text-center ">
          <h2 className="fw-bold">
            Fresh <span className="text-success">Organic</span> Products
          </h2>
          <p className="mb-3">Up to 30% off on all items</p>
          <button className="btn btn-dark btn-sm">Shop Now</button>
        </div>
      </div>

      <div className="row g-0 ">
        {products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 border" key={product.id}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                border: "none",
                paddingX: "25px",
                boxShadow: "none",
                backgroundColor: "transparent",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&:hover .hover-actions": {
                    opacity: 1,
                    right: "10px",
                  },
                }}
              >
                {/* Discount Badge */}
                {product.oldPrice && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      backgroundColor: "#dc2626",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: 600,
                      padding: "4px 8px",
                      borderRadius: "4px",
                      zIndex: 2,
                    }}
                  >
                    -
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100,
                    )}
                    %
                  </Box>
                )}

                {/* Hover Buttons */}
                <Box
                  className="hover-actions"
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: "-40px",
                    transform: "translateY(-50%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    opacity: 0,
                    transition: "0.3s",
                    zIndex: 2,
                  }}
                >
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      minWidth: "36px",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      color: "#000",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                      "&:hover": {
                        backgroundColor: "#ff0c0cff",
                        color: "#fff",
                      },
                    }}
                  >
                    <FavoriteBorderIcon fontSize="small" />
                  </Button>

                  <Button
                    onClick={() => handleOpen(product)}
                    variant="contained"
                    size="small"
                    sx={{
                      minWidth: "36px",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      color: "#000",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                      "&:hover": { backgroundColor: "#16a34a", color: "#fff" },
                    }}
                  >
                    <VisibilityIcon fontSize="small" />
                  </Button>
                </Box>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  image={product.img}
                  alt={product.title}
                  sx={{
                    height: 200,
                    objectFit: "contain",
                    padding: "12px",
                  }}
                />
              </Box>

              <CardContent sx={{ padding: "12px" }}>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 700, marginY: "5px" }}
                >
                  {product.title}
                </Typography>

                {/* Price */}
                <div className="d-flex gap-2 align-items-center">
                  <Typography sx={{ fontWeight: 600, color: "#16a34a" }}>
                    ₹{product.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      textDecoration: "line-through",
                      color: "#9ca3af",
                    }}
                  >
                    ₹{product.oldPrice}
                  </Typography>
                </div>

                {/* Stock */}
                <Typography sx={{ fontSize: "14px", color: "#22c55e" }}>
                  {product.stock}
                </Typography>

                {/* rating */}

                <Rating name="read-only" value={product.rating} readOnly />
              </CardContent>

              <CardActions sx={{ padding: "12px" }}>
                <button className="btn btn-outline-primary rounded-pill w-100 mt-3">
                  Add to cart
                </button>
              </CardActions>
            </Card>
          </div>
        ))}
        <ViewProductDetail
          open={open}
          onClose={handleClose}
          product={selectedProduct}
        />
      </div>
    </div>
  );
}
