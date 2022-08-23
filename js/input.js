document.getElementById('btn-calculate').addEventListener('click',function(){
    
    const perPlayerInputField=document.getElementById('par-player');
    const perPlayerInputAmountstring=perPlayerInputField.value;
    const perPlayerInputAmount=parseFloat(perPlayerInputAmountstring);


    perPlayerInputField.value='';

     if(isNaN(perPlayerInputAmount)){
          alert('you enter wrong number.please input valid number')
          return;
     }


    const updateValue=document.getElementById('added-player').innerText=playerArray.length;
    const updateValueAmount=parseFloat(updateValue);

     const newTotalAmount=updateValueAmount * perPlayerInputAmount;
    
    // balance 


     const balanceTotalElement=document.getElementById('expense-balance');
     const previousBalanceTotalString=balanceTotalElement.innerText;
     const previousBalanceTotal=parseFloat(previousBalanceTotalString);

     const newBalanceTotal=newTotalAmount;

     balanceTotalElement.innerText=newBalanceTotal;
     



document.getElementById('btn-calculate-total-balance').addEventListener('click',function(){


   
            // manager input 

    const perManagerInputField=document.getElementById('per-manager');
    const perManagerInputAmountstring=perManagerInputField.value;
    const perManagerInputAmount=parseFloat(perManagerInputAmountstring);


    perManagerInputField.value='';
    

    if(isNaN(perManagerInputAmount)){
     alert('you enter wrong number .please input valid number')
     return;
}

    const perCoachInputField=document.getElementById('per-coach');
    const perCoachInputAmountstring=perCoachInputField.value;
    const perCoachInputAmount=parseFloat(perCoachInputAmountstring);

    perCoachInputField.value='';



    if(isNaN(perCoachInputAmount)){
     alert('you enter wrong number.please input valid number')
     return;
}

                // total expense balance 

     const balanceTotalPlayerExpenseElement=document.getElementById('player-expense');
     const previousBalanceTotalExpenseString=balanceTotalPlayerExpenseElement.innerText;
     const previousBalanceTotalExpense=parseFloat(previousBalanceTotalExpenseString);


     const newBalanceExpenseTotal=perManagerInputAmount + perCoachInputAmount + previousBalanceTotalExpense + newBalanceTotal;

     balanceTotalPlayerExpenseElement.innerText=newBalanceExpenseTotal;

    
})
})