import React from 'react';
import '../styles/Home.css'

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


            </main>  
        </div>

    );
}

export default Home;