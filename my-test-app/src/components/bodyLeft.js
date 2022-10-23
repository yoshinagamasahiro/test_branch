import React from "react";
import styled from "styled-components";

const Button = styled.button`
color: red;
`;

function AppBodyLeft() {
    return(
        <Collect>
        <h1>りんごは赤い</h1>
        <Button>
            テスト
        </Button>
        </Collect>
    );
}

const Collect = styled.div`
display: block;`
export default AppBodyLeft;

