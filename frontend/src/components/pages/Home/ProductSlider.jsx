import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function ProductSlider({ products }) {
  return (
    <div className="product-slider">
      <Swiper
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                px: "25px",
                backgroundColor: "transparent",
              }}
              className="border"
            >
              {/* Image wrapper */}
              <Box
                sx={{
                  position: "relative",
                  "&:hover .hover-actions": {
                    opacity: 1,
                    right: "10px",
                  },
                }}
              >
                {/* Discount badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    backgroundColor: "#dc2626",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 600,
                    px: 1,
                    py: 0.5,
                    borderRadius: "4px",
                    zIndex: 2,
                  }}
                >
                  -%
                </Box>

                {/* Hover icons */}
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
                    size="small"
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      color: "#000",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    <FavoriteBorderIcon fontSize="small" />
                  </Button>

                  <Button
                    size="small"
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      color: "#000",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                    }}
                  >
                    <VisibilityIcon fontSize="small" />
                  </Button>
                </Box>

                {/* Product image */}
                <CardMedia
                  component="img"
                  image={product.img}
                  sx={{
                    height: 200,
                    objectFit: "contain",
                    p: "3px",
                  }}
                />
              </Box>

              {/* Content */}
              <CardContent sx={{ p: "5px" }}>
                <Typography sx={{ fontSize: "12px", fontWeight: 700 }}>
                  {product.title}
                </Typography>

                <Box className="d-flex gap-2 align-items-center">
                  <Typography sx={{ fontWeight: 600, color: "#16a34a" }}>
                    ₹{product.price}
                  </Typography>
                  <Typography
                    sx={{
                      textDecoration: "line-through",
                      color: "#9ca3af",
                    }}
                  >
                    ₹ {product.oldPrice}
                  </Typography>
                </Box>

                <Typography sx={{ fontSize: "14px", color: "#22c55e" }}>
                  {product.stock}
                </Typography>

                <Rating readOnly value={product.rating} />
              </CardContent>

              {/* Action */}
              <CardActions sx={{ p: "12px" }}>
                <button className="btn btn-outline-primary rounded-pill w-100">
                  Add to cart
                </button>
              </CardActions>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
