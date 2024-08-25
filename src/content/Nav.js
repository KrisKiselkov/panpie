import { NavLink } from "react-router-dom"

export function Nav() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const scrollHeight = window.scrollY;
        
        header.classList.toggle('sticky', scrollHeight > 0);
        if (scrollHeight) {
            header.style.height='100px';
            header.style.boxShadow='0px 3px 5px #18181818';   
            nav.style.marginTop='-4px';
        } else {
            header.style.height='110px';
            header.style.boxShadow='0px 1px #18181818';
            nav.style.marginTop='0px';
        }
    })


    return (
        <>
                <header>
                    <nav>
                        <ul id="nav-list">
                            <NavLink to={'/'} className='nav-a'><li>Home</li></NavLink>
                            <NavLink to={'/menu'} className='nav-a'><li>Menu</li></NavLink>
                            <NavLink to={'/'} className='nav-a'><li>Contact Us</li></NavLink>
                            
                        </ul>

                        <img  alt="logo" id="logo"></img>

                        <h2>B</h2>
                    </nav>
                </header>
        </>
    );
}   