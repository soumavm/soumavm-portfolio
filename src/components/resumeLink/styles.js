import styled from "styled-components"
import {colours, spacing} from "../../theme"

export const StyledDownload = styled.a`
    
    padding-top: ${spacing.spacing4};
    width: 32px;
    height:32px;
    margin: auto;
`

export const StyledContainer = styled.div`
    width: 100%;
    display: inline-block;
    ${(props) => props.border && `border-right: 1px solid ${colours.darkGrayText};`}
`