
let input_contenu = document.getElementById("input_box");
let listAdd = document.getElementById("list-container");

function addTask() {
    if(input_contenu.value === '') {
        alert("you must write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = input_contenu.value ;
        listAdd.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" ;
        li.appendChild(span);
    }
    input_contenu.value = ""; 
    savedata();  
}

listAdd.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();  
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();  
    }
})

function savedata() {
    localStorage.setItem("data" , listAdd.innerHTML);
}
function showtask() {
    listAdd.innerHTML = localStorage.data;
}

showtask();