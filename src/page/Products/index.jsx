import React, { useEffect, useState } from "react";
import { grid, icon } from "./style.module.css";
import { add } from "../../store/ProductsSlice";
import Title from "../title";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../../store/cartSlice";
import { Button, message, Space } from "antd";
import DisabledContext from "antd/es/config-provider/DisabledContext";
import { ColorFormat } from "antd/es/color-picker/interface";
import Productitem from "../producyicon";
export default function Products() {
  const { product } = useSelector((state) => state.products);
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

  return (
    <section>
      <div className="container">
        <Title text={"Mahsulotlar"} />
        <Card.Grid className={grid}>
          {product.length &&
            product.map((item) => {
              return <Productitem key={item.id} data={item} />;
            })}
        </Card.Grid>
      </div>
    </section>
  );
}
