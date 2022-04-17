import React from "react"
import { Column, Heading1, Heading4 } from "../../theme"

import { 
    StyledImage
}
from "./styles"

const ProjectMain = ({data}) => {
    return(
        <Column count={1}>
            <Heading1>{data.Title}</Heading1>
            <Heading4>{data.Subtitle}</Heading4>
        </Column>
        
    )
}

export default ProjectMain