import React from "react"
import { StyledDownload, StyledContainer } from "./styles"

const ResumeLink = (props) =>{
    return(
        <StyledContainer border= {props.border}>
            <StyledDownload href={props.pdf} target="_blank">
                {props.name}
            </StyledDownload>
        </StyledContainer>
        
    )
}

export default ResumeLink