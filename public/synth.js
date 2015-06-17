// SYNTH JS

window.AudioContext = window.AudioContext || window.webkitAudioContext;
  var myAudioContext = new window.AudioContext();
  var osc = document.getElementById("osc");

//Oscillator # 1 Sine
  osc.onmousedown = function() {
    var oscPitch = document.getElementById('oscPitch').value;
    oscillator = myAudioContext.createOscillator(), //creates the oscillator
    oscillator.type = 'sine';
    oscillator.frequency.value = oscPitch;
    oscillator.connect(myAudioContext.destination); //connects it to output
    oscillator.start(0);
  };

  osc.onmouseup = function() {
    oscillator.disconnect();
  };

//Oscillator # 2 Square
var osc2 = document.getElementById("osc2");
  osc2.onmousedown = function() {
    var oscPitch = document.getElementById('oscPitch2').value;
    oscillator = myAudioContext.createOscillator(), //creates the oscillator
    oscillator.type = 'square';
    oscillator.frequency.value = oscPitch;
    oscillator.connect(myAudioContext.destination); //connects it to output
    oscillator.start(0);
  };

  osc2.onmouseup = function() {
    oscillator.disconnect();
  };

//Oscillator # 3 Sawtooth
var osc3 = document.getElementById("osc3");

  osc3.onmousedown = function() {
    var oscPitch = document.getElementById('oscPitch3').value;
    oscillator = myAudioContext.createOscillator(), //creates the oscillator
    oscillator.type = 'sawtooth';
    oscillator.frequency.value = oscPitch;
    oscillator.connect(myAudioContext.destination); //connects it to output
    oscillator.start(0);
  };

  osc3.onmouseup = function() {
    oscillator.disconnect();
  };

//Oscillator # 4 Triangle
var osc4 = document.getElementById("osc4");

  osc4.onmousedown = function() {
    var oscPitch = document.getElementById('oscPitch4').value;
    oscillator = myAudioContext.createOscillator(), //creates the oscillator
    oscillator.type = 'triangle';
    oscillator.frequency.value = oscPitch;
    oscillator.connect(myAudioContext.destination); //connects it to output
    oscillator.start(0);
  };

  osc4.onmouseup = function() {
    oscillator.disconnect();
  };
