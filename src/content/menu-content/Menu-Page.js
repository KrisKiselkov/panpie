import React, { useState, useRef, useEffect } from 'react';
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
    
    
    let productArray = menu;
    
    // States
    const [searchValue, setSearchValue] = useState(''); //State to track the search value
    const [prodArr, setProdArr] = useState(productArray); //State to track the array of products
    const [category, setCategory] = useState({
        pizza: false,
        burger: false,
        sandwich: false,
        fries: false,
        drinks: false
    }); //State to track the active category
    const [productPrices, setProductPrices] = useState(
        productArray.reduce((acc, product) => {
            acc[product.id] = product.price; // default to medium price
            return acc;
        }, {})
    );
    
    // Ref to access the input element (Look over this again)
    const searchInputRef = useRef(null);

    // function for tracking the search input value
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    };

    // function to track the active category
    const handleCategory = (categoryName, isChecked) => {
        setCategory(prevState => ({
            ...prevState,
            [categoryName]: isChecked,
        }));
    };

    // useEffect hook to update the products array according to the filters
    useEffect(() => {
        const filteredProducts = 
            productArray.filter(product => {
                const matchSearch = product.label.toLowerCase().includes(searchValue);
                const matchCategory = Object.keys(category).some((cat) => 
                    category[cat] && product.type === cat
                );
                return matchSearch && (matchCategory || !Object.values(category).includes(true)); // Both conditions must be true
            });
        
        setProdArr(filteredProducts); // updating the array
    }, [searchValue, category]); // Ensure effect runs when searchValue or productArray changes

    const numOfProd = prodArr.length; // tracking the number of products in the array 

    const handlePrice = (product, priceSelect) => {
        let newPrice;
        if (priceSelect === 'large') {
            newPrice = product.largePrice;
        } else if (priceSelect === 'medium') {
            newPrice = product.price;
        } else {
            newPrice = product.smallPrice;
        };
        
        setProductPrices(prevPrices => ({
            ...prevPrices,
            [product.id]: newPrice
        }));
    };
    
    // product card template
    const menuProducts = () => {
        return (
            prodArr.map(product => (
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
                            <select className='m-p-select' onChange={(e) => handlePrice(product ,e.target.value)}>
                                <option value="large"><p>Large</p></option>
                                <option value="medium"><p>Medium</p></option>
                                <option value="small"><p>Small</p></option>
                            </select>
                            <span className='c-s-arrow'>
                                <b></b>
                            </span>

                            <div className='m-p-price'>${productPrices[product.id]}</div>
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
                                            <label className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox' onChange={(e) => handleCategory('pizza', e.target.checked)}></input>
                                                    <span class="checkmark"></span>
                                                    <h3 className='category-h3'>Pizza</h3>
                                                </div>
                                                <p className='category-p'>(3)</p>
                                            </label>

                                            <label className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox' onChange={(e) => handleCategory('burger', e.target.checked)}></input>
                                                    <span class="checkmark"></span>
                                                    <h3 className='category-h3'>Burger</h3>
                                                </div>
                                                <p className='category-p'>(1)</p>
                                            </label>

                                            <label className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox' onChange={(e) => handleCategory('sandwich', e.target.checked)}></input>
                                                    <span class="checkmark"></span>
                                                    <h3 className='category-h3'>Sandwich</h3>
                                                </div>
                                                <p className='category-p'>(2)</p>
                                            </label>

                                            <label className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox' onChange={(e) => handleCategory('fries', e.target.checked)}></input>
                                                    <span class="checkmark"></span>
                                                    <h3 className='category-h3'>Fries</h3>
                                                </div>
                                                <p className='category-p'>(1)</p>
                                            </label>

                                            <label className='category-div'>
                                                <div className='category-order-setting'>
                                                    <input type='checkbox' onChange={(e) => handleCategory('drinks', e.target.checked)}></input>
                                                    <span class="checkmark"></span>
                                                    <h3 className='category-h3'>Drinks</h3>
                                                </div>
                                                <p className='category-p'>(1)</p>
                                            </label>
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