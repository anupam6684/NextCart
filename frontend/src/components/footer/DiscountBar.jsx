import { inputBaseClasses } from "@mui/material/InputBase";
import { TextField, Button, Box } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function DiscountBar() {
  return (
    <>
      <div className=" bg-primary mt-5 pt-5 ">
        <div className="container  ">
          <div className="row">
            <div className="col pt-5 ps-3 text-light">
              <p> ₹20 discount for your first order</p>
              <h3>Join our newsletter and get...</h3>
              <p>
                Join our email subscription now to get updates on promotions and
                coupons.
              </p>

              <div className="bg-light my-5">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    overflow: "hidden",
                    maxWidth: "600px",
                  }}
                >
                  <TextField
                    fullWidth
                    placeholder="Your email address"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon sx={{ color: "#9ca3af" }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        height: "50px",
                        borderRadius: 0,
                        "& fieldset": {
                          borderRight: "none",
                        },
                      },
                    }}
                  />

                  <Button
                    variant="contained"
                    sx={{
                      height: "50px",
                      px: 4,
                      borderRadius: 0,
                      backgroundColor: "#1e2f7d",
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#16245f",
                      },
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </div>
            </div>
            <div
              className="col-1
            "
            ></div>
            <div className="col-6 px-5 mt-5">
              <img src="./coupon.png" alt="coupon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
