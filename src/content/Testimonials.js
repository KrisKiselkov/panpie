

export function Testimonials() {
    return(
        <section id="testimonials-section">
            <div id="testimonials-container">
                <div id="testimonials-img-container">
                    <img src={require("../images/testimonial-client.png")} id="main-test-img"></img>
                </div>

                <div id="testimonials-div">
                    <h3 id="test-h3">Testimonials</h3>
                    <h2 id="test-h2">What Our Client Says</h2>
                    <div id="test-info">
                        <div id="first-test-info">
                            <p className="test-p">“ Make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining esmake a type specimen “</p>

                            <div className="test-per">
                                <h2 className="test-h2-per">
                                    Kristian Kiselkov
                                </h2>
                                <h3 className="test-h3-per">
                                    CEO FindTrainee
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
        </section>
    );
}