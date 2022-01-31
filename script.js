const start = document.getElementById("start");
const goomba = document.querySelectorAll(".goomba");
// const gPic = document.getElementById("gPic");
const timer = document.getElementById("timer");
const score = document.getElementById("score");
let scoreBoard = 0;
let gameOver = false;

start.addEventListener("click", () => {
  start.style.visibility = "hidden";
  time();
  randomPick();
  gameOver = false;
});

const time = () => {
  let num = 15;
  let countDown = setInterval(() => {
    num--;
    if (num === 0) {
      clearInterval(countDown);
      start.innerHTML = "Try again?";
      start.style.visibility = "initial";
      gameOver = true;
    }
    timer.innerHTML = `Timer: ${num}`;
  }, 1000);
};

// randomly selects a goomba to pop up, if timer runs out it stops picking
const randomPick = () => {
  let rPicker = setInterval(() => {
    let rndGoomba = Math.floor(Math.random() * goomba.length);
    console.log(rndGoomba);

    goomba[rndGoomba].classList.add("up");
    setTimeout(() => {
      goomba[rndGoomba].classList.remove("up");
    }, 1200);
    if (gameOver) {
      clearInterval(rPicker);
      console.log("game over");
    }
  }, 1200);
};

for (let i = 0; i < goomba.length; i++){
  goomba[i].addEventListener("click", () => {
  goomba[i].src = "images/deadGoomba.png";
    setTimeout(() => {
      goomba[i].src = "images/goomba.png";
    }, 1200);
    console.log("bonk!");
    ++scoreBoard
    score.innerHTML = `Score: ${scoreBoard}`
  });
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