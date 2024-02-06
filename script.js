// document.onload()
// It gets fired prior to loading of images and other external content. document.onload event is fired before the window.onload.


// window.onload()
// It gets fired when the complete page loads, which includes images, scripts, css, etc.





window.onload = function (){
   var seconds = 00;
   var tens = 00;
   var appendsec = document.querySelector("#sec");
   var appendtens =document.querySelector("#tens");
   var start = document.querySelector("#btn1");
   var stop = document.querySelector("#btn2");
   var reset = document.querySelector("#btn3");

 
   let interval ; 



   start.addEventListener("click",()=>{
    
    interval = setInterval(startTimer,10);
    // console.log("Arjun");
   });

   stop.addEventListener("click", ()=>{
    clearInterval(interval);

   });

   reset.addEventListener("click",()=>{
    
    tens = "00";
    seconds = "00";
    appendsec.innerHTML = "00";
    appendtens.innerHTML = "00";

   });

   function startTimer(){
      tens++;

      if(tens <= 9){
         appendtens.innerHTML = "0" + tens;
      }
      if(tens > 9){
         appendtens.innerHTML =  tens;

      }

      if(tens > 99){
     
         seconds++;
         appendsec.innerHTML = "0" + seconds;
         tens = 0;
         appendtens.innerHTML = "0" + 0;
      }
   
      if(seconds > 9){
         appendsec.innerHTML = seconds;
      }

   }

  



}













// difference between setTimeout and setInterval..


// setTimeout(expression, timeout); runs the code/function once after the timeout.

// setTimeout(function() { alert('Hello');}, 2000);      // this code will run only one time on browser...




// setInterval(expression, timeout); runs the code/function repeatedly, with the length of the timeout between each repeat.

// setInterval(function() { alert('Hello');}, 1000);      // this code will run unlimited time on browser... 





// difference between clearTimeout and clearInterval...

// The clearTimeout() method clears the time out that has been previously set by the setTimeout() function.

// The clearInterval() method clears the interval which has been previously set by the setInterval() function.

