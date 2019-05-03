$('.dropdown-submenu > a').on("click", function(e) {
  var submenu = $(this);
  $('.dropdown-submenu .dropdown-menu').removeClass('show');
  submenu.next('.dropdown-menu').addClass('show');
  e.stopPropagation();
});

$('.dropdown').on("hidden.bs.dropdown", function() {
  // hide any open menus when parent closes
  $('.dropdown-menu.show').removeClass('show');
});
$(document).ready(function(){
let v = $('.carousel-main .carousel-inner .carousel-item.active img').attr("src");
$("#j-main").css({
  'background-image': 'url('+v+')'  
});
});
$(".carousel-main .controls a").click(function(){
  if($('.carousel-main .carousel-inner .carousel-item').hasClass("active"))
  {
    let v = $('.carousel-main .carousel-inner .carousel-item').next('.active .col-12 .card img').attr("src");
    console.log(v);
    $("#j-main").css({
      'background-image': 'url('+v+')'  
    });
  }
});
