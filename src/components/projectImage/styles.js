import styled from "styled-components"
import { spacing, colours } from "../../theme"

export const StyledContainer = styled.div`
  margin: ${spacing.spacing6} 0 ${spacing.spacing6} 0;
  background-color: ${colours.imageBG};
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
`

export const StyledImage = styled.img`
    width: 100%;
    max-width: 60rem;
    margin: ${spacing.spacing7} auto ${spacing.spacing7} auto;
`