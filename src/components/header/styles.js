import styled from "styled-components"
import { Link, NavLink } from "react-router-dom";
import { spacing, typography, colours, Heading1} from "../../theme"

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 5.75rem;
`
export const StyledHeaderText = styled(Link)`
    margin-left: ${spacing.spacing9};
    width: 55%;
    font-size: 48px;
    letter-spacing: ${typography.letterSpacingLarge};
    font-weight: ${typography.fontWeightRegular};
    line-height: ${typography.lineHeightLarge};
    font-family: ${typography.fontPrimary};
    color: ${colours.darkGrayText};
    text-decoration: none;

    &:hover{
        color: ${colours.darkGrayText};;
        background-color: none;
        text-decoration: none;
    }
`

export const StyledLink = styled(NavLink)`
    color: ${colours.lightGrayText};
    text-decoration: none;
    font-size: 24px;
    padding: ${spacing.spacing4} ${spacing.spacing5} ${spacing.spacing4} ${spacing.spacing5};
    ${(props) => props.first && `margin-left: auto;`}
    
    &:hover{
        color: ${colours.blackText};
        background-color: ${colours.grayHover};
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