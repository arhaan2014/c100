var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();
  function start() { 
    document.getElementById("textbox").innerHTML = "";
   recognition.start();
}
 recognition.onresult = function(event) { console.log(event);
     var Content = event.results[0][0].transcript;
      document.getElementById("textbox").innerHTML = Content;
       console.log(Content)
 
       if(Content =="take my selfie")
       {
         console.log("taking selfie --- ");
         speak();
       }
    }
   
       
 
       function speak(){
        var synth = window.speechSynthesis;
        Webcam.attach(camera);
        setTimeout1(function(){
            img_id="selfie1";
            take_snapshot();
            speak_data = "Taking your selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis);
            save();
        },5000);
        }
        setTimeout2(function(){
            img_id="selfie2";
            take_snapshot();
            speak_data = "Taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis);
            save();
        },10000);
        setTimeout3(function(){
            img_id="selfie3";
            take_snapshot();
            speak_data = "Taking your next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data); 
        synth.speak(utterThis);
            save();
        },15000);
        
        
       
        Webcam.set({
            width:360,
            height:250,
            image_format : 'png',
            png_quality:90
        });
          
        camera = document.getElementByID("camera");
        function take_snapshot()
        {
            Webcam.snap(function(data_uri)
            {
                if (img_id=="selfie1"){
                document.getElementById("result1").innerHTML='<img id="selfie_image1" src="'+data_uri+'">';
                }
                if (img_id=="selfie2"){
                document.getElementById("result2").innerHTML='<img id="selfie_image2" src="'+data_uri+'">';
                }
                if (img_id=="selfie3"){
                document.getElementById("result3").innerHTML='<img id="selfie_image3" src="'+data_uri+'">';
                }
            });
        }
  function save()
  {
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
  }
  function save()
  {
    link=document.getElementById("link2");
    image=document.getElementById("selfie_image2").src;
    link.href=image2;
    link.click();
  }
  function save()
  {
    link=document.getElementById("link3");
    image=document.getElementById("selfie_image3").src;
    link.href=image3;
    link.click();
  }