let classifier;
let label = 'listening...';
let fondo;
// Teachable Machine model URL:
let soundModel = "https://teachablemachine.withgoogle.com/models/3WGOk0E8C/";
let FREC_MIN = 100;
let FREC_MAX = 700;
let AMP_MIN = 0.02;
let AMP_MAX = 0.1;
let vol;
let mic;
let pitch;
let audioContext;
let gestorAmp;
let gestorPitch;
let amp;
let haySonido = false;
let antesHabiaSonido = false;
let antesHabiaFrec = false;
let frecuencia;
let frecuenciaAnterior;
let estado = "inicio";
const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
let pg;
let cuadr;
let cuad;
let cuadDibujado = false;
let fondoDibujado = false;
function preload(){
  classifier = ml5.soundClassifier(soundModel + 'model.json');
  cuadimg = loadImage('img/cuadradoblanco.png')
  diagimg = loadImage('img/diagblanco.png')
  rectimg = loadImage('img/rect.png')
  cuad1 = loadImage('img/cuad1.png')
  cuad2 = loadImage('img/cuad2.png')
  cuad3 = loadImage('img/cuad4.png')
  cuad4 = loadImage('img/cuad5.png')
  cuad5 = loadImage('img/cuad6.png')
}

function setup() {
  pg = createGraphics(600,600);
  cuadr = createGraphics(600,600);
  fondo = new Fondo();
  frameRate(60)
  translate(600/2,600/2)
  createCanvas(600, 600);
  cuad = new Cuad();
  inicio();
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);

  userStartAudio();

  gestorAmp =  new GestorSenial( AMP_MIN, AMP_MAX);
  gestorPitch = new GestorSenial( FREC_MIN, FREC_MAX);

  antesHabiaSonido = false;
  classifier.classify(gotResult);
}

function draw() {
  //se dibuja el fondo
  image(pg,0,0);
   //se dibujan los cuadrados
  image(cuadr,0,0);
  let vol = mic.getLevel();
  gestorAmp.actualizar(vol);
  let valorFiltrado = gestorPitch.filtrada;
  haySonido = gestorAmp.filtrada > 0.1; // umbral de ruido que define el estado haySonido
  let inicioElSonido = haySonido && !antesHabiaSonido; // evendo de INICIO de un sonido
  let finDelSonido = !haySonido && antesHabiaSonido; // evento de fIN de un sonido
  if(inicioElSonido){ //Evento
  }
  if(haySonido){ //Estado
}
  if(finDelSonido){//Evento
    cuadDibujado = false;
    fondoDibujado = false;
  }
if(estado == "inicio"){
    if (label == 'aplauso' && !fondoDibujado){
     fondo.colorFon();
     fondoDibujado= true;
      label = 'Ruido de fondo';
    } else if (label == 'shh' && !cuadDibujado) {
      cuad.dibujar(cuadr);
      cuadDibujado = true; // Marca el cuad como dibujado
      label = 'Ruido de fondo'
    }else if (label == 'Ruido de fondo'){
    }
  }
console.log(label);
  antesHabiaSonido = haySonido;
  let frec = map(gestorPitch.filtrada, 0, 1, FREC_MIN, FREC_MAX);
}


function inicio(){
  fondo.colorFon();
  cuad.dibujar(cuadr);
}
function startPitch() {
  pitch = ml5.pitchDetection(model_url, audioContext , mic.stream, modelLoaded);
}
function modelLoaded() {
  getPitch();
}
function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {

      gestorPitch.actualizar(frequency);    
      //console.log(frequency);
    } 
    getPitch();
  })
}
function gotResult(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
}