
export const setBudget= (amount=0,expenses=0) =>{
    console.log(amount,expenses)
    return{
        type:'SET_BUDGET',
        amount,
        expenses
    }

}
