

export function NewsBlog() {
    return(
        <section id="news-blog-section">
            <div id="news-blog-content">
                <h3 id="n-b-h3">News & Blog</h3>
                <h1 id="n-b-h1">What’s Happening Your<br></br>
                Near City & Town</h1>

                <div id="blog-cards-container">
                    <div className="blog-card">
                        <div className="blog-card-img">
                            <img src={require("../images/blog-1.jpg")} className="b-c-img"></img>
                        </div>

                        <div className="blog-card-txt">
                            <ul className="bc-date-topic">
                                <li className="bc-dt-li">August 24, 2024</li> <li className="bc-dt-li">Burger</li>
                            </ul>
                            <div className="bc-main-txt">
                                <h2 className="bc-h2">Do You Think About Cheese Pizza Recipes?</h2>

                                <p className="bc-p">Pizzhen an unknown printer took a galley of type and scrambled it to make a type specimen bookIt hasey survived</p>
                            </div>

                            <h4 className="bc-h4">Read More -?</h4>
                        </div>
                    </div>

                    <div className="blog-card">
                        <div className="blog-card-img">
                            <img src={require("../images/blog-2.jpg")} className="b-c-img"></img>
                        </div>

                        <div className="blog-card-txt">
                            <ul className="bc-date-topic">
                                <li className="bc-dt-li">August 24, 2024</li> <li className="bc-dt-li">Burger</li>
                            </ul>
                            <div className="bc-main-txt">
                                <h2 className="bc-h2">Do You Think About Cheese Pizza Recipes?</h2>

                                <p className="bc-p">Pizzhen an unknown printer took a galley of type and scrambled it to make a type specimen bookIt hasey survived</p>
                            </div>

                            <h4 className="bc-h4">Read More -?</h4>
                        </div>
                    </div>

                    <div className="blog-card">
                        <div className="blog-card-img">
                            <img src={require("../images/blog-3.jpg")} className="b-c-img"></img>
                        </div>

                        <div className="blog-card-txt">
                            <ul className="bc-date-topic">
                                <li className="bc-dt-li">August 24, 2024</li> <li className="bc-dt-li">Burger</li>
                            </ul>
                            <div className="bc-main-txt">
                                <h2 className="bc-h2">Do You Think About Cheese Pizza Recipes?</h2>

                                <p className="bc-p">Pizzhen an unknown printer took a galley of type and scrambled it to make a type specimen bookIt hasey survived</p>
                            </div>

                            <h4 className="bc-h4">Read More -?</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}