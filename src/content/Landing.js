import { ChoiceCards } from "./Choice-Cards";
import { Home } from "./Home";
import { KingBurger } from "./King-Burger";
import { KnowMore } from "./Know-More";
import { Nav } from "./Nav";
import { Offers } from "./Offers";
import { QualityContainer } from "./Quality-Container";
import { Statistics } from "./Statistics";


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
        </>
    );
}