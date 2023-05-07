import React, {useEffect, useState} from "react"
import { PageBody, Column, Row, Heading1 } from "../theme"
import DrawBoard from "../components/drawBoard"

const Draw = ({db}) => {
    return(
        <PageBody>
            <Row>
                <Heading1>Drawing Board</Heading1>
            </Row>
            <Row>
                <DrawBoard db={db}></DrawBoard>
            </Row>
        </PageBody>
    )
}

export default Draw