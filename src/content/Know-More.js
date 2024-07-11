

export function KnowMore() {
    return(
        <section id="know-more">
            <div id="know-more-container">
                <div id="know-more-img">
                    <img src={require("../images/shape33.png")} id="know-shape"></img>
                    <img src={require("../images/about-pizzaw.png")} id="know-image"></img>
                </div>

                <div id="know-more-txt">
                    <h1 id="know-more-h1">Panpie, Burgers, And<br></br>
                    Best Pizzas in Town</h1>
                    <h3 id="know-more-h3">We put 100% of love and dedication into our dishes</h3>
                    <p id="know-more-p">Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur venenatis, nisl in bib endum commodo, sapien justo cursus are urna, quis porta mauris elit finibus nulla.</p>

                    <button id="know-more-btn">Know More</button>
                </div>
            </div>
        </section>
    );
}