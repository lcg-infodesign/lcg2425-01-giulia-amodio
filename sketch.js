let cellSize = 100; // dimensione fissa per ogni quadratino

let colors = [ [83, 77, 154], [63, 104, 201], [194, 31, 38], [26, 36, 35], 
[0, 153, 220], [216, 193, 14], [233, 123, 44], [1, 157, 109], 
[1, 118, 83], [5,88,192], [197, 125, 179], [165, 70, 104]]
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke () //disabilita i i contorni delle forme, 
  //in modo che i cerchi e i quadrati vengano disegnati senza bordo.
  noLoop();
  
}

function draw() {
  background (255)
  
  //Calcolo quante celle ci sono su ogni lato del canvas
  let cols= Math.floor (width / cellSize) //numero di colonne
  let rows =Math.floor (height/cellSize) //numero di righe
  //(Math.floor() è una funzione incorporata in JavaScript 
  //che arrotonda un numero decimale all'intero più grande che è inferiore o uguale al numero dato.
  // In altre parole, questa funzione "tronca" i decimali e restituisce solo la parte intera del numero).

  // Calcola il padding uniforme
  let paddingX = (width - cols * cellSize) / 2;
  let paddingY = (height - rows * cellSize) / 2; 

  //doppio ciclo for per disegnare la griglia
  // Questi due cicli for permettono di iterare 
  //sia lungo l'asse x (orizzontale) che lungo l'asse y (verticale).
  //il ciclo esterno x (asse orizzontale) si occupa delle colonne
  //il ciclo interno y (asse verticale)si occupa delle righe
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      let posX = paddingX + x * cellSize; //posizione di partenza orizzontale di ogni cella 
      let posY = paddingY +y * cellSize; //posizione di partenza in verticale di ogni cella

      // Disegna sempre un quadrato colorato come sfondo
      let bgColor = randomColor();
      fill(bgColor);
      rect(posX, posY, cellSize, cellSize);

      // Genera un colore diverso da quello di sfondo
      let shapeColor = randomColorDifferentFrom(bgColor);

      // Disegna sopra il quadrato un cerchio o un quadrato più piccolo
      if (random() > 0.5) {
        fill(shapeColor);
        ellipse(posX + cellSize / 2, posY + cellSize / 2, cellSize * 0.8, cellSize * 0.8);
      } else {
        fill(shapeColor);
        rect(posX + cellSize * 0.15, posY + cellSize * 0.15, cellSize * 0.7, cellSize * 0.7);
      }
    }
  }
}

function randomColor() {
  let index = Math.floor(random(colors.length)); // Ottieni un indice casuale
  let c = colors[index]; // Ottieni il colore come array
  return color(c[0], c[1], c[2]); // Converti l'array in un colore con color(r, g, b)
}

// Funzione per ottenere un colore diverso da quello di sfondo
function randomColorDifferentFrom(bgColor) {
  let newColor;
  do {
    newColor = randomColor();
  } while (newColor.toString() === bgColor.toString()); // Confronta i colori come stringhe
  return newColor;
}

// Funzione per ridimensionare il canvas quando la finestra cambia dimensioni
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Aggiorna il canvas alla nuova dimensione della finestra
  redraw(); // Ridisegna la griglia con la nuova dimensione
}


