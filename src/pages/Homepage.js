import React from "react"
import {PageBody, Column, Row, Heading1, Heading3} from "../theme"
import Contact from "../components/contact"
import ResumeLink from "../components/resumeLink"
import Section from "../components/section"

import PDF from "../resources/Standard-Resume.pdf"

const Homepage = () => {
    return(
        <PageBody>
            <Row>
                <Column count={2}>
                    <p>I am an image</p>
                </Column>
                <Column count={2}>
                    <Heading1>I am a Title</Heading1>
                    <Heading3>I am a subtitle</Heading3>
                    <Contact />
                </Column>
            </Row>
            <Row>
                <Column count={3}>
                    <ResumeLink pdf={PDF} name="Software Resume" border={true}/>
                </Column>
                <Column count={3}>
                    <ResumeLink pdf={PDF} name="Hardware Resume" border={true} />
                </Column>
                <Column count={3}>
                    <ResumeLink pdf={PDF} name="Mechanical Resume" />
                </Column>
            </Row>
            <hr />
            <Section />
            
        </PageBody>
    )
}

export default Homepage