import styled from "styled-components"
import { spacing, Row, Column, colours} from "../../theme"

export const StyledContainer= styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.spacing6} 0 ${spacing.spacing6} 0;
  max-width: 35rem;
`

export const StyledRow= styled(Row)`
    flex-wrap: wrap;
`

export const StyledColumn= styled(Column)`
    aspect-ratio: 1 / 1;
`

export const StyledButton = styled.button`
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    background-color: transparent;
    border: 1px dotted ${colours.buttonBorder};

    &:hover{
        filter: brightness(90%);
    }
`
export const StyledControlButton = styled.button`
    width: 100%;
    height: 100%;
    flex-wrap: wrap;    
    border: 1px dotted ${colours.buttonBorder};
    &:hover{
        filter: brightness(90%);
    }
    ${props => props.startColour && `background-color: ${props.startColour}`}
`

export const ControlColumn = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 30%;
    aspect-ratio: 1 / 1;
    .input {
        width: 30px;
    }
`