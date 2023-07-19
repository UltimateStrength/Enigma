////////////////////
//Importants Script (In General)
///////////////////

//Audio Loop Script
var myAudio = document.getElementById("myAudio");

  function reproduzirSom() {
    myAudio.volume = 0.020; 
    myAudio.play();
  }

  document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible") {
      reproduzirSom();
    } else {
      myAudio.pause();
    }
  });

  window.addEventListener("blur", function() {
    myAudio.pause();
  });

  document.addEventListener("DOMContentLoaded", reproduzirSom);

//Inspect Block Filter
document.addEventListener("keydown", function (e) {
    if (e.key === "F12") {
        e.preventDefault();
    }
});
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);
