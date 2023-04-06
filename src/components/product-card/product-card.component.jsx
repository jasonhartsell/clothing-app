import { useContext } from 'react';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';

import { ProductCardContainer, ProductCardImage, Footer, Name, Price } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

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
