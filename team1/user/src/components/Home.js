import React from 'react';
import '../styles/Home.css'
import img from '../images/img.png'

const Home = () => {
    return (
        <div className='home'>
            <header className='homeHeader'>
                <div className='homeTitle'>
                    <h1>
                        funBlog
                    </h1>
                </div>
                <nav className='homeNavBar'>
                    <ul>
                        <li>Home</li>
                        <div>|</div>
                        <li>About</li>
                        <div>|</div>
                        <li>Login</li>
                        <div>|</div>
                        <button>Get Started</button>
                    </ul>
                </nav>
            </header>
            <br/>  
            <main className='homeMain'>
                <div className='subHeader'>
                    <div>
                        <h2>Always forward,</h2>
                        <br/>
                        <h2>never backward...</h2>
                    </div>
                    <img src={img} alt='Mr.Bean' />
                </div>

            </main>  
        </div>

    );
}

export default Home;