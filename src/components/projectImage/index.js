import React from "react"
import { 
    StyledContainer, 
    StyledImage
} from "./styles"

import Row from "../../theme"


const ProjectImage = ({src, alt}) =>{
    return(
        <StyledContainer>
            <Row>
                <StyledImage src={src} alt={alt} />
                <p>I am an image</p>
            </Row>
        </StyledContainer>
    )
}

export default ProjectImage