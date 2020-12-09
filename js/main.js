//  Script For Top Button Start  
    
      //Get the button
      var mybutton = document.getElementById("myBtn");
      
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
          mybutton.style.display = "block";
        } else {
          mybutton.style.display = "none";
        }
      }
      
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      
//   Script For Top Button End  

// Script For Video Player Start
      var videoPlayer = document.getElementById("videoPlayer");
      var myVideo = document.getElementById("myVideo");

      function stopVideo(){
        videoPlayer.style.display = "none";
      }

      function playVideo(file){
        myVideo.src = file;
        videoPlayer.style.display = "block"; 
      }
// Script For Video Player End