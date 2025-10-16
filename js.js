const ball = document.getElementById("ball");
let x = 50, y = 50;
let dx = 3, dy = 3;
const ballSize = 50;

function moveBall() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  x += dx;
  y += dy;

  // Bounce off the walls
  if (x + ballSize > width || x < 0) dx = -dx;
  if (y + ballSize > height || y < 0) dy = -dy;

  ball.style.left = x + "px";
  ball.style.top = y + "px";

  requestAnimationFrame(moveBall);
}

moveBall();