// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    document.getElementById("navbarjs").style.height = "80px";
   // document.getElementById("logojs").style.width = "50%";
    document.getElementById("logojs").src="images/Logobreve.png";
    //change image g&g
  } else {
    document.getElementById("navbarjs").style.height = "150px";
    document.getElementById("logojs").src="images/logoG.png";
   // document.getElementById("logojs").style.width = "60%";
  }

  //ANIMAZIONI MARCHE

  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
    const element = document.querySelectorAll(".my-element");
    var i;
    for (i = 0; i < element.length; i++) {
      if(element[i]==0)
      element[i].classList.add('rebecca');
      if(element[i]==1)
      element[i].classList.add('magna-grecia');
      if(element[i]==2)
      element[i].classList.add('marea');
      if(element[i]==3)
      element[i].classList.add('bysimon');
      if(element[i]==3)
      element[i].classList.add('marako');
      if(element[i]==4)
      element[i].classList.add('timberland');
      if(element[i]==5)
      element[i].classList.add('antica_murrina');

      element[i].classList.remove('visible');
    }
  }
  else {
    const element = document.querySelectorAll(".my-element");
    var i;
    for (i = 0; i < element.length; i++) {
      element[i].classList.remove('animate__animated', 'animate__rotateIn');
      element[i].classList.add('visible');  }
  }

  //Animazione SFONDO marche

  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
  {
    const sfondofade = document.querySelector(".sfondofade");
    sfondofade.classList.remove('hidden', 'animate__animated', 'animate__fadeOutLeft','hidden');
    sfondofade.classList.add('animate__animated', 'animate__fadeInLeft');

  }
  else
  {
    const sfondofade = document.querySelector(".sfondofade");
    sfondofade.classList.remove('animate__animated', 'animate__fadeInLeft');
    sfondofade.classList.add( 'animate__animated', 'animate__fadeOutLeft','hidden');
  }

}
