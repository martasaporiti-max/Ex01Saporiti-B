function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(239, 239, 239);

  // Movimento orizzontale del rettangolo rosso
  // Va da sinistra a destra e poi torna indietro
  let xRosso = (sin(frameCount * 0.05) + 1) * 50;

  noStroke();

  // Rettangolo rosso animato
  fill(224, 31, 38);
  rect(xRosso, 0, 350, 300);

  // Rettangolo giallo fisso
  fill(247, 230, 70);
  rect(0, 450, 90, 350);

  // Rettangolo blu fisso
  fill(15, 71, 140);
  rect(350, 450, 300, 300);

  // Linee nere fisse
  stroke(0);
  strokeWeight(11);

  // Linee orizzontali
  line(0, 300, 800, 300);
  line(0, 450, 800, 450);

  // Linee verticali
  line(350, 0, 350, 800);
  line(90, 450, 90, 800);
  line(650, 450, 650, 800);

  // Linea orizzontale bassa
  line(350, 750, 650, 750);

  // Bordi esterni neri visibili nel tuo disegno
  line(0, 0, 350, 0);
  line(0, 0, 0, 300);
  line(0, 450, 0, 800);
}