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
        name: $("#name").val().trim(),
        message: $("#message").val().trim(),
        created: Date.now(),
      },
      success: function(data){
      alert('Your message has been successfully sent.');
    }
    })
    // console.log(data);
    clearData()
    });
    
    function clearData () {
      data: [{
        name: $("#name").val(""),
        message: $("#message").val("")
      }]
    }