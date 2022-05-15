import React,{useState,useRef,useEffect} from 'react';

function RefDemo(props) {
    const [inputVal,setInputVal]=useState("");
    const count = useRef(0);
    useEffect(()=>{
        count.current=count.current+1;
    });
    return (
        <div>
            <input type="text" value={inputVal} onChange={(e)=>{setInputVal(e.target.value)}}></input>

        <h1>{count.current}</h1>
        </div>
    );
}

export default RefDemo;