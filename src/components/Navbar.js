import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-thumbnail.png'
import cart from '../shopping-cart.png'


class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={ logo } alt="store" className="navbar-brand"/>
                </Link>
                <ul className = "navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                    <button>
                        <img src={ cart } alt="cart" className="fas fa-cart-plus" />
                        My Cart
                    </button>
                </Link>
            </nav>
        );
    }
};

export default Navbar;