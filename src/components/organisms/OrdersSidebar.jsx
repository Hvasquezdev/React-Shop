import React from "react";
import "./../../assets/styles/organisms/OrdersSidebar.scss";

import arrowIcon from "./../../assets/icons/flechita.svg";
import BaseCard from "../atoms/BaseCard";
import OrderCard from "../molecules/OrderCard";
import Button from "../atoms/Button";

function OrdersSidebar() {
  return (
    <aside className="order-sidebar">
      <div className="order-sidebar__head">
        <img src={arrowIcon} alt="arrow" className="head-arrow" />
        <p className="head-title">My order</p>
      </div>

      <div className="order-sidebar__content">
        <OrderCard />
        <OrderCard />
        <OrderCard />

        <BaseCard className="order-sidebar__details">
          <p className="total-text">Total</p>
          <p className="total-amount">$560.00</p>
        </BaseCard>

        <Button color="primary">Checkout</Button>
      </div>
    </aside>
  );
}

export default OrdersSidebar;
