
var taskArray = [
	{
		name: "tarefa1",
		date: "data1"
	}


] 

function CreatNewTask() {

   var value1 = document.getElementById('task_name').value
   var value2 = document.getElementById('due_date').value
 
   if (isNaN(value1)) {

      var task = {
       name: value1,
       date: value2
      }
    
      taskArray.push(task)

      document.getElementById('task_name').value = ""
      document.getElementById('due_date').value = ""
      showTask()
   }

   
  return false
}

function showTask() {

	var taskList = ""
	for (var i = 0; i < taskArray.length; i++) {
		// taskList +=  "<li class='list-group-item'>" + taskArray[i].name +"<span class='date'>"+ taskArray[i].date + "</span></li>"
	  taskList +=  "<tr>" + "<td>" + "<input type='checkbox'>" + "</td>" + "<td>" + taskArray[i].name + "</td>" + "<td>" + taskArray[i].date + "</td>" + "<td class='date'>" + "<button>o o o</button>" + "</td>" + "</tr>"
  
  }
	
    // document.getElementById("toDoList").innerHTML = taskList
    document.getElementById("toDoTable").innerHTML = taskList

}


function dateVerify() {


}













