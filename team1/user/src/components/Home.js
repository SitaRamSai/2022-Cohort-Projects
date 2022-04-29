import React from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom';
import img from '../images/img.png'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './Nav';

const Home = () => {
    return (
        <div className='home'>
            <header className='homeHeader'>
                
                <Nav>
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
                </Nav>

                {/* <nav className='homeNavBar'>
                    <Link to={'/about'}> <a>About</a></Link>
                    <div>|</div>
                    <Link to={'/login'}>Login</Link>
                    <div>|</div>
                    <Link to={'/signup'}><button>Get Started</button></Link>
                </nav> */}
            </header>
            <br/>  
            <main className='homeMain'>
                <div className='subHeader'>
                    <div>
                        <h2>"Always forward,</h2>
                        <br/>
                        <h2>never backward..."</h2>
                    </div>
                    <img src={img} alt='Mr.Bean' />
                </div>
            </main>  
        </div>

    );
}

export default Home;