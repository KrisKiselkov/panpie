

export function QualityContainer() {
    return(
        <section id="quality-container">
            <div id="quality-text">
                <h1 id="quality-h1">We Have <span>Excellent</span><br></br>
                Of <span>Quality</span> Pizza</h1>
                <button id="quality-btn">See Full Menu</button>
            </div>

            <div id="quality-image-container">
                <img id="quality-image" src={require("../images/quality-pizza.png")}></img>
            </div>
        </section>
    );
}