import {HomePage} from "./Home-style.ts";
import {HomePreview} from "./conponents/homePreview/HomePreview.tsx";
import {HomeApproach} from "./conponents/homeApproach/HomeApproach.tsx";
import {HomePossibilities} from "./conponents/homePossibilities/HomePossibilities.tsx";
import {HomeCases} from "./conponents/homeCases/HomeCases.tsx";
import {HomeArchitect} from "./conponents/homeArchitect/HomeArchitect.tsx";
import {HomeServices} from "./conponents/homeServices/HomeServices.tsx";
import {HomeClients} from "./conponents/homeClients/HomeClients.tsx";
import {HomeReviews} from "./conponents/homeReviews/HomeReviews.tsx";


export const Home = () => {
    return (
        <HomePage>
            <HomePreview/>
            <HomeApproach/>
            <HomePossibilities/>
            <HomeCases/>
            <HomeArchitect/>
            <HomeServices/>
            <HomeClients/>
            <HomeReviews/>
        </HomePage>
    );
};

