import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { item, card, list, countitem } from "./style.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteitem } from "../../store/cartSlice";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const dispach = useDispatch();
  if (cart?.length === 0) {
    return;
  }

  return (
    <div className={card}>
      <ul className={list}>
        {cart.length &&
          cart.map(({ id, images, title, description, price, count }) => {
            return (
              <li key={id} className={item}>
                <img src={images[0]} alt="" width={50} height={50} />
                <h2>{title}</h2>
                <p className={countitem}>{count}</p>
                <button
                  style={{ border: "none", background: "#fff" }}
                  onClick={() => dispach(deleteitem(id))}
                >
                  <DeleteOutlined
                    style={{ color: "red", cursor: "pointer", zoom: "1.7" }}
                  />
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
