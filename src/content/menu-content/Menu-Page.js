import React, { useState, useRef } from 'react';
import { Nav } from '../Nav';
import { menu } from '../Menu';

export function Menu() {
    const bestArr =[];

    for (let i = 0; i < 4; i++) {
        bestArr.push(menu[i]);
    } 

    const bestDeals = () => {
        return (
            bestArr.map(deal => (
                <div className='menu-deal'>
                    <img src={deal.image} className='menu-deal-img'></img>
                    <div className='menu-deal-txt'>
                        <h3 className='menu-deal-h3'>{deal.label}</h3>
                        <p className='menu-deal-p'><span>${deal.smallPrice} </span>-<span> ${deal.largePrice}</span></p>
                    </div>
                </div>
            ))
        )
    }


    let productArray = menu.slice(2, 8);

    // State to store the search value
    const [searchValue, setSearchValue] = useState('');
    
    // Ref to access the input element
    const searchInputRef = useRef(null);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        console.log(value);
    };

    const filteredProducts = productArray.filter(product => 
        product.label.toLowerCase().includes(searchValue)
    );

    const numOfProd = filteredProducts.length;
    console.log(numOfProd)
    
    const menuProducts = () => {
        return (
            filteredProducts.map(product => (
                <div className='menu-product' key={product.id}>
                    <img src={product.image} className='m-p-img'></img>
                    <div className='m-p-viewoptions-wrap'>
                        <div className='viewoptions-btn'>
                            <p>View Options</p>
                        </div>
                    </div>
                    <div className='m-p-txt'>
                        <h2 className='m-p-h2'>{product.label}</h2>
                        <p className='m-p-p'>{product.ingredients}</p>
                    </div>

                    <div className='m-p-select-price'>
                        <div className='m-p-custom-select'>
                            <select className='m-p-select'>
                                <option value="large">Large</option>
                                <option value="medium">Medium</option>
                                <option value="small">Small</option>
                            </select>
                            <span className='c-s-arrow'>
                                <b></b>
                            </span>

                            <span className='m-p-price'>${product.price}</span>
                        </div>
                    </div>
                </div>
            ))
        )
    }

    
    return (
        <>
            <Nav />
            <section id="menu-section">
                <section id="menu-header">
                    <h1 id="menu-h1">Menu</h1>

                    <ol className='nav-bc'>
                        <li className='li-bc'><a href='/'>Home</a></li>
                        <li className='li-bc li-bc-active'>Menu</li>
                    </ol>
                </section>

                <section id="menu-main">
                    <div id="menu-grid">
                        <div id="menu-filter-col">
                            <div id='menu-filter-content'>
                                <div id='menu-search-div'>
                                    <input type='search' id='menu-search' placeholder='Search products...'
                                    value={searchValue}
                                    ref={searchInputRef}
                                    onChange={handleSearch}></input>
                                    <button type='submit' id='menu-search-btn'>O</button>
                                </div>

                                <div id='menu-categories-div'>
                                    <div id='menu-filter-categories'>
                                        <h2 className='menu-col-h2'>Categories</h2>
                                    
                                        <div id='menu-all-categories'>
                                            <div className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox'></input>
                                                    <h3 className='category-h3'>Pizza</h3>
                                                </div>
                                                <p className='category-p'>(3)</p>
                                            </div>

                                            <div className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox'></input>
                                                    <h3 className='category-h3'>Burger</h3>
                                                </div>
                                                <p className='category-p'>(3)</p>
                                            </div>

                                            <div className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox'></input>
                                                    <h3 className='category-h3'>Sandwich</h3>
                                                </div>
                                                <p className='category-p'>(3)</p>
                                            </div>

                                            <div className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox'></input>
                                                    <h3 className='category-h3'>Fries</h3>
                                                </div>
                                                <p className='category-p'>(3)</p>
                                            </div>

                                            <div className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox'></input>
                                                    <h3 className='category-h3'>Drinks</h3>
                                                </div>
                                                <p className='category-p'>(3)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id='menu-filter-price'>
                                    <h2 className='menu-col-h2'>Filter By Price</h2>

                                    <div>

                                    </div>

                                    <div id='filter-btn-txt'>
                                        <button id='menu-filter-btn'>Filter</button>
                                        <p id='menu-filter-p'>Price: 0$ - 40$</p>
                                    </div>
                                </div>

                                <div id='menu-deals-div'>
                                    <h2 className='menu-col-h2'>Today's Best Deals</h2>

                                    {bestDeals()}
                                </div>

                                <img src={require("./menu-images/menu-poster.jpg")} id='menu-poster-img'></img>
                            </div>
                        </div>

                        <div id="menu-products-col">
                            <div id='menu-products-header'>
                                <h3 id='m-p-h3'>Showing all {numOfProd} results</h3>


                            </div>

                            <section id='menu-products-container'>
                                {menuProducts()}
                            </section>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}