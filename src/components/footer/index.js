import React from "react"
import { 
    StyledFooter, 
    StyledLink,
    StyledRow,
    StyledIcon
} from "./styles"

import Phone from "../../theme/icons/phone.js"
import Email from "../../theme/icons/email.js"
import Linkedin from "../../theme/icons/linkedin.js"

const Footer = () =>{
    return(
        <StyledFooter>
            <StyledRow>
                <StyledIcon href = "mailto: soumavm@gmail.com">
                    {Email}
                </StyledIcon>
                <StyledIcon href="https://github.com/soumavm">
                    <img alt="test" src={require('../../theme/icons/github.png')} width="32" height="32"></img>
                </StyledIcon>
                <StyledIcon href="https://www.linkedin.com/in/soumavm/">
                    {Linkedin}
                </StyledIcon>
            </StyledRow>
            <StyledRow>
                {Phone}&nbsp;&nbsp;<a href="tel:403-604-7416">403-604-7416</a>
            </StyledRow>
            <StyledRow>
                <StyledLink to="">Home</StyledLink>
                <StyledLink to="/software">Software</StyledLink>
                <StyledLink to="/hardware">Hardware</StyledLink>
                <StyledLink to="/mechanical">Mechanical</StyledLink>
                <StyledLink to="/arcade">Arcade</StyledLink>
            </StyledRow>
        </StyledFooter>
    )
}

export default Footer