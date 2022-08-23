const playerArray=[];

function display(playerNumber){
const tableField=document.getElementById('player-name-field');
tableField.innerHTML='';
for(let i=0; i<playerNumber.length; i++){


    const playerName=playerArray[i].playerName;


    const tr=document.createElement('tr');

    tr.innerHTML= ` <th>${i+1}</th>
    <td>${playerName}</td>`;
   
    tableField.appendChild(tr);
   
    
    
}
}

function addToPlayer(element){

    const playerName=element.parentNode.parentNode.children[0].innerText;
    const playerObj={
        playerName:playerName
    }
    playerArray.push(playerObj);

  

    document.getElementById('added-player').innerText=playerArray.length;

    display(playerArray);
}