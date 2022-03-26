import { colours, spacing, typography } from "./index"
import styled from "styled-components"
import React from "react"

export const Heading1 = styled.h1`
    font-size: 48px;
    letter-spacing: ${typography.letterSpacingLarge};
    font-weight: ${typography.fontWeightRegular};
    line-height: ${typography.lineHeightLarge};
    margin: 0;
`
export const Heading2 = styled.h2`
    font-size: 36px;
    letter-spacing: ${typography.letterSpacingLarge};
    font-weight: ${typography.fontWeightRegular};
    line-height: ${typography.lineHeightLarge};
    margin: 0;
`
export const Heading3 = styled.h3`
    font-size: 32px;
    letter-spacing: ${typography.letterSpacingMedium};
    font-weight: ${typography.fontWeightRegular};
    line-height: ${typography.lineHeightMedium};
    margin: 0;
`
export const Heading4 = styled.h4`
    font-size: 24px;
    letter-spacing: ${typography.letterSpacingMedium};
    font-weight: ${typography.fontWeightRegular};
    line-height: ${typography.lineHeightMedium};
    margin: 0;
`
export const Heading5 = styled.h5`
    font-size: 20px;
    letter-spacing: ${typography.letterSpacingMedium};
    font-weight: ${typography.fontWeightRegular};
    line-height: ${typography.lineHeightMedium};
    margin: 0;
`
export const Paragraph = styled.p`

`