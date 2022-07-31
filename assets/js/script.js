let tareas = []
const input = document.querySelector("#input")
const listTask = document.querySelector("#showTask")
const listId = document.querySelector("#idTask")
const totalTask = document.querySelector("#totalTask")
const btnAdd = document.querySelector("#button")
const listDone = document.querySelector("#doneTask")
let done = 0

function getInput(){
    let valueInput= input.value
    return valueInput
}
function updateDone(done){
    htmlDone = ("Realizadas: " + (done))
    listDone.innerHTML = htmlDone
}
function updateTotal(){
    let htmlTotalTask = ("Total: " + (tareas.length))
    totalTask.innerHTML = htmlTotalTask
}

function borrar(id, status){
    if(status == true){
        done-=1
        updateDone(done)
    }
    tareas = tareas.filter((task) => task.id != id)
    updateTotal()
    renderTareas()
}

function renderTareas(){
    let htmlId=""
    let htmlNombre=""
    let htmlChecked=""
    let htmlStyle=""
    for(let task of tareas){
        if(task.status== true){
            htmlChecked = "checked"
            htmlStyle = "color:white; background-color: green"
        }
        else{
            htmlChecked = ""
            htmlStyle = ""
        }
        htmlId += `<li style="${htmlStyle}">${task.id}</li>`
        htmlNombre += `<li style="${htmlStyle}">${task.name}
                    <input type="checkbox" id="${task.id}" onclick="check(${task.id},${task.status})" ${htmlChecked}>
                    <button onclick="borrar(${task.id},${task.status})"> x </button>
                   </li>`
    }
    listId.innerHTML = htmlId
    listTask.innerHTML = htmlNombre
}

function check(id, status){
    let newStatus = !status
    tareas = tareas.map((task) => {
        if(task.id == id){
            task.status = newStatus
        }
        return task
    })
    if(newStatus == true){
        done+=1
    }else{
        done-=1
    }
    updateDone(done)
    renderTareas()
}

btnAdd.addEventListener("click", () => {
    const tarea = {id: Date.now(), name: input.value, status: false}
    tareas.push(tarea)
    input.value=""
    updateTotal()
    renderTareas()
})

