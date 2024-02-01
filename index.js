$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1200, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
  var width = $(window).width(); 
  
  window.onscroll = function(){
  if ((width >= 900)){
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          $("#middle").css("background-size","150% auto");
      }else{
          $("#middle").css("background-size","100% auto");        
      }
  }
  };
  
  setTimeout(function(){
      $("#loading").addClass("animated fadeOut");
      setTimeout(function(){
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display","none");
      },800);
  },1450);

  function createSquare() {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.width = `${Math.random() * 100}px`;
    square.style.height = square.style.width;
    square.style.left = `${Math.random() * 100}vw`;
  
    const footer = document.getElementById('footer'); // Replace 'footer' with the id of your footer
    footer.appendChild(square);
  
    setTimeout(() => {
      footer.removeChild(square);
    }, 5000);
  }
  
  setInterval(createSquare, 1000);


document.getElementById('back-to-top').addEventListener('click', function() {
  var header = document.getElementById('header');
  header.scrollIntoView({behavior: "smooth"});
});