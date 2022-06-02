import React from 'react';
import {
    NavBar,
    Bars,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavContainer
} from './NavStyles';

const Nav = () => {

    return (
        <NavBar>
            <NavContainer>
                <NavLink to='/'>
                    <h1>funBlog</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                <NavLink to='/about' activeStyle>
                    About
                </NavLink>
                <NavLink to='/signup' activeStyle>
                    Signup
                </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/login'>Login</NavBtnLink>
                </NavBtn>
            </NavContainer>
        </NavBar>
    );
}

export default Nav;


