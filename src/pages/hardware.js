import React, {useEffect, useState} from "react"
import { PageBody, Row } from "../theme"

import { collection, getDocs } from "firebase/firestore"

import ProjectMain from "../components/projectMain"
import ProjectImage from "../components/projectImage"

import Loading from "./loading"
import { query, orderBy} from "firebase/firestore";  

const Hardware = ({db}) => {
    let [loading, setLoading] = useState(true)
    let [projectData, setProjectData] = useState([])
    let [topicData, setTopicData] = useState([])
    
    useEffect(() => {

        const getData = async () => {
            const q1 = query(collection(db, "Hardware"), orderBy("TopicOrder", "asc"))
            const topicSnapshot = await getDocs(q1)
            const q2 = query(collection(db, "Hardware"), orderBy("Order", "asc"));
            const projectSnapshot = await getDocs(q2)

            topicSnapshot.forEach((doc) => {
                setTopicData(topicData => [...topicData, doc.data()])
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
                    <ProjectMain data = {topicData[0]} title={true}/>
                </Row>
                <hr />
                {projectData.map((data) => {
                    return(
                        <React.Fragment key={`${data.Title} Project`}>
                            <Row>
                                <ProjectMain data={data} />
                            </Row>
                            <ProjectImage key={`${data.Title} Images`} src={require(`../images/hardware/${data.Src}.png`)} alt={data.Alt} />
                        </React.Fragment>
                    )
                })}
                <Row>
                    <ProjectMain data = {topicData[1]} last={true}/>
                </Row>
            </PageBody>
        )
    }
}

export default Hardware