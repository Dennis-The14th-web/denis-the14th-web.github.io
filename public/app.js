/* Note Taker (18.2.6)
 * front-end
 * ==================== */
  
  // When the #btn-submit button is clicked
  $(document).on("click", "#btn-submit", () => {
    // AJAX POST call to the submit route on the server
    // This will take the data from the form and send it to the server
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/submit",
      data: {
        name: $("#name").val(),
        mesage: $("#mesage").val(),
        message: $("#message").val(),
        created: Date.now(),
      }
    })
    alert("message was successfully sent"); 
    clearData()
    });
    
    function clearData () {
      data: [{
        name: $("#name").val(""),
        mesage: $("#mesage").val(""),
        message: $("#message").val("")
      }]
    }