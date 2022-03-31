import React, { useState, useEffect} from "react"
import { PageBody, Column, Row } from "../theme"
import ResumeLink from "../components/resumeLink"
import Section from "../components/section"
import HomePageMain from "../components/homePageMain"

import PDF from "../resources/Standard-Resume.pdf"
import { collection, getDocs } from "firebase/firestore";

const Homepage = ({db}) => {
    const [pageData, setPageData] = useState([])
    // db.doc("About").get()
    // .then((doc) => {
    //     console.log("Document data:", doc.data());
    // })
    let data = []
    useEffect(() => {
        const test = async () =>{
            const querySnapshot = await getDocs(collection(db, "homePage"));
            querySnapshot.forEach((doc, i) => {
              data.push({name: doc.id, data: doc.data()})
            });
        }
        test()
    }, [])

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