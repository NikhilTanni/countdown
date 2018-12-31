$(document).ready( function() {
  $('#clock12').countdown(new Date(2019, 00, 01))
   .on('update.countdown', function(event) {
   console.log(event);
     var format = '<span id="hours">%H<span id="hr_id">Hours</span></span><span id="mins">%M<span id="mn_id">Min</span></span><span id="secs">%S<span id="sc_id">Sec</span></span>';
     if(event.offset.days > 0) {
       format = '%-d day%!d ' + format;
     }
     if(event.offset.weeks > 0) {
       format = '%-w week%!w ' + format;
     }
    $(this).html(event.strftime(format));
   })
   .on('finish.countdown', function(event) {
     $(this).html('<span id="done_timer">HAPPY NEW YEAR</span>')
       .parent().addClass('disabled');
   });
});


function readURL(input) {
   if (input.files && input.files[0]) {
       var reader = new FileReader();

       reader.onload = function (e) {
           $('#body')
               .css('background-image', 'url('+e.target.result+")");
               console.log(e.target.result);
       };

       reader.readAsDataURL(input.files[0]);
   }
  }


  function init_fun(){
    // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  }
