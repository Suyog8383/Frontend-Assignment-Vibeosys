import React from "react";
import { useNavigate } from "react-router";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <button onClick={() => navigate("/")}>Product List</button>
      </div>
      <div>
        <button onClick={() => navigate("/add")}>Add Product</button>
      </div>
    </div>
  );
}

export default NavBar;
