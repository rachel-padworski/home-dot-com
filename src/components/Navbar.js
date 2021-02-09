import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-thumbnail.png';
import cart from '../shopping-cart.png';
import { ButtonContainer} from './Button';
import styled from 'styled-components';

class Navbar extends React.Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
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
                    <ButtonContainer>
                        <span className="mr-2">
                            <img src={ cart } alt="cart" className="fas fa-cart-plus" />
                        </span>
                        My Cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
};

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite)!important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;


export default Navbar;