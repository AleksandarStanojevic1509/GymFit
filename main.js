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


