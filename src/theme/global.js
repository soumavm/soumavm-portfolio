import { createGlobalStyle } from "styled-components"

import typography from "./variables/typography"
import colour from "./variables/colours"
import spacing from "./variables/spacing"

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${colour.white};
		font-family: ${typography.fontPrimary};
        font-weight: ${typography.fontWeightRegular};
		font-size: ${typography.defaultFontSize};
		line-height: ${typography.lineHeightDefault};
	}

    a {
        color: ${colour.blue};
        &:active,
		&:hover {
			color: ${colour.darkBlue};
            text-decoration: underline;
		}
    }

	hr {
		width: 100%;
		max-width: 48rem;
		border: 0;
		padding: 0;
		margin: ${spacing.spacing7} 0;
		border-bottom: 4px solid ${colour.darkGrayText};
	}
`

export default GlobalStyle