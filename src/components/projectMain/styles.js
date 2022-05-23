import styled from "styled-components"
import { spacing, colours, typography, Heading1, Column } from "../../theme"

export const StyledImage = styled.img`
    margin-top: ${spacing.spacing3};
`

export const StyledHeading =styled(Heading1)`
    margin: ${spacing.spacing3} 0 ${spacing.spacing3} 0;
    line-height: ${typography.lineHeightSmall};
    ${props => props.Title && `margin-top: ${spacing.spacing7}`}
`

export const StyledIcon = styled.div`
    background-color: ${colours.blue};
    width: 32px;
    height:32px;
    border-radius: 50%;
    margin: ${spacing.spacing9} ${spacing.spacing4} 0 -${spacing.spacing6};
`

export const StyledCol = styled(Column)`
    ${props => props.last && `margin-bottom: ${spacing.spacing10}`}
`

