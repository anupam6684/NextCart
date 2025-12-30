import { useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppleIcon from "@mui/icons-material/Apple";
import SetMealIcon from "@mui/icons-material/SetMeal";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CookieIcon from "@mui/icons-material/Cookie";
import SpaIcon from "@mui/icons-material/Spa";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

export default function MenuNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeLink, setActiveLink] = useState("HOME");

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const navLinks = [
    { text: "HOME", icon: null },
    { text: "SHOP", icon: null },
    { text: "MEATS & SEAFOOD", icon: <LocalDiningIcon fontSize="small" /> },
    { text: "BAKERY", icon: <BakeryDiningIcon fontSize="small" /> },
    { text: "BEVERAGES", icon: <LocalCafeIcon fontSize="small" /> },
    { text: "BLOG", icon: null },
    { text: "CONTACT", icon: null },
  ];

  return (
    <div
      className="d-flex flex-wrap align-items-center justify-content-between mt-3"
      style={{
        gap: "280px",
      }}
    >
      {/* ---------- LEFT BUTTON ---------- */}
      <div style={{ flexShrink: 0 }}>
        <Button
          variant="contained"
          onClick={handleClick}
          startIcon={<MenuIcon />}
          sx={{
            textTransform: "uppercase",
            borderRadius: "50px",
            fontWeight: 600,
            px: 3,
            py: 1,
            backgroundColor: "#26b7ff",
            fontSize: "0.85rem",
            whiteSpace: "nowrap",
            "&:hover": { backgroundColor: "#0da4eb" },
          }}
        >
          All Categories
        </Button>
      </div>

      {/* ---------- MENU DROPDOWN ---------- */}
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 260,
            borderRadius: "10px",
            mt: 1,
            boxShadow: 3,
          },
        }}
      >
        {[
          { icon: <AppleIcon />, label: "Fruits & Vegetables" },
          { icon: <SetMealIcon />, label: "Meats & Seafood" },
          { icon: <FreeBreakfastIcon />, label: "Breakfast & Dairy" },
          { icon: <LocalCafeIcon />, label: "Beverages" },
          { icon: <BakeryDiningIcon />, label: "Breads & Bakery" },
          { icon: <AcUnitIcon />, label: "Frozen Foods" },
          { icon: <CookieIcon />, label: "Biscuits & Snacks" },
          { icon: <SpaIcon />, label: "Grocery & Staples" },
        ].map((item) => (
          <MenuItem onClick={handleClose} key={item.label}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}

        <Divider />

        {["Value of the Day", "Top 100 Offers", "New Arrivals"].map((text) => (
          <MenuItem onClick={handleClose} key={text}>
            <ListItemText primaryTypographyProps={{ fontWeight: 600 }}>
              {text}
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>

      {/* ---------- NAVIGATION LINKS ---------- */}
      <div
        className="d-flex flex-wrap align-items-center"
        style={{
          gap: "18px",
          flex: 1,
          minWidth: 0,
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {navLinks.map(({ text, icon }) => (
          <a
            key={text}
            onClick={() => setActiveLink(text)}
            style={{
              position: "relative",
              cursor: "pointer",
              fontSize: "0.9rem",
              fontWeight: 600,
              padding: "8px 14px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.2s ease",
              color: activeLink === text ? "#26b7ff" : "#333",
              backgroundColor:
                activeLink === text ? "rgba(38,183,255,0.1)" : "transparent",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#26b7ff";
              e.currentTarget.style.backgroundColor = "rgba(38,183,255,0.1)";
            }}
            onMouseLeave={(e) => {
              if (activeLink !== text) {
                e.currentTarget.style.color = "#333";
                e.currentTarget.style.backgroundColor = "transparent";
              }
            }}
          >
            {icon && icon} {text}
          </a>
        ))}
      </div>
    </div>
  );
}
