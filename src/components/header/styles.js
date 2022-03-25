import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { spacing, Heading1} from "../../theme"

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  height: 5.75rem;
`
export const StyledHeaderText = styled(Heading1)`
    margin-left: ${spacing.spacing9};
`

export const StyledMenuButton = styled(NavLink)`

    
`
