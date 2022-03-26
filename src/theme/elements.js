import styled from "styled-components"
import { spacing } from "./index"

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  margin: 0 auto;
  max-width: 60rem;
  width: 100%;
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  ${(props) => `width: ${100/props.count}%;`}
  padding-left: ${spacing.spacing4};
  padding-right: ${spacing.spacing4};
  display: flex;
  flex-direction: column;
`