import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import { useContext } from 'react';
import { ReactComponent as CartIcon } from '../Assets/Icons/CartIcon.svg';

function CartWidget() {
    const [cart] = useContext(CartContext);
    return (
        <Link to={'/cart'}>
            <button className='navbar-button'>
                <div className='cart-widget'>
                    <CartIcon width="30" height="30" stroke="#ffffff" />

                    <Badge pill bg="danger">{cart.quantity}</Badge>
                </div>
                Carrito
            </button>
        </Link>
    );
}

export default CartWidget;