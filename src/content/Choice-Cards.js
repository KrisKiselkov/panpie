

export function ChoiceCards() {
    return(
        <section id="choice-cards">
            <div className="card-container">
                <div className="card-header">
                    <h2 className="card-h2">Mexican Pizza</h2>
                    <button className="card-btn">See Menu</button>
                </div>
                <div className='card-img-div'>
                    <img src={require('../images/maxican.png')} className="card-img"></img>
                </div>
            </div>

            <div className="card-container">
                <div className="card-header">
                    <h2 className="card-h2">Soft Drinks</h2>
                    <button className="card-btn">See Menu</button>
                </div>

                <div className='card-img-div'>
                    <img src={require('../images/soft-drinks.png')} className="card-img"></img>
                </div>
            </div>

            <div className="card-container">
                <div className="card-header">
                    <h2 className="card-h2">French Fries</h2>
                    <button className="card-btn">See Menu</button>
                </div>

                <div className='card-img-div'>
                    <img src={require('../images/french.png')} className="card-img"></img>
                </div>
            </div>
        </section>
    );
}