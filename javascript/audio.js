// //Create the audio tag
// const soundFile = document.createElement("audio");
// soundFile.preload = "auto";

// //Load the sound file (using a source element for expandability)
// const src = document.createElement("source");
// src.src = "url('./assets/sounds/letmedoitforyou.mp3')";
// soundFile.appendChild(src);

// //Load the audio tag
// //It auto plays as a fallback
// soundFile.load();
// soundFile.volume = 0.000000;
// soundFile.play();

// //Plays the sound
// function play() {
//    //Set the current time for the audio file to the beginning
//    soundFile.currentTime = 0.01;
//    soundFile.volume = volume;

//    //Due to a bug in Firefox, the audio needs to be played after a delay
//    setTimeout(function(){soundFile.play();},1);
// }

setTimeout(function() {
    document.addEventListener('click', function() {
        // do something if the user has moved the mouse
        window.open('https://youtu.be/V07lFxtJUbE')
      });
  }, 10000);

