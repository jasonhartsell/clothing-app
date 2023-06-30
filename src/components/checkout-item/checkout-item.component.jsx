import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.action';

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
    const dispatch = useDispatch();
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);            

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
