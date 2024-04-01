function stopVeronica() {
  recognition.stop();
  console.log("Recognition stopped");
}
function startVeronica() {
  recognition.start();
  console.log("Recognition started");
}

function performCalculation(expression) {
  try {
    const result = eval(expression);
    speak(`The result is ${result}`);
  } catch (error) {
    speak("");
  }
}
function getDatabase() {
  window.location.href = "database.html"
}

function Weatherapi() {

  const cityName = "General Trias";
  const API_KEY = "c0eb2f802ecda07fdfe338a88de49f2c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const windSpeed = data.wind.speed;
      const humidity = data.main.humidity;

      const weatherText = `The temperature in ${cityName} is ${temperature} degrees Celsius with ${weatherDescription}. Wind speed is ${windSpeed} meters per second and humidity is ${humidity} percent.`;


      var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });
      var utterance = new SpeechSynthesisUtterance(weatherText);
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}
function speak(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}
function ClosePageProtocol() {
  window.close();
}
function openAi() {
  window.open("https://chat.openai.com/", "_blank");
}
function openYouTube() {
  window.open("https://www.youtube.com/", "_blank");
}
function openFacebook() {
  window.open("https://www.facebook.com/", "_blank");
}
function openInstagram() {
  window.open("https://www.instagram.com/", "_blank");
}
function openTiktok() {
  window.open("https://www.tiktok.com/", "_blank");
}
function speakVeronica() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  var utterance = new SpeechSynthesisUtterance("Veronica Speaking");
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
  setTimeout(startVeronica, 2500);
}
function callVeronica2() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  var utterance = new SpeechSynthesisUtterance("How Can I Be Of Service!");
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
}
function callVeronica() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  var utterance = new SpeechSynthesisUtterance("For You Sir, Always");
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
  console.log("Calling Veronica")
  setTimeout(startVeronica, 2500);
}
function anythingElse() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  var utterance = new SpeechSynthesisUtterance("Will That Be All");
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
  setTimeout(startVeronica, 2500);
  
}
function thanks() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  var utterance = new SpeechSynthesisUtterance("As You Wish Boss");
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
  setTimeout(anythingElse, 2500);
}
function outputYes() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  var utterance = new SpeechSynthesisUtterance("As You Wish Boss");
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
}
function welcoming() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  var utterance = new SpeechSynthesisUtterance("Glad to be Here");
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
  setTimeout(startVeronica, 2500);
}
function speakFemale() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  var utterance = new SpeechSynthesisUtterance("This is a female voice.");
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);
}

function timeCheck() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  let timeString = "";

  if (hours > 0 && hours <= 12) {
    timeString =
      hours +
      " " +
      (hours === 1 ? "" : "") +
      "" +
      minutes +
      " " +
      (minutes === 1 ? "" : "") +
      " In the Morning, Boss";
  } else if (hours > 12 && hours <= 18) {
    timeString =
      hours -
      12 +
      " " +
      (hours - 12 === 1 ? "" : "") +
      "" +
      minutes +
      " " +
      (minutes === 1 ? "" : "") +
      " In the Afternoon, Boss";
  } else if (hours > 18) {
    timeString =
      hours -
      18 +
      " " +
      (hours - 1 === 1 ? "" : "") +
      "" +
      minutes +
      " " +
      (minutes === 1 ? "" : "") +
      " In the Evening, Boss";
  } else if (hours === 0) {
    timeString = " o hundred ";
  } else {
    timeString = "Noon";
  }

  speak("The time is " + timeString);
}

function speak(message) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(message);
  synth.speak(utterance);
  setTimeout(startVeronica, 1000);
}

function getTimeAndGreet() {
  var voices = window.speechSynthesis.getVoices();

  var femaleVoice = voices.find(function (voice) {
    return voice.name === "Microsoft Zira - English (United States)";

  });


  
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let period;
  let greeting;

  if (hour >= 5 && hour < 12) {
    period = "morning";
    greeting = "Good morning Boss!";
  } else if (hour >= 12 && hour < 18) {
    period = "afternoon";
    greeting = "Good afternoon Boss!";
  } else {
    period = "evening";
    greeting = "Good evening Boss!";
  }
  if (hour >= 22) {
    alarm = "It's Time to Sleep";
    const message = new SpeechSynthesisUtterance(alarm);
    window.speechSynthesis.speak(message);
  }

  hour = hour % 12 || 12;
  minute = minute < 10 ? "0" + minute : minute;

  var utterance = new SpeechSynthesisUtterance(
    `${greeting} It's ${hour}:${minute} in the ${period}.`
  );
  utterance.voice = femaleVoice || voices[0];
  window.speechSynthesis.speak(utterance);

  let speech = new SpeechSynthesisUtterance
  window.speechSynthesis.speak(speech);
  setTimeout(startVeronica, 1000);
}

