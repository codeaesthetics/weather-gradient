var weather;
function preload() {
  var url = 'http://api.wunderground.com/api/2bc138538c42e1a7/conditions/q/CA/San_Francisco.json';
  weather = loadJSON(url);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  
  for(var x=0;x>windowWidth;x++){
    push();
    stroke(126);
    line(x, 12, 85, 75);
    pop();
  }
    
  // get the humidity value out of the loaded JSON
  var humidity = floor(weather.current_observation.temp_f)+"°";
  push();
  fill(200,230,100);
  textSize(40);
  text(humidity,width*.5,width*.5);
  pop()
}

function windowResized(){
    createCanvas(windowWidth,windowHeight);

}