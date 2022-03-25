import styled from "styled-components"
import { color, spacing, typography } from "./index"

export const Row = styled.div`
  margin: 0 auto;
  max-width: 72rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Column = styled.div`
  width: 100%;
  padding-left: ${spacing.spacing4};
  padding-right: ${spacing.spacing4};
`
