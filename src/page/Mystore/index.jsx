import React, { useEffect, useState } from "react";
import { grid, btn } from "./style.module.css";
import { add } from "../../store/ProductsSlice";
import Title from "../title";
import Link from "antd/es/typography/Link";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../store/cartSlice";
import { Button, message, Space } from "antd";
import { NavLink } from "react-router-dom";
export default function Mystore() {
  const product = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispach = useDispatch();
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((resalt) => {
        dispach(add(resalt));
      });
  }, []);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "The product has been added to the cart",
    });
  };
  return (
    <section>
      <div className="container">
        <Title text={"Savatdagi Mahsulotlar"} />
        <NavLink className={btn} to={"/"}>
          Back to home
        </NavLink>
        <Card.Grid className={grid}>
          {cart.length &&
            cart.map(({ id, title, images, description, price }) => {
              return (
                <Card
                  hoverable
                  key={id}
                  style={{
                    width: 370,
                  }}
                  cover={<img alt="example" src={images[0]} />}
                >
                  <div>
                    <h2>{title}</h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "5px 0",
                        alignItems: "center",
                      }}
                    >
                      <h4>Price: {price}$</h4>
                    </div>
                    <p>
                      {description.split(" ").slice(0, 40).join(" ") + "..."}
                    </p>
                  </div>
                </Card>
              );
            })}
        </Card.Grid>
      </div>
    </section>
  );
}
