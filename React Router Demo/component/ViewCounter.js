import React,{useContext, useState} from 'react';
import { CounterContext } from './Context';

function ViewCounter(props) {
    var item = useContext(CounterContext);
    console.log(item);
    return (
        <div>
            <h1 style={{textAlign:"center"}}>No of items are: {item}</h1>
        </div>
    );
}

export default ViewCounter;