$(document).ready(function () {
  //make two functions to add and remove the class in the span
  function add() {
    $(".copied").addClass("bounce_effect");
  }
  function remove() {
    $(".copied").removeClass("bounce_effect");
  }

  //call the functions and copy the text on button click
  $(".copy_btn").click(function () {
    $(".copy_area").select();
    document.execCommand("copy");
    add();
    setTimeout(remove, 800);
  });
  $(".clear_btn").click(function () {
    $("#text_area").val("");
  });
});
