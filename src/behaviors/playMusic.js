import jibo from 'jibo';

let tts = jibo.tts;
let audio = document.getElementById('audiotag1');
audio.src = "http://106.187.36.135/audio1" +'.mp3';
audio.load();

switch (action) {
  case "play":
    audio.play();
    tts.speak("ok, I will play song");
    break;
  case "stop":
    audio.pause();
    tts.speak("Ok, I will stop song");
    break;
  default:
}
