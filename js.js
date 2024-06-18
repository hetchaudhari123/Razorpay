$(document).ready(function(){
    $("#carId").change(function(){
      var carId = $(this).val();
      $.ajax({
        url: 'getCarDetails.php',
        type: 'post',
        data: {car:carId},
        dataType: 'json',
        success:function(response){
          var len = response.length;
          if(len > 0){
            var make = response[0].make;
            var model = response[0].model;
            // Set this information in your HTML
            $("#carMake").text(make);
            $("#carModel").text(model);
          }
        }
      });
    });
  });
  
  