$(document).ready(function ()  {

  var taskArray = [
    {
      name: "tarefa1",
      date: "data1",
      checkedDone: false
    }
  ]

  showTask()

  $("#form").on("submit", function() {

    var value1 = $("#task_name").val()
    var value2 = $("#due_date").val()


    if (isNaN(value1)) {

        var task = {
         name: value1,
         date: value2,
         checkedDone: false
        }
        // coloca os novos valores no final do vetor
        taskArray.push(task)

        $("#task_name").val("")
        $("#due_date").val("")

        showTask()
     }

    return false
  })

  $(document).on('click',".done", function() {

    if ($(this).prop("checked")) {
      swal({
        title: "Good Job",
        text: "You have concluded another one!",
        timer: 1000,
        showConfirmButton: false
      })
    }

    var index = $(this).data("index")
    taskArray[index].checkedDone = $(this).prop("checked")
  })

  $(document).on('click',".delete", function() {

    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this imaginary file!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      closeOnConfirm: false
    },

    function(){
      swal("Deleted!", "Your imaginary file has been deleted.", "success");
    })
  })



  function showTask() {

    var taskList = ""
    for (var i = 0; i < taskArray.length; i++) {
      var checked = ""
      if (taskArray[i].checkedDone) {
        checked = "checked"
      }

      taskList +=  "<tr>"
      taskList += "<td>"
      taskList += "<input type='checkbox' data-index='"
      taskList += i
      taskList += "' class='done'"
      taskList += checked
      taskList += " >"
      taskList += "</td>"
      taskList += "<td class='task_style'>"
      taskList += taskArray[i].name
      taskList += "</td>"
      taskList += "<td class='task_style'>"
      taskList += taskArray[i].date
      taskList += "</td>"
      taskList += "<td class='date'>"
      taskList += "<button class='delete btn btn-default'><i class='fa fa-bars' aria-hidden='true'></i></button>"
      taskList += "</td>"
      taskList += "</tr>"
    }

    $(".sortable").html(taskList)
  }

  $( ".sortable" ).sortable();
  $( ".sortable" ).disableSelection();
})















