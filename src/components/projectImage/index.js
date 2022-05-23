import React from "react"
import { 
    StyledContainer, 
    StyledImage
} from "./styles"

import {Row} from "../../theme"


const ProjectImage = ({src, alt}) =>{
    return(
        <StyledContainer>
            <StyledImage src={src} alt={alt} />
        </StyledContainer>
    )
}

export default ProjectImage