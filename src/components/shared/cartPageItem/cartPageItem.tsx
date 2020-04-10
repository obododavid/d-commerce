import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Counter from "../../shared/counter/counter";
import { CartPageItemContainer } from "./style";
import { editItemQuantity } from "../../../redux/actions/cart";

import {
    cartItemInterface,
    cartItemProp
} from "../../../redux/reducers/all/cart/cartInterface";

const CartPageItem: React.FC<cartItemProp> = ({
    item,
    handleDeleteProduct
}) => {
    console.log("cartPageItem renders");
    const dispatch = useDispatch();
    const { name, image, price, productSize, productQuantity } = item[1];
    const [quantity, setQuantity] = useState(productQuantity);
    const cartProductId = item[0];
    const renderItemTotalPrice = (price: any, quantity: any) => {
        const totalPrice = `$${(parseFloat(price.slice(1)) * quantity).toFixed(
            2
        )}`;
        return totalPrice;
    };

    useEffect(() => {
        dispatch(editItemQuantity(cartProductId, quantity));
    }, [quantity]);
    return (
        <CartPageItemContainer>
            <td className="col-cancel">
                <div onClick={() => handleDeleteProduct(cartProductId)}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </td>
            <td className="col-img">
                <img src={image} alt={image} />
            </td>
            <td className="col-name-size">
                <h4>{name}</h4>
                {productSize && (
                    <h5>
                        Sizes: <span>{productSize}</span>
                    </h5>
                )}
            </td>
            <td className="col-price">{price}</td>
            <td className="col-counter">
                <Counter
                    setValue={setQuantity}
                    initialCount={productQuantity}
                />
            </td>
            <td className="col-total-price">
                {renderItemTotalPrice(price, productQuantity) as any}
            </td>
        </CartPageItemContainer>
    );
};

export default CartPageItem;
