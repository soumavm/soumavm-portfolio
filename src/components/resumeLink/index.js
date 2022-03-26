import React from "react"
import { StyledDownload, StyledContainer } from "./styles"

const ResumeLink = (props) =>{
    return(
        <StyledContainer border= {props.border}>
            <StyledDownload>
                {props.title}
            </StyledDownload>
        </StyledContainer>
        
    )
}

export default ResumeLink