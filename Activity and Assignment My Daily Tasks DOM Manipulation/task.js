console.log("connected");

let addButton = document.querySelector("#addButton");

let todoWrapper = document.querySelector(".todo-wrapper");

addButton.addEventListener("click",()=>{

    let userInput = document.querySelector("#userInput").value;


    if(userInput.length > 5){

        let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id="todo-list";

        let li = document.createElement("li");
        let text = document.getElementById("userInput");

            li.className = "todo";
            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(text.value));

        todoWrapper.appendChild(li);

        document.querySelector("#userInput").value = "";

    }

    else {
        alert("Enter more than 5 Characters");
    }
}); 

function deleteItems(){
    let i;

    let ul = document.getElementById("tasklist");

    let items = ul.getElementsByTagName("li");

    for (i=0; i<items.length; i++){
        if(items[i].firstChild.checked)
        {
            ul.removeChild(items[i]);
            i=i-1;
        }
    }
}