const start = document.getElementById("start");
const goomba = document.getElementsByClassName("goomba");
const gPic = document.getElementById("gPic")
const timer = document.getElementById("timer")
const score = document.getElementById("score")
let scoreBoard = 0

start.addEventListener("click", ()=>{
  start.style.visibility = 'hidden'
  time()
})

const time = () =>{
  let num = 30
  let countDown = setInterval(() =>{
    num--
    if(num === 0){
      clearInterval(countDown)
      start.innerHTML = 'Try again?'
      start.style.visibility = 'initial'
    }
    timer.innerHTML = `Timer: ${num}`
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

