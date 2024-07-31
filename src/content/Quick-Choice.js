

export function QuickChoice() {
    return(
        <section id="qc-section">
            <div id="qc-container">
                <div className="qc-divs">
                    <h1 className="qc-h1">Pizza</h1>
                    <img src={require("../images/qc-pizza.jpg")} className="qc-imgs"></img>
                </div>

                <div className="qc-divs">
                <h1 className="qc-h1">Drinks</h1>
                    <img src={require("../images/qc-drinks.jpg")} className="qc-imgs"></img>
                </div>

                <div className="qc-divs">
                <h1 className="qc-h1">Chicken</h1>
                <img src={require("../images/qc-burger.jpg")} className="qc-imgs"></img>
                </div>
            </div>
        </section>
    );
}