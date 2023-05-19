const listElement = document.querySelector("#app ul");
const inputElement = document.querySelector("#app input");
const buttonElement = document.querySelector("#app button");
console.log(listElement, inputElement, buttonElement);

const tarefas = ["estudar", "durmir cedo", "dever do lazaro"];

for (const iterator of tarefas) {
    const tarefaElement = document.createElement("li");
    const tarefaText = document.createTextNode(iterator);
    tarefaElement.appendChild(tarefaText);
    listElement.appendChild(tarefaElement);
    //console.log(iterator)
}

//console.log(listElement, inputElement, buttonElement)
