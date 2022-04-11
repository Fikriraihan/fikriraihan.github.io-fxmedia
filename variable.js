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
