function players(element) {
   if (list.childElementCount===5) {
        alert('The Team is Fulfilled sorry!')
   }else{
    const list = document.getElementById('list')
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText = element;
    list.appendChild(li);
    return li
   }


}

document.getElementById('btn1').addEventListener('click',function(){
    const heading = document.getElementById('name');
    element = heading.innerText;
    players(element);
})
document.getElementById('btn2').addEventListener('click',function(){
    const heading = document.getElementById('name2');
    element = heading.innerText;
    players(element);
})
document.getElementById('btn3').addEventListener('click',function(){
    const heading = document.getElementById('name3');
    element = heading.innerText;
    players(element);
})
document.getElementById('btn4').addEventListener('click',function(){
    const heading = document.getElementById('name4');
    element = heading.innerText;
    players(element);
})
document.getElementById('btn5').addEventListener('click',function(){
    const heading = document.getElementById('name5');
    element = heading.innerText;
    players(element);
})
document.getElementById('btn6').addEventListener('click',function(){
    const heading = document.getElementById('name6');
    element = heading.innerText;
    players(element);
})

function buttonDisabled(element) {
    document.getElementById(element).disabled = true;
    document.getElementById('disabled').disabled = false;

}

document.getElementById("btn-calc").addEventListener('click',function(){
    const perplayer = document.getElementById('per-player');
    const getcatch = perplayer.value;
    const cost = getcatch * 5;
    const expense = document.getElementById('player-expense');
    expense.innerText = cost;
    
})

document.getElementById('btnss').addEventListener('click', function(){
    const getManager = document.getElementById("getmanagers");
    const mangerCost = getManager.value;
    const ParseMangerCost = parseFloat(mangerCost);
    
    const getcoach = document.getElementById('getcoach');
    const coachcost = getcoach.value;
    const ParseCoachCost = parseFloat(coachcost);

    const expense = document.getElementById('player-expense');
    const expanseValue = expense.innerText;
    const ParseExpenseValue = parseFloat(expanseValue);
    
    const finalCost = document.getElementById('final-cost');
    finalCost.innerText = ParseMangerCost + ParseCoachCost + ParseExpenseValue; 
})