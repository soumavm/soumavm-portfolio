import React from "react"
import { NavLink } from "react-router-dom";
import { 
    StyledHeader, 
    StyledHeaderText, 
    StyledMenuButton } from "./styles"


const Header = () =>{
    return(
        <>
            <StyledHeader>
                <StyledHeaderText>Soumav Maiti</StyledHeaderText>
                <NavLink to="Page2">Page2</NavLink>

            </StyledHeader>
        </>
    )
}

export default Header