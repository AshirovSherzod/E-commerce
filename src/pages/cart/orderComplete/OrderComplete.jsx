import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { deleteAllCart } from "../../../context/slices/cartSlice";

import "./orderComplete.scss";

const OrderComplete = () => {
  const checked = useSelector((state) => state.cart.checked);
  const { data } = useOutletContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const day = new Date().getDate();

  const handleComplete = () => {
    dispatch(deleteAllCart());
    navigate("/");
  };

  useEffect(() => {
    return () => {
      dispatch(deleteAllCart());
      navigate("/");
    };
  }, [dispatch, navigate]);

  useEffect(() => {
    if (!checked) {
      navigate("/cart/checkout");
    }
  }, [checked, navigate]);

  const cards = data.map((product) => (
    <div key={product.id} className="order-complete__cards-img">
      <img src={product.images[0]} alt="" />
      <sub>2</sub>
    </div>
  ));

  return (
    <div className="order-complete">
      <h3>Thank you! 🎉</h3>
      <h1>Your order has been received</h1>
      <div className="order-complete__cards">{cards}</div>
      <div className="order-complete__desc">
        <p>
          <span>Date:</span> {day < 10 ? `0${day}` : day}.
          {month < 10 ? `0${month}` : month}.{year}
        </p>
        <p>
          <span>Total:</span> $123.000
        </p>
        <p>
          <span>Payment Method:</span> Credit Card
        </p>
      </div>
      <button onClick={handleComplete}>checkout</button>
    </div>
  );
};

export default OrderComplete;
