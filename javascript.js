function toggleDone() {
  var checkbox = this;

  $(checkbox).parent().toggleClass("completed");
}

$(document).ready(function() {
  $("input[type=checkbox]").bind('change', toggleDone);
});

// $("#total-count").html($(".todo").length);

function updateCounters() {
  var todoCount = $(".todo").length;
  var completedCount = $(".completed").length

    $("#total-count").html(todoCount);
    $("#completed-count").html(completedCount);
    $("#todo-count").html(todoCount - competedCount);
}

updateCounters();
