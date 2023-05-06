import React, {useEffect, useState} from "react"
import { PageBody, Column, Row } from "../theme"
import DrawBoard from "../components/drawBoard"

const Draw = () => {
    return(
        <PageBody>
            <Row>
                <DrawBoard></DrawBoard>
            </Row>
        </PageBody>
    )
}

export default Draw