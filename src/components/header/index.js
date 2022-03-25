import React from "react"
import { NavLink } from "react-router-dom";
import { 
    StyledHeader, 
    StyledHeaderText, 
    StyledLink,
    StyledLinkList} from "./styles"


const Header = () =>{
    return(
        <>
            <StyledHeader>
                <StyledHeaderText>Soumav Maiti</StyledHeaderText>
                <StyledLinkList>
                    <StyledLink to="" activeClassName="selected" first={true}>Home</StyledLink>
                    <StyledLink to="Software" activeClassName="selected" >Software</StyledLink>
                    <StyledLink to="Hardware" activeClassName="selected" >Hardware</StyledLink>
                    <StyledLink to="Mechanical" activeClassName="selected" >Mechanical</StyledLink>
                    <StyledLink to="Arcade" activeClassName="selected">Arcade</StyledLink>
                </StyledLinkList>
            </StyledHeader>
        </>
    )
}

export default Header