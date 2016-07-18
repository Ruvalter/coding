$(document).ready(function ()  {

  var taskArray = [
    {
      name: "tarefa1",
      date: "data1"
    }
  ]

  showTask()

  $("#form").on("submit", function() {

    var value1 = $("#task_name").val()
    var value2 = $("#due_date").val()


    if (isNaN(value1)) {

        var task = {
         name: value1,
         date: value2
        }
        // coloca os novos valores no final do vetor
        taskArray.push(task)

        $("#task_name").val("")
        $("#due_date").val("")

        showTask()
     }

    return false
  })

  $(".done").click(function() {
    debugger
    swal({
      title: "Good Job",
      text: "You have concluded another one!",
      timer: 2000,
      showConfirmButton: false
    })




  })

  function showTask() {

    var taskList = ""
    for (var i = 0; i < taskArray.length; i++) {
      // taskList +=  "<li class='list-group-item'>" + taskArray[i].name +"<span class='date'>"+ taskArray[i].date + "</span></li>"
      taskList +=  "<tr>" + "<td>" + "<input type='checkbox' class='done'>" + "</td>" + "<td class='task_style'>" + taskArray[i].name + "</td>" + "<td class='task_style'>" + taskArray[i].date + "</td>" + "<td class='date'>" + "<button class='btn btn-danger'><i class='fa fa-bars' aria-hidden='true'></i></button>" + "</td>" + "</tr>"
    }

    // document.getElementById("toDoList").innerHTML = taskList
    $("#toDoTable").html(taskList)
  }
})







function dateVerify() {


}













