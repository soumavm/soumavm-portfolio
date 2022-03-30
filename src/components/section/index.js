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
                    <Heading3>I am a subtitle</Heading3>
                </Column>
                <Column count={2}>
                    <p className="margin-top-1rem">I am a brief description lorem ipsum blah blah</p>
                    <StyledLink to="/Software">Software</StyledLink>
                </Column>
                
            </Row>
            <Row>
                <p>I am an image</p>
            </Row>
        </StyledContainer>

    )
}

export default Section