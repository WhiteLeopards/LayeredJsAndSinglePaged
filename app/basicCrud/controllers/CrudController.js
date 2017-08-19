
$.getScript("../app/basicCrud/services/CurdService.js", function() {
$.getScript("../app/basicCrud/Entities/customer.js", function() {


  $( "#addCustomerSubmit_wl" ).click(function()
  {
    var addCustomerName_wl =document.getElementById("addCustomerName_wl").value;
    //alert("controller "addCustomerName_wl);
    var customerToAdd = new Customer(addCustomerName_wl,"Rally","sidath@gmail.com",0112576890);
    //alert("controller ");
    addCustomerFormValidator_wl(customerToAdd);
    succsesfullySavedAlert();
  });


});});
/*$( "#addCustomerSubmit_wl" ).click(function() {
  alert( "Handler for  called." );
});



function submitNewCustomer() {
  //document.getElementById("myCheck").click();
  alert('click event occured2');
}*/
