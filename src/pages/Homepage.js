import React, {useEffect, useState} from "react"
import { PageBody, Column, Row } from "../theme"

import ResumeLink from "../components/resumeLink"
import Section from "../components/section"
import HomePageMain from "../components/homePageMain"

import HardwarePDF from "../resources/Hardware Resume.pdf"
import SoftwarePDF from "../resources/Software Resume.pdf"
import { collection, getDocs } from "firebase/firestore"
import Loading from "./loading"
import { query, orderBy} from "firebase/firestore";  

const Homepage = ({db}) => {
    let [loading, setLoading] = useState(true)
    let [sectionData, setSectionData] = useState([])
    let [frontpageData, setfrontpageData] = useState({})

    useEffect(() => {

        const getData = async () => {
            const q1 = query(collection(db, "homePage"), orderBy("TopicOrder", "asc"))
            const topicSnapshot = await getDocs(q1)
            const q2 = query(collection(db, "homePage"), orderBy("Order", "asc"));
            const sectionSnapshot = await getDocs(q2)

            topicSnapshot.forEach((doc) => {
                setfrontpageData(frontPageData => [...frontPageData, doc.data()])
            })
            sectionSnapshot.forEach((doc) => {
                setSectionData(sectionData => [...sectionData, doc.data()])
            })

            setLoading(false)
        }
        getData()
    }, [])

    if(loading){
        return <Loading />
    }
    else{
        return(
            <PageBody>
                <Row>
                    <HomePageMain data={frontpageData}/>
                </Row>
                <Row>
                    <Column count={3}>
                        <ResumeLink pdf={SoftwarePDF} name="Software Resume" border={true}/>
                    </Column>
                    <Column count={3}>
                        <ResumeLink pdf={HardwarePDF} name="Hardware Resume" border={true} />
                    </Column>
                    <Column count={3}>
                        <ResumeLink pdf={HardwarePDF} name="Mechanical Resume" />
                    </Column>
                </Row>
                {sectionData.length && 
                sectionData.map((data) => {
                    return(
                        <React.Fragment key={`${data.Title} Section`}>
                            <hr />
                            <Section title = {data.Title} subtitle={data.Subtitle} link = {data.Link} description = {data.Description} src={data.Src} alt={data.Alt} />
                        </React.Fragment>
                    )
                })}
            </PageBody>
        )
    }

}

export default Homepage