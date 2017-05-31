function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");
}

$(document).ready(function() {
  $("input[type=checkbox]").bind('change', toggleDone);
});

$("#total-count").html($(".todo").length);
