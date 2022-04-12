$(document).ready(function () {
  $(".hides").hide();
  $(".readless").hide();
  $(".tutup").hide();
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    nav: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

function readmore() {
  $(".hides").show();
  $(".readless").show();
  $(".readmore").hide();
}
function readless() {
  $(".hides").hide();
  $(".readless").hide();
  $(".readmore").show();
}

function showfield() {
  $(".tutup").show();
}

$(".tutup").mouseleave(function () {
  $(this).fadeOut();
});

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    $("#brandlogo").hide();
  } else {
    $("#brandlogo").show();
  }
}

var x = window.matchMedia("(max-width: 700px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
