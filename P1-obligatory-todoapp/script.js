let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let todoList = document.getElementById("todolist")
let addBtn = document.getElementById('add')


ourForm.addEventListener("submit", (e) => {
    e.preventDefault()
    addTodo(ourField.value)
})

// addBtn.addEventListener('click', (e)=> {
//     e.preventDefault();
//     addTodo(ourField.value)
// })

function addTodo(todo){
    let todoHtml = `<li>${todo} <button onclick="deleteItem(this)" class='btn-red'>Delete Item</button></li>`
    todoList.insertAdjacentHTML('beforeend', todoHtml)
    ourField.value = '';
    ourField.focus();
}

function deleteItem(elementtodel) {
    elementtodel.parentElement.remove();
}