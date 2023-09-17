
function add(){
    const input = document.getElementById("input-text")
    
    console.log("add function ",input.value);
    const ul = document.getElementById("list");
    const newItem = document.createElement("li");
    newItem.textContent=input.value;
    ul.appendChild(newItem);
    input.value='';
}

 