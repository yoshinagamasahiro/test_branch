import React from "react";
import styled from "styled-components";

const Button = styled.button`
color: red;
`;

function AppBodyRight() {
    return(
        <Collect>
        <h1>りんごは青い</h1>
        <Button>
            テスト
        </Button>
        </Collect>
    );
}

const Collect = styled.div`
display: block;`
export default AppBodyRight;

