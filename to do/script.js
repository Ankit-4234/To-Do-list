function addTask(){
    let input = document.getElementById("taskInput")
    let taskText = input.value;

    if (taskText ==="")
    {
        alert("enter you task");
        return;
    }
    let li = document.createElement("li");
    li.innerHTML =`
    <span onclick="markdone(task)">
    ${taskText}
    </span>
    <button onclick="deletetask(this)">
    delete
    </button>

    `;
    document.getElementById("taskList").appendChild(li);
    input.value="";s

}
function markdone(task){
    task.classList.toggle("done");
}
function deletetask(button){
    button.parentElement.remove();
}
