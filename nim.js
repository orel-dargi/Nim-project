const number = document.getElementById('number');
const btn = document.querySelector('.btn');
const btnS = document.querySelector('.btnsmart');
const btnR = document.querySelector('.reset');
const useroutput = document.querySelector('.useroutput');
const pcoutput = document.querySelector('.pcoutput');
const output = document.querySelector('.result');



const smartPc = () => {
  return  (10 - +number.value)
}


function random1To9(){
  Math.floor(Math.random()*9)+1
  return Math.floor(Math.random()*9)+1
  
}
let pcTurn = random1To9();
console.log(random1To9());

let sum = 0;
let userTurn = true;
// function newRound() {
  //   let numInput = +number.value;
  //   sum += numInput;
  //   useroutput.innerText = sum;
  // }
  // btn.addEventListener('click', newRound)
  
function gameS(){
    btnR.classList.add('hide')
    btn.classList.add('hide')
    if(userTurn === true){
      number.classList.add('opacity')
      useroutput.classList.remove('opacity')
      let numInput = +number.value;
      sum += numInput;
      userTurn = false;
      useroutput.innerText = (`+ ${numInput}`);
      pcoutput.classList.add('opacity')
    }
    else{
      number.classList.remove('opacity')
      pcoutput.classList.remove('opacity')
      let smartnum = smartPc();
      sum += smartnum;
      pcoutput.innerText = (`+ ${smartnum}`);
      userTurn = true;
      useroutput.classList.add('opacity')
    }
    
    console.log(sum);
    output.innerText = sum;
    
    
    if(sum>=100){
      btnR.classList.remove('hide');
      btnS.removeEventListener('click', gameS)
      if(userTurn===false)
      useroutput.innerText = 'user win'
      else{
        pcoutput.innerText = 'pc win'
      }
      return;
    }
  }
btnS.addEventListener('click',gameS)
  
  

function game(){

  // btnS.classList.add('hide')
  btnR.classList.add('hide')
  if(userTurn === true){
    useroutput.classList.remove('opacity')
    let numInput = +number.value;
    sum += numInput;
    userTurn = false;
    useroutput.innerText = (`+ ${numInput}`);
    pcoutput.classList.add('opacity')

  }
  else{
    pcoutput.classList.remove('opacity')
    let randomnum = random1To9();
    sum += randomnum;
    pcoutput.innerText = (`+ ${randomnum}`);
    userTurn = true;
    useroutput.classList.add('opacity')
  }
  
  console.log(sum);
  output.innerText = sum;


  if(sum>=100){
    btnR.classList.remove('hide');
    btn.removeEventListener('click', game)
    if(userTurn===false)
      useroutput.innerText = 'user win'
    else{
      pcoutput.innerText = 'pc win'
    }
    return;
  }
}
btn.addEventListener('click', game);

const resetGame = () => {
  sum = 0;
  userTurn = true;
  number.value = '';
  output.innerText = ''
  btnS.addEventListener('click', gameS);
  btn.addEventListener('click', game);
  btn.classList.remove('hide');
  btnS.classList.remove('hide');
  pcoutput.classList.remove('opacity');
  useroutput.classList.remove('opacity');
  pcoutput.innerText = 'pc'
  useroutput.innerText = 'user'
  number.classList.remove('opacity')
  btnR.classList.add('hide')
}
btnR.addEventListener('click', resetGame);