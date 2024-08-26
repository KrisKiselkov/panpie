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
                        <p className='menu-deal-p'>{deal.price}</p>
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
                                    <input type='search' id='menu-search' placeholder='Search products...'></input>
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
                            </div>
                        </div>

                        <div id="menu-products-col">
                            
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}