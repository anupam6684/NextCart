import { useState } from "react";

function LocationDropDownMenu() {
  const [location, setLocation] = useState("New Delhi"); // default location

  const deliveryAddress = [
    "New Delhi",
    "Mumbai",
    "Bengaluru",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
  ];

  return (
    <div className="dropdown">
      <button
        className="btn border dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <strong>{location}</strong>
        <br />
        <small className="text-muted">Select Your Location</small>
      </button>

      <ul className="dropdown-menu">
        {deliveryAddress.map((loc) => (
          <li key={loc}>
            <button
              className={`dropdown-item ${loc === location ? "active" : ""}`}
              onClick={() => setLocation(loc)}
            >
              {loc}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

function Search() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "700px",
        height: "60px",
        borderRadius: "5px",
        background: "#F3F4F7",
      }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        placeholder="Search for products..."
        inputProps={{ "aria-label": "search products" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export { LocationDropDownMenu, Search };
