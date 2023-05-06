import React from "react"
import { StyledRow, StyledContainer } from "./styles"
import { Column, Row, Heading1, Heading4 } from "../../theme"

let colCount = 22
let rowCount = 17

let rowArray = [];
let buttonArray = [];

for (let rownum = 0; rownum < rowCount; rownum++) {
    for(let colnum = 0; colnum < colCount; colnum++){
        rowArray.push(<Column count={colCount}><button>{colnum + rownum*colCount}</button></Column>);
    }
    //buttonArray.push(<Row>{rowArray}</Row>)

    buttonArray.push(<Row>{rowArray}</Row>);
    buttonArray.push('\n');
    rowArray = [];
}


const DrawBoard = () =>{
    return(
        <>
        <StyledContainer>
            <Row>
                <Heading1>Drawing Board</Heading1>
            </Row>
            
            <StyledRow>
                {buttonArray}
            </StyledRow>
        </StyledContainer>

            
        </>

    )
}

export default DrawBoard