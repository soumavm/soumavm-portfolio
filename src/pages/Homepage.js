import React, {useEffect, useState} from "react"
import { PageBody, Column, Row } from "../theme"

import ResumeLink from "../components/resumeLink"
import Section from "../components/section"
import HomePageMain from "../components/homePageMain"

import PDF from "../resources/Standard-Resume.pdf"
import { collection, getDocs } from "firebase/firestore"

const Homepage = ({db}) => {
    let [loading, setLoading] = useState(true)
    let [sectionData, setSectionData] = useState([])
    let [frontpageData, setfrontpageData] = useState({})
    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "homePage"))
            querySnapshot.forEach((doc) => {
                if(doc.id === "frontpage"){
                    setfrontpageData(doc.data())
                }
                else{
                    setSectionData(sectionData => [...sectionData, doc.data()])
                }
            })
            setLoading(false)
        }
        getData()
    }, [])

    if(loading){
        return  <p>hi i'm loading</p>
    }
    else{
        return(
            <PageBody>
                <Row>
                    <HomePageMain data={frontpageData}/>
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
                
                {sectionData.map((data) => {
                    return(
                        <>
                            <hr />
                            <Section title = {data.Title} subtitle={data.Subtitle} link = {data.Link} description = {data.Description} key={`${data.Title} Section`}/>
                        </>
                    )
                })}
            </PageBody>
        )
    }

}

export default Homepage