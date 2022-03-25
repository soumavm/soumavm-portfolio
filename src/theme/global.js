import { createGlobalStyle } from "styled-components"

import typography from "./variables/typography"
import color from "./variables/colours"
import spacing from "./variables/spacing"

const GlobalStyle = createGlobalStyle`
	body {
		background-color: ${color.background};
		font-family: ${typography.fontPrimary};
	}

`

export default GlobalStyle