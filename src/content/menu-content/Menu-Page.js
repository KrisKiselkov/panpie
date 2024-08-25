import { Nav } from '../Nav';

export function Menu() {
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
                                        <h2 id='categories-h2'>Categories</h2>
                                    </div>
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