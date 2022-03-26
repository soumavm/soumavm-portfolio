import React from "react"
import { StyledDownload, StyledContainer } from "./styles"

const ResumeLink = (props) =>{
    return(
        <StyledContainer border= {props.border}>
            <StyledDownload href={`../../resources/${props.title}.pdf`} target="_blank">
                {props.title}
            </StyledDownload>
        </StyledContainer>
        
    )
}

export default ResumeLink