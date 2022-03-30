import React from "react"
import { Column, Heading1, Heading3 } from "../../theme"
import Contact from "../contact"

import { 
    StyledImage
}
from "./styles"

const HomePageMain = () => {
    return(
        <>
            <Column count={2}>
                <StyledImage src={require("../../images/homePageImage.png")} alt ="man on computer"/>
            </Column>
            <Column count={2}>
                <Heading1>Welcome!</Heading1>
                <Heading3>I'm Soumav, a Mechatronics Engineering student. 
                    <br></br> I like to make things :)
                </Heading3>
                <Contact />
            </Column>
        </>
        
    )
}

export default HomePageMain

