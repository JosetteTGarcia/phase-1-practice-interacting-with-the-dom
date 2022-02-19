let timer = document.getElementById('counter');
let seconds = 0;
let isPaused = false;


function countSeconds() {
  pauseCounter()
  if (!isPaused){
    seconds += 1;
    timer.innerText = seconds;
  }
}
let count = setInterval(countSeconds, 2000);

function subtractCounter(){
  document.addEventListener('click', (event) => {
    if (event.target.id === 'minus'){
      seconds -= 1;
    }
  })
}

function addCounter(){
  document.addEventListener('click', (event) => {
    if (event.target.id === 'plus'){
      seconds += 1;
    }
  })
}

function pauseCounter(){
  const buttonText = document.getElementById("pause")
  document.addEventListener('click', (event) => {
    if (event.target.id === 'pause'){
      buttonText.innerText = "resume";
      isPaused = true
    } else if (buttonText.innerText === 'resume'){
        buttonText.innerText = "pause";
        isPaused = false
      }
      })
    }



subtractCounter()
addCounter()