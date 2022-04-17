import React from "react"
import { 
    StyledHeader, 
    StyledHeaderText, 
    StyledLink,
    StyledLinkList} from "./styles"

const Header = () =>{
    return(
        <StyledHeader>
            <StyledHeaderText to="">Soumav Maiti</StyledHeaderText>
            <StyledLinkList>
                <StyledLink to=""  first={"true"}>Home</StyledLink>
                <StyledLink to="Software" >Software</StyledLink>
                <StyledLink to="Hardware" >Hardware</StyledLink>
                <StyledLink to="Mechanical" >Mechanical</StyledLink>
                <StyledLink to="Arcade" >Arcade</StyledLink>
            </StyledLinkList>
        </StyledHeader>
    )
}

export default Header