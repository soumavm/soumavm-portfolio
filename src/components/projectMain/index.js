import React from "react"
import { Column, Row, Heading1, Heading4 } from "../../theme"

import { 
    StyledImage,
    StyledHeading,
    StyledIcon
}
from "./styles"

const ProjectMain = ({data, title}) => {
    if(title){
        return(
            <>
            <Row>
                <StyledIcon></StyledIcon>
                <Column count={1}>
                    <StyledHeading title={true}>{data.Title}</StyledHeading>
                    <Heading4>{data.Subtitle}</Heading4>
                </Column>
            </Row>
                
            </>
        )
    }
    else return(
        <Column count={1}>
            <StyledHeading>{data.Title}</StyledHeading>
            <Heading4>{data.Subtitle}</Heading4>
        </Column>
        
    )
}

export default ProjectMain
