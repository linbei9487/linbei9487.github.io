      //Get the button
      // var mybutton = document.getElementById("buttontop");
      
      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};
      
      function scrollFunction() {
        if (document.body.scrollTop > (document.body.scrollHeight/2) || document.documentElement.scrollTop > (document.documentElement.scrollHeight/2)) {
          document.getElementById("buttontop").style.display = "block";
          document.getElementById("buttonbottom").style.display = "none";
        } else {
          document.getElementById("buttontop").style.display = "none";
          document.getElementById("buttonbottom").style.display = "block";
        }
      }
      
      // When the user clicks on the button, scroll to the top of the document
      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
      // When the user clicks on the button, scroll to the bottom of the document
      function bottomFunction() {
        document.body.scrollTop = document.body.scrollHeight;
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
      }
