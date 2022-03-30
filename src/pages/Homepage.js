import React from "react"
import { PageBody, Column, Row } from "../theme"
import ResumeLink from "../components/resumeLink"
import Section from "../components/section"
import HomePageMain from "../components/homePageMain"

import PDF from "../resources/Standard-Resume.pdf"

const Homepage = () => {
    return(
        <PageBody>
            <Row>
                <HomePageMain />
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
            <Section title="About"/>
            <hr />
            <Section />
            <hr />
            <Section />
            <hr />
            <Section title="hello"/>
            
        </PageBody>
    )
}

export default Homepage