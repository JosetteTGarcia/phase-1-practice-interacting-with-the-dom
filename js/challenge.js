let timer = document.getElementById('counter');
let seconds = 0;
let isPaused = false;


document.addEventListener("DOMContentLoaded", () => {
  likeThat()
  makeAComment()
  pauseCounter()
  subtractCounter()
  addCounter()
})

function countSeconds() {
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
  buttonText.addEventListener('click', (event) => {
    if (buttonText.innerText === 'pause'){
      buttonText.innerText = "resume";
      isPaused = true
    } else if (buttonText.innerText === 'resume'){
        buttonText.innerText = "pause";
        isPaused = false
      }
      })
    }

    function makeAComment(){
      let form = document.getElementById('comment-input');
      form = document.querySelector('form');
      form.addEventListener('submit', (e) => {
        e.preventDefault()
        addComment(e.target["comment-input"].value)
      })
    }

  function addComment(comment){
    let p = document.createElement('p')
    p.textContent = comment
    document.querySelector('#list').appendChild(p)
  }

  function likeThat(){
    const heartButton = document.getElementById("heart")
    heartButton.addEventListener('click', () => {
      let p = document.createElement('p')
      p.textContent = `you liked the number ${seconds}`
      document.querySelector('#list').appendChild(p)
    })
  }
 
