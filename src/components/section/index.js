import React from "react"
import { 
    StyledContainer,
    StyledLink
} from "./styles"
import { Column, Row, Heading1, Heading3} from "../../theme"

const Section = (props) => {
    return(
        <StyledContainer>
            <Row>
                <Column count={2}>
                    <Heading1>{props.title}</Heading1>
                    <Heading3>{props.subtitle}</Heading3>
                </Column>
                <Column count={2}>
                    <p className="margin-top-1rem">{props.description}</p>
                    {props.link && <StyledLink to={`/${props.link}`}>Go to Page</StyledLink>}
                </Column>
                
            </Row>
            <Row>
                <p>I am an image</p>
            </Row>
        </StyledContainer>

    )
}

export default Section