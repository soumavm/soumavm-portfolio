import React, { useState } from 'react';
import { StyledRow, StyledContainer, StyledButton, StyledColumn, StyledControlButton, ControlColumn } from "./styles"
import { Column, Row, Heading1, Heading5} from "../../theme"


const controlButtons = ["red", "aqua", "Chartreuse", "orange", "brown", "HotPink", "yellow", "grey", "black", "white"]
const DrawBoard = () =>{

    let colCount = 27
    let rowCount = 14

    let rowArray = [];
    let buttonArray = [];

    const [currentColour, setCurrentColour] = useState("red");

    const handleButtonClick = (event) => {
        event.target.style.backgroundColor = currentColour;
    };

    const handleInput = (event) => {
        setCurrentColour(event.target.value);
    };

    for (let rownum = 0; rownum < rowCount; rownum++) {
        for(let colnum = 0; colnum < colCount; colnum++){
            rowArray.push(<StyledColumn count={colCount}>
                            <StyledButton onClick={handleButtonClick} key={colnum + rownum*colCount}></StyledButton>
                          </StyledColumn>
                         );
        }
        buttonArray.push(<Row>{rowArray}</Row>);
        buttonArray.push('\n');
        rowArray = [];
    }
    return(
        <>
        <StyledContainer>
            <Row>
                <Heading1>Drawing Board</Heading1>
            </Row>
            
            <StyledRow>
                {buttonArray}
            </StyledRow>
            <Heading5>Choose a colour:</Heading5>
            <Row>
                <Column count={controlButtons.length+1}>
                    <ControlColumn>
                        <input type="color" value={"white"} onChange={handleInput} />
                        Pick your own Colour
                    </ControlColumn>
                </Column>
                {controlButtons.map((buttonColour) => {
                    return(
                        <Column count={controlButtons.length+1}>
                            <ControlColumn>
                                <StyledControlButton startColour={buttonColour} onClick={() => setCurrentColour(buttonColour)}></StyledControlButton>
                            </ControlColumn>
                        </Column>
                    )
                })}
            </Row>
        </StyledContainer>

        
        </>

    )
}

export default DrawBoard