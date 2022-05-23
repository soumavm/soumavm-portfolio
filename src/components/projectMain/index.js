import React from "react"
import { Column, Row, Heading4 } from "../../theme"

import { 
    StyledImage,
    StyledHeading,
    StyledIcon,
    StyledCol
}
from "./styles"

const ProjectMain = ({data, title, last}) => {
    if(title){
        return(
            <Row>
                <StyledIcon></StyledIcon>
                <Column count={1}>
                    <StyledHeading title={true}>{data.Title}</StyledHeading>
                    <Heading4>{data.Subtitle}</Heading4>
                </Column>
            </Row>
        )
    }
    else return(
        <StyledCol count={1} last={last}>
            <StyledHeading>{data.Title}</StyledHeading>
            <Heading4>{data.Subtitle}</Heading4>
        </StyledCol>
        
    )
}

export default ProjectMain
