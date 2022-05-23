import React, {useEffect, useState} from "react"
import { PageBody, Row } from "../theme"

import { collection, getDocs } from "firebase/firestore"

import ProjectMain from "../components/projectMain"
import ProjectImage from "../components/projectImage"

import Loading from "./loading"

import { query, orderBy} from "firebase/firestore";  


const Software= ({db}) => {
    let [loading, setLoading] = useState(true)
    let [projectData, setProjectData] = useState([])
    let [mainData, setMainData] = useState({})
    let [conclusionData, setConclusionData] = useState({})

    useEffect(() => {

        const getData = async () => {
            const q1 = query(collection(db, "Software"), orderBy("TopicOrder", "asc"))
            const topicSnapshot = await getDocs(q1)
            const q2 = query(collection(db, "Software"), orderBy("Order", "asc"));
            const projectSnapshot = await getDocs(q2)

            topicSnapshot.forEach((doc) => {
                if(doc.id === "Main"){
                    setMainData(doc.data())
                }
                else{
                    setConclusionData(doc.data())
                }
            })
            projectSnapshot.forEach((doc) => {
                setProjectData(projectData => [...projectData, doc.data()])
            })

            setLoading(false)
        }
        getData()
    }, [])

    if(loading){
        return  <Loading />
    }
    else{
        return(
            <PageBody>
                <Row>
                    <ProjectMain data = {mainData} title={true}/>
                </Row>
                <hr />
                {projectData.map((data) => {
                    return(
                        <React.Fragment key={`${data.Title} Project`}>
                            <Row>
                                <ProjectMain data={data} />
                            </Row>
                            <ProjectImage key={`${data.Title} Images`} />
                        </React.Fragment>
                    )
                })}
                <Row>
                    <ProjectMain data = {conclusionData}/>
                </Row>
            </PageBody>
        )
    }


}

export default Software