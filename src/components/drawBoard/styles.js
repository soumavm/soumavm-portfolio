import styled from "styled-components"
import { spacing, Row} from "../../theme"

export const StyledContainer= styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.spacing6} 0 ${spacing.spacing6} 0;
`

export const StyledRow= styled(Row)`
    flex-wrap: wrap;
`