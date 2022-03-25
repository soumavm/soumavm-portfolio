import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { spacing, Heading1, colours} from "../../theme"

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 5.75rem;
`
export const StyledHeaderText = styled(Heading1)`
    margin-left: ${spacing.spacing9};
    width: 55%;
`

export const StyledLink = styled(NavLink)`
    color: ${colours.lightGrayText};
    text-decoration: none;
    font-size: 24px;
    padding: ${spacing.spacing4} ${spacing.spacing5} ${spacing.spacing4} ${spacing.spacing5};
    ${(props) => props.first && `margin-left: auto;`}
    
    &:hover{
        color: #202124;
        background-color: #2021240a;
        text-decoration: none;
    }

    &.active{
        border-bottom: 2px solid ${colours.blue};
        color: ${colours.blue};
    }
`

export const StyledLinkList = styled.div`
    width: 45%;
    margin-right: ${spacing.spacing9};
`