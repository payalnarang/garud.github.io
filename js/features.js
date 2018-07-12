// DIRTY Responsive pricing table JS

$( ".features ul" ).on( "click", "li", function() {
  var pos = $(this).index()+2;
  $(".features tr").find('td:not(:eq(0))').hide();
  $('.features td:nth-child('+pos+')').css('display','table-cell');
  $(".features tr").find('th:not(:eq(0))').hide();
  $('.features li').removeClass('active');
  $(this).addClass('active');
});

// Initialize the media query
  var mediaQuery = window.matchMedia('(min-width: 640px)');

  // Add a listen event
  mediaQuery.addListener(doSomething);

  // Function to do something with the media query
  function doSomething(mediaQuery) {
    if (mediaQuery.matches) {
      $('.features .sep').attr('colspan',5);
    } else {
      $('.features .sep').attr('colspan',2);
    }
  }

  // On load
  doSomething(mediaQuery);