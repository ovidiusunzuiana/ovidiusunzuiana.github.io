document.getElementById("id_business_version").innerHTML="Business version: 2018.11.12.0";
document.getElementById("id_button").addEventListener("click", start);
 document.getElementById("id_video").addEventListener("touchstart",on_touch);
 document.getElementById("id_video").addEventListener("mousedown",on_touch);
 
 function on_touch(e)
 {
	  var canvas=document.getElementById("id_canvas");
	  var context=canvas.getContext("2d");
	  var video=document.getElementById("id_video");
	  context.drawImage(video, 0, 0);
	 
 }


  function on_success(e)
  
  {

  document.getElementById("id_video").srcObject=e;
	  
  }
  
  
    function on_failure(e)
	{
		
	alert("Eroare conectare");		
			
		
	}




 function start(e)
 
 {

     var c={audio:true, video: {facingmode: "environment"}};
	 
 
	navigator.mediaDevices.getUserMedia(c).then(on_success).catch(on_failure);
	 
	 
 }