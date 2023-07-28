import { useDispatch } from 'react-redux';

import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.reducer';

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

    const addItemHandler = () => dispatch(addItemToCart(cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItem));

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
