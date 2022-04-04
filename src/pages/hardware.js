import React, {useEffect, useState} from "react"
import { PageBody, Column, Row } from "../theme"

import PDF from "../resources/Standard-Resume.pdf"
import { collection, getDocs } from "firebase/firestore"

import ProjectMain from "../components/projectMain"
import ProjectImage from "../components/projectImage"

const Hardware = ({db}) => {
    let [loading, setLoading] = useState(true)
    let [projectData, setProjectData] = useState([])
    let [mainData, setMainData] = useState({})
    let [conclusionData, setConclusionData] = useState({})
    useEffect(() => {
        const getData = async () => {
            const querySnapshot = await getDocs(collection(db, "Hardware"))
            querySnapshot.forEach((doc) => {
                if(doc.id === "Main"){
                    setMainData(doc.data())
                }
                else if(doc.id === "Conclusion"){
                    setConclusionData(doc.data())
                }
                else{
                    setProjectData(projectData => [...projectData, doc.data()])
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
                    <ProjectMain data = {mainData}/>
                </Row>
                <hr />
                {projectData.map((data) => {
                    return(
                        <>
                            <Row>
                                <ProjectMain data={data} key={`${data.Title} Project`}/>
                            </Row>
                            <ProjectImage key={`${data.Title} Images`} />
                        </>
                    )
                })

                }
                <Row>
                    <ProjectMain data = {conclusionData}/>
                </Row>
            </PageBody>
        )
    }
}

export default Hardware