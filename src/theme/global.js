import { createGlobalStyle } from "styled-components"

import typography from "./variables/typography"
import colours from "./variables/colours"
import spacing from "./variables/spacing"

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${colours.white};
		font-family: ${typography.fontPrimary};
        font-weight: ${typography.fontWeightRegular};
		font-size: ${typography.defaultFontSize};
		line-height: ${typography.lineHeightDefault};
		color: ${colours.blackText}
	}

    a {
        color: ${colours.blue};
        &:active,
		&:hover {
			color: ${colours.darkBlue};
            text-decoration: underline;
		}
    }

	hr {
		width: 100%;
		max-width: 48rem;
		border: 0;
		padding: 0;
		margin: ${spacing.spacing7} 0;
		border-bottom: 1px solid ${colours.darkGrayText};
	}
`

export default GlobalStyle