import React from "react";
import Herosection from "./Herosection";
import ProjectSlider from "./ProjectSlider"
import Howweework from "./Howwework";
import OurServices from "../Services/OurServices"


function Home (){
    return(
        <>
        <Herosection/>
        <Howweework/>
        <ProjectSlider/>
        <OurServices/>
        </>
    )   
}

export default Home;