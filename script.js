const input = document.querySelector('.todo-text')
const submit = document.querySelector('.todo-submit')

submit.addEventListener('click', () => {
    const inputValue = input.value 
    input.value = ''

    // creating todo item
    const todo_item = document.createElement('div')
    todo_item.classList.add('todo-item')

    // creating todo input
    const todo_item_text = document.createElement('input')
    todo_item_text.classList.add('todo-text-value')
    todo_item_text.value = inputValue
    todo_item_text.setAttribute('readonly', 'readonly')

    // creating icons
    const icons = document.createElement('div')
    icons.classList.add('icons')

    const done_icon = document.createElement('span')
    done_icon.classList.add('material-symbols-outlined')
    done_icon.innerText = 'check_circle'

    const edit_icon = document.createElement('span')
    edit_icon.classList.add('material-symbols-outlined')
    edit_icon.innerText = 'login'

    const delete_icon = document.createElement('span')
    delete_icon.classList.add('material-symbols-outlined')
    delete_icon.innerText = 'delete'

    icons.appendChild(done_icon)
    icons.appendChild(edit_icon)
    icons.appendChild(delete_icon)

    // appending todo-text and icons to todo item
    todo_item.appendChild(todo_item_text)
    todo_item.appendChild(icons)

    // appending todo item to todo list
    const todo_list = document.querySelector('.todo-list')
    todo_list.appendChild(todo_item)

    // done functionality
    done_icon.addEventListener('click', () =>{
        todo_item_text.classList.add('done')
        todo_item.removeChild(icons)
    })

    // edit functionality
    edit_icon.addEventListener('click', () => {
        if(edit_icon.innerText == 'login'){
            todo_item_text.removeAttribute('readonly')
            todo_item_text.focus()
            edit_icon.innerText = 'save'
        }
        else{
            todo_item_text.setAttribute('readonly', 'readonly')
            edit_icon.innerText = 'login'
        }
    })

    // delete functionality
    delete_icon.addEventListener('click', () => {
        todo_list.removeChild(todo_item)
    })



    

})