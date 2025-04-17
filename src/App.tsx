import Header from "./component/Header.tsx";
import FoodDelivery from "./component/FoodDelivery.tsx";
import FoodCategory from "./component/FoodCategory.tsx";
import HeroSection from "./component/FoodStayAtHome.tsx";
import FoodModileApp from "./component/FoorModileApp.tsx";
import Testimonial from './component/FoodClent.tsx'
import FoodRestaurant from "./component/FoodRestaurant.tsx";
import FoodSubscribe from "./component/FoodSubscribe.tsx";
import Foteer from "./component/Foteer.tsx";


import {Outlet} from "react-router-dom";


const App = () => {
    return (
        <div>
            <Header/>
            <FoodDelivery/>
            <FoodCategory/>
            <HeroSection/>


            <FoodRestaurant/>
            < FoodModileApp/>
            <Testimonial/>|
            <FoodSubscribe/>
            < Foteer/>


            <Outlet/>
        </div>
    );
};

export default App;


// 2ef10e45e4c542e4ab3ab525a3eeaf6b
