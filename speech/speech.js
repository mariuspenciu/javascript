document.addEventListener("touchstart", on_touch);
document.addEventListener("mousedown", on_touch);
 
 
 var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
 
 var recognition = new webkitSpeechRecognition();
 recognition.lang = 'en-US';
 recognition.maxAlternative = 5;
 
 var recognition_started = false;
 
 function on_touch(e)
 {	
	if (!recognition_started){
	 recognition.start();
	 recognition_started = true;
	 
	}
	
 }
 function on_end()
 {
	 recognition.stop();
	 recognition_started = false;
 }
 
 recognition.onend = on_end;
 recognition.onsoundend = on_end;
 recognition.onspeechend = on_end;
 
 recognition.onresult = on_results;
 
 recognition.onresult = function (e){
	 var alternatives = e.results[0];
	 for (var i = 0; i < alternatives.length; i++)
	 document.getElementById("text").innerHTML += alternatives[i].transcript + " " + alternatives[i].confidence + "<br>";
 }
 