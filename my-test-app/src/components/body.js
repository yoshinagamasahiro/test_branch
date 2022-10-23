import React from "react";
import styled from "styled-components";

const Button = styled.button`
color: red;
`;


function AppBody() {
    return(
        <Collect>
        <h1>りんごは黄色い</h1>
        <Button>
            テスト
        </Button>
        </Collect>
        
    );
}

const Collect = styled.div`
display: block;`
export default AppBody;

