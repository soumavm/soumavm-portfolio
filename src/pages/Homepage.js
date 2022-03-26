import React from "react"
import {Column, Row} from "../theme"

const Homepage = () => {
    return(
        <Row>
            <Column count={2}>
                <p>I am a image</p>
            </Column>
            <Column count={2}>
                <h1>I am a Title</h1>
            </Column>
            <hr />
        </Row>
    )
}

export default Homepage