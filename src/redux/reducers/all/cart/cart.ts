import * as actionTypes from "../../../constants/action_types";
import { cartActionInterface } from "./cartInterface";
const initState = null;

export default (state = initState, action: cartActionInterface) => {
    switch (action.type) {
        case actionTypes.UPDATE_CART:
            const {
                cartProductId,
                productSize,
                productQuantity,
                name,
                image,
                price
            } = action;
            return {
                ...state,
                [cartProductId]: {
                    name,
                    image,
                    price,
                    productSize,
                    productQuantity
                }
            };
        case actionTypes.UPDATE_COUNT:
            const { num, cartProductId: _cartProductId } = action;
            return {
                ...state,
                [_cartProductId]: {
                    ...state,
                    productQuantity: num
                }
            };
        default:
            return state;
    }
};