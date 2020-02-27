// mobile dropdown

$(document).ready(function () {
    $('.mobile-menu').click(function () {
        $("#nav-back").toggleClass("open");
    });
});

//------------------------------------*****************************************Log and sign

// header-log-in
document.getElementById('header-log-in').addEventListener('click',
    function () {
        document.querySelector('.log-modal').style.display = 'flex';
    });

document.getElementById('log-close').addEventListener('click',
    function () {
        document.querySelector('.log-modal').style.display = 'none';
    }
);


// drop-log-in
document.getElementById('drop-log-in').addEventListener('click',
    function () {
        document.querySelector('.log-modal').style.display = 'flex';
    });

document.getElementById('log-close').addEventListener('click',
    function () {
        document.querySelector('.log-modal').style.display = 'none';
    }
);


//header-sign-up
document.getElementById('header-sign-up').addEventListener('click',
    function () {
        document.querySelector('.sign-modal').style.display = 'flex';
    });
document.getElementById('sign-close').addEventListener('click',
    function () {
        document.querySelector('.sign-modal').style.display = 'none';
    });


//header-sign-up
document.getElementById('drop-sign-up').addEventListener('click',
    function () {
        document.querySelector('.sign-modal').style.display = 'flex';
    });
document.getElementById('sign-close').addEventListener('click',
    function () {
        document.querySelector('.sign-modal').style.display = 'none';
    });
//acordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("acc-active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 720 || document.documentElement.scrollTop > 720) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}