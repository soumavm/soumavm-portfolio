import React from "react"
import { StyledIcon, StyledRow} from "./styles"

import Phone from "../../theme/icons/phone.js"
import Email from "../../theme/icons/email.js"
import Linkedin from "../../theme/icons/linkedin.js"

const Contact = () =>{
    return(
        <StyledRow>
            <StyledIcon href="https://github.com/soumavm" first={true}>
                <img alt="test" src={require('../../theme/icons/github.png')} width="32" height="32"></img>
            </StyledIcon>
            <StyledIcon href = "mailto: soumavm@gmail.com">
                {Email}
            </StyledIcon>
            <StyledIcon href="https://www.linkedin.com/in/soumavm/">
                {Linkedin}
            </StyledIcon>
            <StyledIcon href="tel:403-604-7416">
                {Phone}
                &nbsp;
                <p>403-604-7416</p>
            </StyledIcon>
        </StyledRow>
    )
}

export default Contact