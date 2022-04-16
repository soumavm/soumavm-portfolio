import styled from "styled-components"
import { Link } from "react-router-dom";
import { spacing, colours } from "../../theme"

export const StyledContainer= styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.spacing6} 0 ${spacing.spacing6} 0;
`

export const StyledLink = styled(Link)`
    margin: ${spacing.spacing2} 0 0 0;
    color: ${colours.darkGrayText};
`

export const StyledImage = styled.img`
    margin-left: auto;
    margin-right: auto;
    max-width: 60rem;
`

