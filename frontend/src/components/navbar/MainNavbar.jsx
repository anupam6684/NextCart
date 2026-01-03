import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // 👤 MUI User Icon
import { LocationDropDownMenu, Search } from "./Dropdown";
import MenuNavbar from "./MenuNavbar";
import { useNavigate } from "react-router-dom";

export default function MainNavbar() {
  const [cartBalance, setCartBalance] = useState(0.0);
  const [itemCount, setItemCount] = useState(0);
  return (
    <>
      <div className="border-bottom py-2 bg-white">
        {/* ---------- TOP NAVBAR SECTION ---------- */}
        <div className="container">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
            {/* logo Section */}
            <div className="logo-container pe-3">
              <img
                src="/logo.png"
                alt="NextCart-logo"
                style={{ width: "150px", height: "auto", objectFit: "contain" }}
              />
            </div>

            {/* Location Dropdown  */}
            <LocationDropDownMenu />
            {/*  Search Bar */}
            <Search />

            {/* ✅ User & Cart Section */}
            <div className="d-flex align-items-center gap-4">
              {/* User Icon */}
              <div
                className="border rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                }}
              >
                <button onClick={() => navigate(`/auth`)}>
                  <AccountCircleIcon sx={{ fontSize: 30, color: "#333" }} />
                </button>
              </div>

              {/* Cart Balance */}
              <div className="fw-bold text-success">
                ${cartBalance.toFixed(2)}
              </div>

              {/* Cart Icon with Badge */}
              <div
                className="border rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  height: "50px",
                  width: "50px",
                  cursor: "pointer",
                }}
              >
                <Badge badgeContent={itemCount} color="error" showZero>
                  <ShoppingCartIcon sx={{ fontSize: 28, color: "#e63946" }} />
                </Badge>
              </div>
            </div>
          </div>
          {/* ---------- CATEGORIES DROPDOWN SECTION ---------- */}
          <div className="d-flex align-items-center mt-3 ">
            <MenuNavbar />
          </div>
        </div>
      </div>
    </>
  );
}
