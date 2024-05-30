import React from "react";
import { Badge, Dropdown, Space } from "antd";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { container } from "./style.module.css";

import Cart from "../cart";
import { useSelector } from "react-redux";

export default function Header() {
  const { cart } = useSelector((state) => state.cart);

  return (
    <header
      style={{
        position: "fixed",
        zIndex: "2",
        width: "100%",
      }}
    >
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

        <Dropdown dropdownRender={() => <Cart />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Badge count={cart.length}>
                <ShoppingCartOutlined
                  style={{ zoom: "2.2", color: "white", cursor: "pointer" }}
                />
              </Badge>
            </Space>
          </a>
        </Dropdown>
      </div>
    </header>
  );
}
