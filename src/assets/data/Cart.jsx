import React from "react";
import "../styles/cart.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container, Col, Row } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import emptyCart from "../assets/images/emptyCart.png";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection titel="Shopping Cart" />
      <section>
        {cartItems.length === 0 ? (
          <Container>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
            >
              <Row>
                <Col lg="3">
                  <div>
                    <img
                      className="w-80 rounded-lg p-4 mx-auto"
                      src={emptyCart}
                      alt="emptyCart"
                    />
                  </div>
                </Col>
                <Col lg="9">
                  <div className="max-w-500 p-4 bg-white flex align-items-center rounded-md shadow-lg">
                    <h1 className="font-titleFont text-xl font-bold uppercase">
                      Your Cart feels lonely.
                    </h1>
                    <p className="text-sm px-10 -mt-2">
                      Your Shopping cart lives to serve. Give it purpose - fill
                      it with books, electronics, videos, etc. and make it
                      happy.
                    </p>
                    <Link to="/shop">
                      <button className="shop__btn">Continue Shopping</button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </motion.div>
          </Container>
        ) : (
          <Container>
            <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          >
            <Row>
              <Col lg="9">
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))}
                  </tbody>
                </table>
              </Col>
              <Col lg="3">
                <div>
                  <h6 className="d-flex align-items-center justify-content-between">
                    Subtotal<span className="fs-4 fw-bold">${totalAmount}</span>
                  </h6>
                </div>
                <p className="fs-6 mt-2">
                  taxes and shipping will be calculated upon checkout
                </p>
                <div>
                  <button className="shop__btn w-100">
                    <Link to="/checkout">Checkout</Link>
                  </button>
                </div>
                <div>
                  <button className="shop__btn w-100 mt-3">
                    <Link to="/shop">Continue Shopping</Link>
                  </button>
                </div>
              </Col>
            </Row>
            </motion.div>
          </Container>
        )}
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.id));
  };

  const increase = () => {
    dispatch(cartActions.increaseQuantity(item.id));
  }

  const decrease = () => {
    dispatch(cartActions.drecreaseQuantity(item.id));
  }
  return (
    <tr>
      <td>
        <img src={item.imgUrl} />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td><span onClick={decrease}> - </span>{item.quantity}<span onClick={increase}> + </span></td>
      <td>
        <i onClick={deleteProduct} class="ri-delete-bin-line" />
      </td>
    </tr>
  );
};

export default Cart;
