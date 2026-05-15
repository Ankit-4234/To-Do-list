function addtask(){
    let input = document.getElementById("task input")
    let taskText = input.value;

    if (taskText ==="")
    {
        alert("enter you task");
        return 0;
    }
    let li = document.createElement("li");
    li.innerHTML =`
    <span onclick="markdone(this)">;
    ${taskText}
    </span>
    <button onclick="deletetask(this)">
    delete
    </button>

    `;
    document.getElementById("tasklist").appendChild(li);
    input.value="";

}
function markdone(task){
    task.classlist.toggle("done");
}
function deletetask(button){
    button.parentElement.remove();
}
