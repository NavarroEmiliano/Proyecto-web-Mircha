const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    //Izquierda
    case 37:
      if(limitsBall.left > limitsStage.left) {
      e.preventDefault();
      x--;
      } ;
      break;
      //Arriba
      case 38:
        if(limitsBall.top > limitsStage.top){
          e.preventDefault();
          y--
      };
      break;
      //Derecha
      case 39:
        if(limitsBall.right < limitsStage.right){
        e.preventDefault();
        x++
      };
      break;
      //Abajo
      case 40:
        if(limitsBall.bottom < limitsStage.bottom){
        e.preventDefault();
        y++
      };
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px`;
}

/* ATAJOS DEL TECLADO */

export function shortcuts(e) {
  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta.");
  }

  if (e.key === "p" && e.altKey) {
    prompt("Haz lanzado un prompt.");
  }

  if (e.key === "c" && e.altKey) {
    confirm("Haz lanzado un confirm.");
  }
}
