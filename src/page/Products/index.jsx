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
export default function Products() {
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
        <Title text={"Mahsulotlar"} />
        <Card.Grid className={grid}>
          {product.length &&
            product.map(({ id, title, images, description, price }) => {
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
                      <Space>
                        <p onClick={success}>
                          {contextHolder}
                          <ShoppingCartOutlined
                            onClick={() => {
                              dispach(
                                addtocart({
                                  id,
                                  title,
                                  images,
                                  description,
                                  price,
                                })
                              );
                            }}
                            className={icon}
                          />
                        </p>
                      </Space>
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
