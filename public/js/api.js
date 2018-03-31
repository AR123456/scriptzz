
$(document).on("mouseleave", ".modal-content", function(event){
  console.log('mouseleave medbutton');
  
  $("#mymodal").modal("hide");
});
$(document).on("mouseover", "#medButton", function(event){
console.log('#medButton clicked');
$("#mymodal").modal("show");
    var search = $(this).val().trim()
    console.log(search)
        $.ajax({
            url: "https://api.fda.gov/drug/label.json?search=openfda.brand_name:"+ search + "&limit=1",
            method: "GET"
          }).done(function(response) { 
            console.log(response.results)
            $(".modal-content").html("Generic Name: " + response.results[0].openfda.generic_name + "<br><br>" + response.results[0].dosage_and_administration[0] + "<br><br>" + response.results[0].indications_and_usage[0] + "<br><br>")
          })
        })

$(document).on("click", "#deactivate", function(event){
    var id = $(this).data("id");
    console.log(id);
    var newActive = $(this).data("inactive");

    var newActiveState = {
      active: false
    };

    //Send the PUT request
    $.ajax("/api/scriptz/" + id, {
      type: "PUT",
      data: newActiveState
    }).then(function(){
      console.log ("changed active to ", newActiveState);
      
    })
    // Reload the page to get the updated list
      location.reload();
  });

