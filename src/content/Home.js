

export function Home() {
    return(
        <section id="home">
            <div id="home-text">
                <h3 id="home-h3">Free Home Delivery 24 Hours!</h3>

                <h1 id="home-h1">Enjoy Your<br></br>
                Pizza In Town!</h1>

                <ul id="home-ul">
                    <li className="home-li">Down aorem ipsum dolor</li>
                    <li className="home-li">Sit amet consectetur adipiscing</li>
                    <li className="home-li">Eliteytellus luctus nec</li>
                </ul>

                <button id='home-btn'>Order Now</button>
            </div>

            <img id="home-pizza" src={require('../images/pizza.png')}></img>
        </section>
    );
}