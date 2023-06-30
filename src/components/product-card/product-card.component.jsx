import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import { addItemToCart} from '../../store/cart/cart.action';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, ProductCardImage, Footer, Name, Price } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;
    const cartItems = useSelector(selectCartItems);      
          
    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <ProductCardContainer>
            <ProductCardImage src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name className='name'>{name}</Name>
                <Price className='price'>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={ addProductToCart }>Add to Cart</Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
