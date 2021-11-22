prediction="";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    })
}

console.log("ml5 version:", ml5.version);

classifier= ml5.imageClasssifier("https://teachablemachine.withgoogle.com/models/WZ_RqUaf3/model.json",modelLoaded);

function modelLoaded() {
    console.log("model Loaded");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The Gesture is" + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}