const startButton = document.getElementById("startButton");
      const output = document.getElementById("output");

      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = "en-US";

      startButton.addEventListener("click", () => {
        recognition.start();
        output.innerHTML = "Listening...";
      });

      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript;
        output.innerHTML = "You said: " + result;
        if (result === "thanks veronica") {
          thanks();
        }
        if (result === "thank you") {
          thanks();
        } else if (result === "thank you veronica") {
          thanks();
        } else if (result === "thanks") {
          thanks();
        }
        if (result === "test female") {
          speakFemale()
        }
        if (result === "veronica") {
          speakVeronica();
          callVeronica2();
        }
        if (result === "hey veronica") {
          speakVeronica();
          callVeronica2();
        }
        if (result === "veronica you there") {
          callVeronica();
        }
        if (result.includes("protocolnumber1")) {
          var voices = window.speechSynthesis.getVoices();

          var femaleVoice = voices.find(function (voice) {
            return voice.name === "Microsoft Zira - English (United States)";
        
          });
        
        
          var utterance = new SpeechSynthesisUtterance("Confirmation Boss!");
          utterance.voice = femaleVoice || voices[0];
          window.speechSynthesis.speak(utterance);
        } else if (result === "no dont execute pn1") {
          anythingElse();
        } else if (result === "yes i confirm pn1") {
          var voices = window.speechSynthesis.getVoices();

          var femaleVoice = voices.find(function (voice) {
            return voice.name === "Microsoft Zira - English (United States)";
        
          });
        
        
          var utterance = new SpeechSynthesisUtterance("Executing Protocol Number One");
          utterance.voice = femaleVoice || voices[0];
          window.speechSynthesis.speak(utterance);
        } else if (result === "i'm sure pn1") {
          var voices = window.speechSynthesis.getVoices();

          var femaleVoice = voices.find(function (voice) {
            return voice.name === "Microsoft Zira - English (United States)";
        
          });
        
        
          var utterance = new SpeechSynthesisUtterance("Executing Protocol Number One");
          utterance.voice = femaleVoice || voices[0];
          window.speechSynthesis.speak(utterance);
        }
        if (result === "female") {
          speakFemale()
        }
        if (result === "activate veronica") {
          speakVeronica()
        }
        if (result === "go to sleep") {
          ClosePageProtocol()
        }
        if (result === "power down") {
          ClosePageProtocol()
        }
        if (result.includes("end program")) {
          ClosePageProtocol();
        } else if (result === "yes that will be all") {
          ClosePageProtocol();
        } else if (result === "close page") {
          ClosePageProtocol();
        }
        if (result.includes("weather")) {
          Weatherapi();
          setTimeout(startVeronica, 9000);
        }
        if (result.includes("hello")) {
          speakVeronica();
          callVeronica2();
        }
        if (result.includes("good morning")) {
          getTimeAndGreet();
        } else if (result === "morning veronica") {
          getTimeAndGreet();
        }
        if (result.includes("good afternoon")) {
          getTimeAndGreet();
        } else if (result === "afternoon veronica") {
          getTimeAndGreet();
        }
        if (result.includes("good evening")) {
          getTimeAndGreet();
        } else if (result === "evening veronica") {
          getTimeAndGreet();
        }
        if (result === "what time is it veronica") {
          timeCheck();
        }
        if (result === "what's the time veronica") {
          timeCheck();
        }
        if (result.includes("hi")) {
          speakVeronica();
          callVeronica2();
        } 
        if (result === "database") {
          getDatabase();
        }
        if (result.includes("Hey")) {
          speakVeronica();
          callVeronica2();
        }
        if (result.includes("open chat gpt")) {
          outputYes();
          setTimeout(openAi, 1500);
        }
        if (result.includes("open facebook")) {
          anythingElse();
          setTimeout(openFacebook, 2500);
        }
        if (result.includes("open instagram")) {
          anythingElse();
          setTimeout(openInstagram, 2500);
        }
        if (result.includes("open tiktok")) {
          anythingElse();
          setTimeout(openTiktok, 2500);
        }
        if (result.includes("open youtube")) {
          anythingElse();
          setTimeout(openYouTube, 2500);
        }
        if ((result === "welcome veronica")) {
          welcoming();
        } else {
          performCalculation(result);
        }
      };