import React from 'react'

const Home =() =>{
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <img src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png" alt="cart"/>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="add-to-cart-outer">
                <div className="add-to-cart-inner">
                    <div className="prod-img">
                        <img src="https://c1.wallpaperflare.com/preview/73/599/584/headphones-music-ear-defender-yellow.jpg" alt="prod-img"/>
                    </div>
                    <p>This is Product 1</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default Home
