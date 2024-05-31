import React from "react";
import { icon, btn } from "./style.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addtocart,
  decrement,
  deleteitem,
  increment,
} from "../../store/cartSlice";
import { message } from "antd";

export default function Productitem({
  data: { id, title, images, price, description },
}) {
  const dispach = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const index = cart.findIndex((item) => item.id === id);
  console.log(cart);
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "The product has been added to the cart",
    });
  };
  return (
    <Card
      hoverable
      key={id}
      style={{
        width: 370,
        overflow: "hidden",
      }}
      cover={
        <img
          alt="example"
          src={images.length > 1 ? images[0] : JSON.parse(images[0])}
        />
      }
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
              {index == -1 ? (
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
              ) : (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <button
                    className={btn}
                    onClick={() => {
                      if (cart[index].count === 1) {
                        return dispach(deleteitem(id));
                      }

                      dispach(decrement(id));
                    }}
                  >
                    -
                  </button>
                  <p>{cart[index].count}</p>
                  <button
                    className={btn}
                    onClick={() => dispach(increment(id))}
                  >
                    +
                  </button>
                </div>
              )}
            </p>
          </Space>
        </div>
        <p>{description.split(" ").slice(0, 40).join(" ") + "..."}</p>
      </div>
    </Card>
  );
}
