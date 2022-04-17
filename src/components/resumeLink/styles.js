import styled from "styled-components"
import {colours, spacing} from "../../theme"

export const StyledDownload = styled.a`
    padding: ${spacing.spacing4} 0 ${spacing.spacing4} 0;
    width: 100%;
    text-align: center;
    color: ${colours.blackText};
    font-size: 22px;
    text-decoration: underline;
    
    &:hover{
        color: ${colours.blackText};
        background-color: ${colours.grayHover};
    }
`

export const StyledContainer = styled.div`
    display: flex;
    ${(props) => props.border && `border-right: 1px solid ${colours.darkGrayText};`}
    margin: ${spacing.spacing3} 0 ${spacing.spacing7} 0;
`