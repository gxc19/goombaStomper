const start = document.getElementById("start");
const goomba = document.getElementsByClassName("goomba");
const gPic = document.getElementById("gPic")
const timer = document.getElementById("timer")
const score = document.getElementById("score")
let scoreBoard = 0
let gameOver = false

start.addEventListener("click", ()=>{
  start.style.visibility = 'hidden'
  time()
  randomPick()
})

const time = () =>{
  let num = 5
  let countDown = setInterval(() =>{
    num--
    if(num === 0){
      clearInterval(countDown)
      start.innerHTML = 'Try again?'
      start.style.visibility = 'initial'
      gameOver = true
    }
    timer.innerHTML = `Timer: ${num}`
  }, 1000)
}

const randomPick = () =>{
  let rPicker = setInterval(() => {
    let rndGoomba = Math.floor(Math.random() * goomba.length)
    console.log(rndGoomba);
    goomba[rndGoomba].classList.add('up')
    setInterval(() => {
      goomba[rndGoomba].classList.remove('up')
    }, 2000)
    if(gameOver){
      clearInterval(rPicker)
      console.log("game over")
    }
  }, 1000)
  
}





// start.addEventListener("click", () => {
//   setInterval(() => {
//     let rndGoomba = Math.floor(Math.random() * goomba.length);
//     console.log(rndGoomba);
//     goomba[rndGoomba].classList.toggle("goombaUp");
//     goomba[rndGoomba].style.cursor = "pointer";
//   }, 1000);


// });

// gPic.addEventListener("click", ()=>{
//   gPic.src="images/deadGoomba.png"
// })

