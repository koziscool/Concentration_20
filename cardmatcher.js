


$(document).ready( function() {
  console.log("koz");
  $("#grid-size").focus();
  $("#grid-size-button").click( function(e){
    e.preventDefault();
    console.log("tetris");
    var size = $("grid-size").val();
    matcherController.init(size);
    matcherView.updateGameView();
    $("#grid-size-form").hide();
  });
});
  




