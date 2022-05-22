import React from 'react';
import {
    NavBar,
    Bars,
    NavLink,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavStyles';

const Nav = () => {

    return (
        <NavBar>
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
        </NavBar>
    );
}

export default Nav;


