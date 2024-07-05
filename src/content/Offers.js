import { menu } from "./Menu";


export function Offers() {
    const offersFunc = () => {
        return (
            menu.map(offer => (
                <div className="offer-card">
                    <img className="offer-card-img" src={offer.image}></img>

                    <h2 className="offer-card-h2">{offer.label}</h2>
                    <p className="offer-card-p">{offer.ingredients}</p>
                    <h2 className="offer-card-price">${offer.price}</h2>
                </div>
            ))
        )
    }

    return(
        <section id="offers-section">
            <h3 id="offers-h3">Fresh From Panpie</h3>
            <h1 id="offers-h1">We Offer People Best Way<br></br>
            To Eat Best Food</h1>

            <div id="filter-btns-div">
                <button className="filter-btn">All</button>
                <button className="filter-btn">Donuts</button>
                <button className="filter-btn">Pizza</button>
                <button className="filter-btn">Drinks</button>
                <button className="filter-btn">Sandwich</button>
            </div>
        
            <section id="offers-container">
                <img className="offers-bg hotdog-bg" src={require("../images/hotdog-bg.png")}></img>
                <img className="offers-bg pizza-bg" src={require("../images/pizza-bg.png")}></img>
                <img className="offers-bg hotdog-two-bg" src={require("../images/hotdog-bg.png")}></img>
                {offersFunc()}
                <img className="offers-bg fries-bg" src={require("../images/fries-bg.png")}></img>
                <img className="offers-bg fries-two-bg" src={require("../images/fries-bg.png")}></img>
                <img className="offers-bg pizza-two-bg" src={require("../images/pizza-bg.png")}></img>
            </section>
        </section>
    );
}