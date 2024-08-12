

export function Supporters() {
    return(
        <section id="supporters-section">
            <div id="supporters-container">
                <div className="brand-img-container">
                    <img src={require("../images/brand1.png")} className="brand-img"></img>
                </div>
                <div className="brand-img-container">
                    <img src={require("../images/brand2.png")} className="brand-img"></img>
                </div>
                <div className="brand-img-container">
                    <img src={require("../images/brand3.png")} className="brand-img"></img>
                </div>
            </div>
        </section>
    );
}