// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-1.8.3.min.js
//= require jquery-ui.min.js
//= require advanced-datatable/media/js/jquery.js
//= require bootstrap.min.js
//= require jquery.nicescroll.js
//= require jquery.scrollTo.min.js
//= require js.cookie.js
//= require jquery.dcjqaccordion.2.7.js

//= require bootstrap-inputmask/bootstrap-inputmask.min.js

//= require knockout-3.3.0.js
//= require jquery.validate.min.js

//= require lib/knockout-paging-master/dist/knockout-paging.min.js

//= require jquery-ui-1.9.2.custom.min.js
//= require jquery.sparkline.js
//= require owl.carousel.js
//= require jquery.customSelect.min.js
//= require respond.min.js
//= require jquery.dcjqaccordion.2.7.js
//= require common-scripts.js
//= require advanced-datatable/media/js/jquery.dataTables.js
//= require count.js
//= require gritter/js/jquery.gritter.js
//= require gritter.js
//= require global.js
//= require alertify

$(document).ready(function () {

    $("#share_buy").validate({
        rules: {
            "shares": {required: true,number: true}

        },
        messages: {
            "shares": {required: "Please enter the number of share"}

        }
    });


    $("#share_sell").validate({
        rules: {
            "shares": {required: true,number: true}
        },
        messages: {
            "shares": {required: "Please enter the number of share"}

        }

    });


    $("#project_validation").validate({
        rules: {
            "title": {required: true},
            "description": {required: true}
        },
        messages: {
            "title": {required: "Please enter a project title"},
            "description": {required: "Please enter a project description"}
        }
    });
  
$('#new_user').submit(function(e){ 
   if ($('#user_researcher').is(':checked')) {
       if($("#user_dln_no").val() == 0){
        alert("DLN  number is required.");
         e.preventDefault();
       }
       else if($("#user_dln_no").val().length < 14){
        alert("DLN  number field  must be equal to 14 digits.");
         e.preventDefault();
       }
       else if($("#user_dln_no").val().length > 14){
        alert("DLN number   field  must be less than 14 digits.");
         e.preventDefault();
       }

   }
});


});
 $(document).on('change', '#user_image', function() {
   var ext;
   ext = $(this).val().split('.').pop().toLowerCase();
   
   jpg_check = ext.indexOf("jpg");
   jpeg_check = ext.indexOf("jpeg");
   png_check = ext.indexOf("png");
   
   readURL1(this);
   });
   
   function readURL1(input) {
       if (jpg_check === 0 || jpeg_check === 0 || png_check === 0){
   
               if (input.files && input.files[0]) {
                   var reader = new FileReader();
                   reader.onload = function(e) {
                   $('#generate_img').attr('src', e.target.result);
                   }
   
                   reader.readAsDataURL(input.files[0]);
               }
       }
       else{
           $("#user_image").val('');
           alert("Invalid format! Only jpeg, jpg, and png are allowed.");
           $(this).val('');
       }
   }
