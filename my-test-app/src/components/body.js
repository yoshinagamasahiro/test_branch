import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
color: red;
`;


function AppBody() {
    const [count, setcount]=useState(0);
    const test =()=>{
        setcount(count+1);
    }
    return(
        <Collect>
        <h1>バナナの価格：{count}</h1>
        <Button onClick={test}>
            テスト
        </Button>
        </Collect>
        
    );
}

const Collect = styled.div`
display: block;`
export default AppBody;

