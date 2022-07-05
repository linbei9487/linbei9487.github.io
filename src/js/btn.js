document.addEventListener('DOMContentLoaded',function(){
  var btn1 = document.createElement('button');
  btn1.id=("buttontop");
  btn1.className="myBtn";
  btn1.title="Go to top";
  btn1.innerHTML="Top";
  btn1.onclick=topFunction;
  var btn2 = document.createElement('button');
  btn2.id=("buttonbottom");
  btn2.className="myBtn";
  btn2.title="Go to Bottom";
  btn2.innerHTML="End";
  btn2.onclick=bottomFunction;
  document.body.insertAdjacentElement("afterbegin", btn1);
  document.body.insertAdjacentElement("afterbegin", btn2);
  //Get the button
  // var mybutton = document.getElementById("buttontop");
  document.getElementById("buttonbottom").style.display = "block"
  document.getElementById("buttontop").style.display = "none"
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
  })
