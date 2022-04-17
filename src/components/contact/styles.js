import styled from "styled-components"
import { spacing} from "../../theme"

export const StyledRow= styled.div`
    display: flex;
`
export const StyledIcon = styled.a`
    ${(props) => props.first && `margin-left: 0 !important; `}
    margin: 0 ${spacing.spacing2} ${spacing.spacing4} ${spacing.spacing2};
    padding-top: ${spacing.spacing4};
    display: flex;
    text-decoration: none !important;
    p {
        display: none;
    }
    &:hover{
        p{
            display: inline-block;
            text-decoration: underline;
        }
    }
`