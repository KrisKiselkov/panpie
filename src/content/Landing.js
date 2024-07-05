import { ChoiceCards } from "./Choice-Cards";
import { Home } from "./Home";
import { Nav } from "./Nav";
import { Offers } from "./Offers";
import { QualityContainer } from "./Quality-Container";


export function Landing() {
    return(
        <>
            <Nav />

            <Home />

            <ChoiceCards />

            <Offers />
        
            <QualityContainer />
        </>
    );
}