import React from "react";
import { CartPageContainer } from "./style";
import Layout from "../../shared/layout/layout";
import Button from "../../shared/button/button";
import banner from "../../../assets/img/banner.png";
import Counter from "../../shared/counter/counter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const cart_products = [
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    },
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    },
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    },
    {
        image: banner,
        name: "Racer T-shirt",
        rating: 5,
        price: "$20.98"
    }
];

const CartPage = () => {
    return (
        <Layout isFooterPresent>
            <CartPageContainer>
                <div className="wrapper">
                    <div className="cart">
                        <div className="cart__header">
                            <h1>Cart</h1>
                        </div>
                        <div className="cart__alert">
                            <div className="first-section">
                                <FontAwesomeIcon icon={faCheck} />
                                <h4>
                                    <span>Coffee T-shirt</span> has been added
                                    to your cart
                                </h4>
                            </div>
                            <div className="second-section">
                                <Button blue_small_text>
                                    Continue Shopping
                                </Button>
                            </div>
                        </div>
                        <table className="cart__table">
                            <thead>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Product</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart_products.map(product => {
                                    const {
                                        image,
                                        name,
                                        rating,
                                        price
                                    } = product;
                                    return (
                                        <tr>
                                            <td className="col-cancel">
                                                <div>
                                                    <FontAwesomeIcon
                                                        icon={faPlus}
                                                    />
                                                </div>
                                            </td>
                                            <td className="col-img">
                                                <img src={image} alt={image} />
                                            </td>
                                            <td className="col-name-size">
                                                <h4>{name}</h4>
                                                <h5>
                                                    Sizes: <span>Large</span>
                                                </h5>
                                            </td>
                                            <td className="col-price">
                                                {price}
                                            </td>
                                            <td className="col-counter">
                                                <Counter />
                                            </td>
                                            <td className="col-total-price">
                                                {price}
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td></td>
                                    <td>
                                        <input
                                            type="text"
                                            placeholder="Coupon Code"
                                        />
                                    </td>
                                    <td>
                                        <Button ash_small_text>
                                            Apply coupon
                                        </Button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td>
                                        <Button ash_small_text>
                                            Update Cart
                                        </Button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </CartPageContainer>
        </Layout>
    );
};

export default CartPage;
