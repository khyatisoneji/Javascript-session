var taskInput = document.querySelector(".inputField input"); //input tasks
var incompleteTask = document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTask = document.getElementById("completed-tasks"); //ul of #completed-tasks
var addButton=document.getElementsByTagName("del");

//Click on delete task button to remove from the list
function delTask() {
  var listItem=this.parentNode;
  var ul=listItem.parentNode;
  ul.removeChild(listItem);
}

var createNewTaskElement=function(taskString){
  var listItem=document.createElement("li");
  var checkBox=document.createElement("input");
  var label=document.createElement("label");
  var deleteButton=document.createElement("button");
  label.innerText=taskString;
  checkBox.type="checkbox";
  deleteButton.innerText="X";
  deleteButton.className="del";
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  return listItem;
}

//Add new task in Todo when clicked "+" button
function newTask() {
  var listItem=createNewTaskElement(taskInput.value);
  if(taskInput.value === '') {
    alert("You must write something!");
  } else {
    incompleteTask.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
  }
  taskInput.value="";
}

var taskIncomplete=function(){
  var listItem=this.parentNode;
  incompleteTask.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var taskCompleted=function(){
  var listItem=this.parentNode;
  completedTask.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
  var checkBox=taskListItem.querySelector("input[type=checkbox]");
  var deleteButton=taskListItem.querySelector("button.del");
  deleteButton.onclick=delTask;
  checkBox.onchange=checkBoxEventHandler;
}

for (var i=0; i<incompleteTask.children.length;i++){
  bindTaskEvents(incompleteTask.children[i],taskCompleted);
}
for (var i=0; i<completedTask.children.length;i++){
  bindTaskEvents(completedTask.children[i],taskIncomplete);
}
