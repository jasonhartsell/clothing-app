
import { CartItemContainer, CartItemImage, ItemDetails, ItemName } from './cart-item.styles.jsx';

const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <ItemName className='name'>{name}</ItemName>
                <span className='price'>{quantity} * ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
};

export default CartItem;