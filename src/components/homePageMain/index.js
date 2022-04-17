import React from "react"
import { Column, Heading1, Heading3 } from "../../theme"
import Contact from "../contact"

import { 
    StyledImage
}
from "./styles"

const HomePageMain = ({data}) => {
    return(
        <>
            <Column count={2}>
                <StyledImage src={require("../../images/homePageImage.png")} alt ="man on computer"/>
            </Column>
            <Column count={2}>
                <Heading1>{data.title}</Heading1>
                <Heading3>{data.subtitle}</Heading3>
                <Contact />
            </Column>
        </>
        
    )
}

export default HomePageMain

