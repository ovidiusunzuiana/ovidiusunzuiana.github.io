document.getElementById("id_business_version").innerHTML="Business version: 2018.11.12.0";
document.getElementById("id_button").addEventListener("click", start);


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

     var c={audio:true, video:true};
 
	navigator.mediaDevices.getUserMedia(c).then(on_success).catch(on_failure);
	 
	 
 }