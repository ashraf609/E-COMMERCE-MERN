import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = ({ history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  return (
    <Fragment>
      <div class="container">
        <div class="navbar">
          <div class="logo">
            <img src="" width="125px" />
          </div>
        </div>
      </div>

      <div class="small-container cart-page">
        <table>
          <tr>
            <th>
              <b>Product</b>
            </th>
            <th>
              <b>Quantity</b>
            </th>
            <th>
              <b>Subtotal</b>
            </th>
          </tr>

          <tr>
            <td>
              <div class="cart-info">
                <img src="https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613766561318-PCLQOXPL8DBGL2XN289L/R0070CEP+V%281%29.gif?format=750w" />
                <div>
                  <h1>Accessoire 1</h1>
                  <h3>Price:</h3>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>

            <td>
              <input type="number" value="1" />
            </td>
            <td>
              <b>1000 MAD</b>
            </td>
          </tr>
          <tr>
            <td>
              <div class="cart-info">
                <img src="https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613757007408-BD34AKFYNQR8AU352ZRX/7P003CLP+V%281%29.gif?format=750w" />
                <div>
                  <h1>Accessoire 4</h1>
                  <h3>Price:</h3>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>

            <td>
              <input type="number" value="3" />
            </td>
            <td>
              <b>1000 MAD</b>
            </td>
          </tr>
          <tr>
            <td>
              <div class="cart-info">
                <img src="https://images.squarespace-cdn.com/content/v1/5c7ee9a09d41492399f3a4b7/1613765926944-EK9M0PPXVSGTT4TDPSJN/R0070CAT+V%281%29.gif?format=750w" />
                <div>
                  <h1>Accessoire 2</h1>
                  <h3>Price:</h3>
                  <br />
                  <a href="">Remove</a>
                </div>
              </div>
            </td>

            <td>
              <input type="number" value="2" />
            </td>
            <td>
              <b>500 MAD</b>
            </td>
          </tr>
        </table>

        <div class="total-price">
          <table>
            <tr>
              <td>
                <b>Subtotal</b>
              </td>
              <td>
                <b>2500 MAD</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Tax</b>
              </td>
              <td>
                <b>10 %</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Total</b>
              </td>
              <td>
                <b>25.000 MAD</b>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
