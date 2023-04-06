import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  ItemName,
  ItemQuantity,
  ItemPrice,
  RemoveButton,
  ItemArrow,
  ItemValue
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, clearItemFromCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const addItemHandler = () => addItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <ItemName>{name}</ItemName>
            <ItemQuantity>
                <ItemArrow onClick={ removeItemHandler }>&#10094;</ItemArrow>
                <ItemValue>{quantity}</ItemValue>
                <ItemArrow onClick={ addItemHandler }>&#10095;</ItemArrow>
            </ItemQuantity>
            <ItemPrice>{price}</ItemPrice>
            <RemoveButton onClick={ clearItemHandler }>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;
