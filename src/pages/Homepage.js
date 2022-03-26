import React from "react"
import {PageBody, Column, Row, Heading1, Heading3} from "../theme"
import Contact from "../components/contact"
import ResumeLink from "../components/resumeLink"


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
                    <ResumeLink title="Resume1" border={true}/>
                </Column>
                <Column count={3}>
                    <ResumeLink title="Resume2" border={true} />
                </Column>
                <Column count={3}>
                    <ResumeLink title="Resume3" />
                </Column>
            </Row>
            <hr />
            <Row>
                
                <p>hi</p>
            </Row>
            
        </PageBody>
    )
}

export default Homepage