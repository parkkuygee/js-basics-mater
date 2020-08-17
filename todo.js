const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS='toDos';

function paintToDo(text){
    console.log(text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue =toDoInput.value;
    paintToDo(currentValue);
}

function loadToDos(){
    const toDos = localStorage.getItem(TODO_LS);
    if(toDos!==null){

    }
}

    
function init(){
    laodToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

    init();