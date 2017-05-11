document.addEventListener("touchstart", on_touch);
document.addEventListener("mousedown", on_touch);
 
 
 var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
 
 var recognition = new webkitSpeechRecognition();
 recognition.lang = 'en-US';

 
 function on_touch(e)
 {
	 recognition.start();
 }
 function on_end()
 {
	 recognition.stop();
 }
 
 recognition.onend = on_end();
 recognition.onsoundend = on_end();
 recognition.onspeechend = on_end();
 
 recognition.onresult = function (e){
	 document.getElementById("text").innerHTML = e.results[0][0].transcript + " " + e.results[0][0].confidence;
 }
 