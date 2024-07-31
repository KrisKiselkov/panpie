import { ChoiceCards } from "./Choice-Cards";
import { Home } from "./Home";
import { KingBurger } from "./King-Burger";
import { KnowMore } from "./Know-More";
import { Nav } from "./Nav";
import { NewsBlog } from "./News&Blog";
import { Offers } from "./Offers";
import { QualityContainer } from "./Quality-Container";
import { QuickChoice } from "./Quick-Choice";
import { Statistics } from "./Statistics";
import { Testimonials } from "./Testimonials";


export function Landing() {
    return(
        <>
            <Nav />

            <Home />

            <ChoiceCards />

            <Offers />
        
            <QualityContainer />

            <KnowMore />

            <KingBurger />

            <Statistics />

            <Testimonials />

            <QuickChoice />

            <NewsBlog />
        </>
    );
}