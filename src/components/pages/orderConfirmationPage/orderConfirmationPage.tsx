import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import Layout from "../../shared/layout/layout";
import Button from "../../shared/button/button";
import { OrderConfirmationPageContainer } from "./style";
import checkmark from "../../../assets/img/confirm.svg";
import { clearAllStateData } from "../../../redux/actions/clearAll";


import { renderItemTotalPrice, renderTotalPrice } from '../../../utils/index';


const OrderConfirmationPage = ({ location }) => {
    const { cardNumber, expiryDate } = location.state;
    const dispatch = useDispatch();
    const history = useHistory();
    const { cart, deliveryDetails } = useSelector(state => {
        return {
            cart: state.cart,
            deliveryDetails: state.deliveryDetails
        };
    }, shallowEqual);

    const {
        email,
        firstName,
        lastName,
        phoneNumber,
        apartment,
        streetAddress,
        town,
        state,
        country
    } = deliveryDetails;


    const handleReturnToHome = () => {
        dispatch(clearAllStateData());

        history.push("/");
    };

    return (
        <Layout isFooterPresent>
            <OrderConfirmationPageContainer>
                <section className="order-confirmation__header">
                    <img src={checkmark} alt="" />
                    <h2>We received your order</h2>
                    <h4>Order no# 1234567890</h4>
                    <p>
                        A copy of your receipt has been sent to:
                        {email}
                    </p>
                </section>
                <section className="order-confirmation__summary">
                    <h4 className="order-confirmation__summary__header">
                        Order Summary
                    </h4>
                    {!!cart &&
                        Object.values(cart).map((item: any, i) => {
                            const {
                                name,
                                image,
                                price,
                                productSize,
                                productQuantity
                            } = item;
                            return (
                                <div
                                    className="order-confirmation__summary__item"
                                    key={i}
                                >
                                    <div className="left-column">
                                        <img src={image} alt={image} />
                                    </div>
                                    <div className="center-column">
                                        <h4>{name}</h4>
                                        <p>Size: {productSize}</p>
                                        <p>Qty: {productQuantity}</p>
                                    </div>
                                    <div className="right-column">
                                        {
                                            renderItemTotalPrice(
                                                price,
                                                productQuantity
                                            ) as any
                                        }
                                    </div>
                                </div>
                            );
                        })}
                    <div className="order-confirmation__summary__total">
                        <span>Total:</span>
                        <span>{renderTotalPrice(cart) as any}</span>
                    </div>
                </section>
                <section className="order-confirmation__delivery-details">
                    <h4 className="order-confirmation__delivery-details__header">
                        Delivery Details
                    </h4>
                    <div className="order-confirmation__delivery-details__section">
                        <h5>Delivery for</h5>
                        <p>
                            {firstName} {lastName}
                        </p>
                        <p>{phoneNumber}</p>
                    </div>
                    <div className="order-confirmation__delivery-details__section">
                        <h5>Address</h5>
                        <p>
                            {apartment} {streetAddress} {town}{" "}
                        </p>
                        <p>
                            {state} {country}
                        </p>
                    </div>
                    <div className="order-confirmation__delivery-details__section">
                        <h5>Credit Card</h5>
                        <p>Card Number: {cardNumber}</p>
                        <p>Expiry Date: {expiryDate}</p>
                        <p>Amount: {renderTotalPrice(cart) as any}</p>
                    </div>
                </section>
                <div onClick={handleReturnToHome}>
                    <Button blue_small_text>Return to Home</Button>
                </div>
            </OrderConfirmationPageContainer>
        </Layout>
    );
};

export default OrderConfirmationPage;
