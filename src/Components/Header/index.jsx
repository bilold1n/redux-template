import React from "react";
import { container } from "./style.module.css";
import { Avatar, Badge } from "antd";
import { useSelector } from "react-redux";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  return (
    <header>
      <div className={container}>
        <h2>Logo</h2>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <Link to="/mystore">
            {" "}
            <Badge count={cart.length}>
              <ShoppingCartOutlined
                style={{ zoom: "2.2", color: "white", cursor: "pointer" }}
              />
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  );
}
