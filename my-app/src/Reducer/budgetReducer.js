import React from 'react';

function budgetReducer(data,action) {
    console.log("Reducer")
    switch(action.type){
        case 'SET_BUDGET':
            data=action.amount-action.expenses
            console.log(data)
            return data;
        default:
            return data;

    }
}

export default budgetReducer;