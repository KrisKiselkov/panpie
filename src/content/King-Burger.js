

export function KingBurger() {
    return(
        <section id="king-burger-section">
            <div id="king-burger-txt">
                <h1 id="king-burger-h1">Beef<br></br>
                King Burger</h1>
                <p id="king-burger-p">Piorem ipsum dolor sit amet consecte eliturabitur venenatis, nisl in bib endum commodo, sapien eusto cursus are urnainibus.</p>
                <button id="king-burger-btn">Order Now</button>
            </div>

            <div id="king-burger-img">
                <img src={require("../images/king-burger.png")} id="burger-img"></img>
            </div>
        </section>
    );
}