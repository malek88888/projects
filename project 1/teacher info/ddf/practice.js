console.log('zxc')

const task = document.getElementById("newTask")

const taskList = document.getElementById('tasks')
const tasksArr =[]


const getText =function(){
    console.log("get text has been code")
    const valueInput = task.value
    tasksArr.push[valueInput]
   
    renderList(valueInput)
}
const renderList = function(newtitel){
console.log('render the task')
   
    let newLi = document.createElement("li")
    newLi.innerText= newtitel
   // taskList.append(newLi)

    let newButton = document.createElement("button")
    newButton.innerText= "x"
    newLi.append(newButton)
    taskList.append(newLi)
    newButton.addEventListener("click",function(){
        console.log("event")

        newLi.remove()

    }
    )

}

