import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Rating,
  Chip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function ViewProductDetail({ open, onClose, product }) {
  if (!product) return null;

  const discount = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100,
  );

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <div className="container my-4 position-relative">
        <div className="row g-5 align-items-start">
          {/* ===== LEFT IMAGE ===== */}
          <div className="col-md-5 text-center">
            <div className="position-relative">
              {/* discount section */}
              <Chip
                label={`-${discount}% OFF`}
                size="small"
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  bgcolor: "#38bdf8",
                  color: "#fff",
                }}
              />

              <img
                src={product.img}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "380px" }}
              />
            </div>
          </div>

          {/* ===== RIGHT DETAILS ===== */}
          <div className="col-md-7">
            <DialogTitle>
              <h4 className="fw-bold">{product.title}</h4>
            </DialogTitle>

            <IconButton
              onClick={onClose}
              sx={{
                position: "absolute",
                right: 10,
                top: 10,
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Rating */}
            <div className="d-flex align-items-center gap-2 mb-2">
              <Rating value={product.rating} readOnly size="small" />
              <small className="text-muted">
                ({product.rating.count} reviews)
              </small>
            </div>

            <DialogContent>
              {/* Price */}
              <div className="mb-3">
                <span className="text-decoration-line-through text-muted me-2">
                  ₹{product.oldPrice}
                </span>
                <span className="fs-4 fw-bold text-danger">
                  ₹{product.price}
                </span>
              </div>

              {/* Stock */}
              <Chip
                label="IN STOCK"
                size="small"
                sx={{
                  bgcolor: "#dcfce7",
                  color: "#166534",
                  mb: 2,
                }}
              />

              {/* Description */}
              <p className="text-muted">{product.description}</p>

              {/* Add to cart */}
              <div className="d-flex gap-3 my-4">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    px: 4,
                    bgcolor: "#1e40af",
                  }}
                >
                  Add to cart
                </Button>
              </div>

              {/* Wishlist / Compare */}
              <div className="d-flex gap-3 mb-3">
                <Button startIcon={<FavoriteBorderIcon />} variant="outlined">
                  Wishlist
                </Button>
                <Button startIcon={<CompareArrowsIcon />} variant="text">
                  Compare
                </Button>
              </div>

              <hr />

              <small className="text-muted">Category: {product.category}</small>
            </DialogContent>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
