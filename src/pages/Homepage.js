import React, {useEffect, useState} from "react"
import { PageBody, Column, Row } from "../theme"

import ResumeLink from "../components/resumeLink"
import Section from "../components/section"
import HomePageMain from "../components/homePageMain"

import PDF from "../resources/Standard-Resume.pdf"
import { collection, getDocs } from "firebase/firestore"
import Loading from "./loading"

const Homepage = ({db}) => {
    let [loading, setLoading] = useState(true)
    let [sectionData, setSectionData] = useState([])
    let [frontpageData, setfrontpageData] = useState({})
    let [sortData, setSortData] = useState(false)

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
    
    const sortMyData = () => {
        if(!sortData){
            const myData = [].concat(sectionData)
            .sort((a, b) => a.Order > b.Order ? 1 : -1)
            setSectionData(myData)
            setSortData(true)
        }
    }

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
                        <ResumeLink pdf={PDF} name="Software Resume" border={true}/>
                    </Column>
                    <Column count={3}>
                        <ResumeLink pdf={PDF} name="Hardware Resume" border={true} />
                    </Column>
                    <Column count={3}>
                        <ResumeLink pdf={PDF} name="Mechanical Resume" />
                    </Column>
                </Row>
                {sectionData.length && sortMyData()}
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