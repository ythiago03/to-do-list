const tbody = document.querySelector('tbody');

const task = {
    id: 1,
    title: 'titulo de teste',
    created_at: '00 de janeiro de 2023 00:00',
    status: 'pendente'
}

const newElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);
    if(innerText){
        element.innerText = innerText;
    }
    if(innerHTML){
        element.innerHTML = innerHTML;
    }
    return element;
}

const createSelect = (value) => {
    const options = `
        <option value="pendente">pendente</option>
        <option value="em andamento">em andamento</option>
        <option value="concluída">concluída</option>
    `;

    const select = newElement('select', '', options)

    select.value = value
    return select;
}

const createTask = (task) => {
    const { id, title, created_at, status } = task

    const tr = newElement('tr')
    const tdTitle = newElement('td', title)
    const tdCreatedAt = newElement('td', created_at)
    const tdStatus = newElement('td')
    const tdAction = newElement('td')
    const select = createSelect(status);
    const editButton = newElement('button','', '<span class="material-symbols-outlined">edit </span>')
    const deleteButton = newElement('button','', '<span class="material-symbols-outlined">delete </span>')

    editButton.classList.add('btn-action')
    deleteButton.classList.add('btn-action')
    
    tdStatus.appendChild(select)
    tdAction.appendChild(editButton)
    tdAction.appendChild(deleteButton)

    tr.appendChild(tdTitle)
    tr.appendChild(tdCreatedAt)
    tr.appendChild(tdStatus)
    tr.appendChild(tdAction)

    tbody.appendChild(tr)
}

createTask(task)

