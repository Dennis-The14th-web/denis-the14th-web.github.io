
$("#btn-submit").on("click", (e) => {
    e.preventDefault();
    
    const name = $("#name").val().trim();
    const message = $("#message").val().trim();

    const data = {
      name,
      message,
    };

    $.post('/', data, () => {

      // show alert
     document.querySelector(".alert").style.display = "block" ;
  
  // hide alert after four seconds
     setTimeout(()=>{
     document.querySelector(".alert").style.display = "none" ;
     },4000);

      clearData()
    });

    });
    
    function clearData() {
      data: [{
        name: $("#name").val(""),
        message: $("#message").val("")
      }]
    }