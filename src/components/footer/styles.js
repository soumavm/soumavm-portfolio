import styled from "styled-components"
import { Link } from "react-router-dom";
import { spacing, typography, colours } from "../../theme"

export const StyledFooter = styled.footer`
  height: 10rem;
  background-color: ${colours.footerBG};
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`
export const StyledHeaderText = styled(Link)`
    margin-left: ${spacing.spacing9};
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

export const StyledRow= styled.div`
    display: flex;
    justify-content: center;
`
export const StyledIcon = styled.a`
    margin: 0 ${spacing.spacing2} ${spacing.spacing4} ${spacing.spacing2};
    padding-top: ${spacing.spacing4};
    width: 32px;
    height:32px;
`
export const StyledLink = styled(Link)`
    margin: ${spacing.spacing2} ${spacing.spacing2} 0 ${spacing.spacing2};
    color: ${colours.darkGrayText}
`