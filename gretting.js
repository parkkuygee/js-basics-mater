const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS="currentUser"

function paintGretting(text){

}

function loadName(){
    const currentUser = loacalStorage.getItme(USER_LS);
    if (currentUser==null){
        

    }
}

function init(){
   loadName();
}

init();