import React, {useState, useEffect} from "react";
import styled from "styled-components";

function AppBodyRight() {
    const [count, setCount] =  useState(0);

    const test = () => {
        setCount(count + 1);
    };

    useEffect(()=>{
        alert("頑張ってんね")
    });

    if(count>50){
        alert("やりすぎだよ！！！！");
    }

    return(
        <Collect>
        <h1>現在の値は{count}です。</h1>
        <button onClick={test}>デブ</button>
        </Collect>
    );
}

const Collect = styled.div`
display: block;`
export default AppBodyRight;

