import { ChoiceCards } from "./Choice-Cards";
import { Home } from "./Home";
import { Nav } from "./Nav";


export function Landing() {
    return(
        <>
            <Nav />

            <Home />

            <ChoiceCards />
        </>
    );
}