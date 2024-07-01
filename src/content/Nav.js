import { NavLink } from "react-router-dom"

export function Nav() {
    return (
        <>
                <header>
                    <nav>
                        <ul id="nav-list">
                            <NavLink to={'/'} className='nav-a'><li>Home</li></NavLink>
                            <NavLink to={'/'} className='nav-a'><li>Products</li></NavLink>
                            <NavLink to={'/'} className='nav-a'><li>Contact Us</li></NavLink>
                            
                        </ul>

                        <img  alt="logo" id="logo"></img>

                        <h2>B</h2>
                    </nav>
                </header>
        </>
    );
}   