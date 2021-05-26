const addToDo = (toDo) => {
    let projectSelector = document.getElementById(toDo.projectSelector + 'ProjectContainer')

    let toDoContainer = document.createElement('div');
    let toDoTitleContainer = document.createElement('div');
    let toDoInfoContainer = document.createElement('div');
    let toDoCheckBox = document.createElement('input');
    let toDoTitle = document.createElement('p');
    let toDoDetails = document.createElement('button');
    let toDoDueDate = document.createElement('p');
    let toDoPriority = document.createElement('p');
    let toDoDescription = document.createElement('p');
    let deleteToDoIMG = document.createElement('img')
    let editToDoIMG = document.createElement('img')

    toDoContainer.setAttribute('class', 'toDoChildContainer');
    toDoTitleContainer.setAttribute('class', 'toDoChildTitle');
    toDoInfoContainer.setAttribute('class', 'toDoChildInfo');
    toDoCheckBox.setAttribute('type', 'checkbox');
    toDoCheckBox.setAttribute('class', 'toDoCheckbox');
    toDoTitle.textContent = toDo.title;
    toDoDetails.textContent = 'Details';
    toDoDetails.setAttribute('class', 'detailChild toDoDetails')
    toDoDetails.setAttribute('id', toDo.projectSelector + 'Node')
    toDoDueDate.textContent = 'Due Date: ' + toDo.dueDate;
    toDoDueDate.setAttribute('class', 'detailChild')
    toDoPriority.textContent = 'Priority: ' + toDo.priority.substring(0, toDo.priority.length - 8);
    toDoPriority.setAttribute('class', 'detailChild')
    toDoDescription.textContent = toDo.description;
    toDoDescription.style.display = "none";
    deleteToDoIMG.setAttribute('src', 'img/trash.png')
    deleteToDoIMG.setAttribute('class', 'detailChild delete-to-do')
    editToDoIMG.setAttribute('src', 'img/pencil.png')
    editToDoIMG.setAttribute('class', 'detailChild editToDo')

    
    toDoTitleContainer.append(toDoCheckBox, toDoTitle)
    toDoInfoContainer.append( toDoDetails, toDoDueDate, toDoPriority, deleteToDoIMG, editToDoIMG, toDoDescription);
    toDoContainer.append(toDoTitleContainer, toDoInfoContainer);

    projectSelector.appendChild(toDoContainer);
};

const expandToDoInfo = (event) => {
    const content = document.querySelector('#detailContainer');

    if(document.querySelector("#expandDetails")) {
        content.removeChild(document.querySelector("#expandDetails"));
    }

    let details = document.createElement('div');
    details.setAttribute('id', 'expandDetails');
    let container = event.parentNode.parentNode;
    let title = document.createElement('p');
    let titleText = container.childNodes[0].childNodes[1].innerText;
    title.setAttribute('class', 'detailTitle')
    let description = document.createElement('p');
    let descriptionText = container.childNodes[1].childNodes[5].innerText;
    let dueDate = document.createElement('p');
    let dueDateText = container.childNodes[1].childNodes[1].innerText;
    let priority = document.createElement('p');
    let priorityText = container.childNodes[1].childNodes[2].innerText;

    title.textContent = titleText;
    description.textContent = 'Description: ' + descriptionText;
    dueDate.textContent = dueDateText;
    priority.textContent = priorityText;

    details.append(title, description, dueDate, priority);
    detailContainer.append(details);
}

const generateProjects = () => {
    //get a list of the projects for the user to choose from
    let selector = document.getElementById('projectSelector');
    let projectList = document.getElementById('allProjects');


    while (selector.options.length > 0) {
        selector.remove(0);
    }
    
    for (let i = 0; i < projectList.children.length; i++) {
        let currentOption = projectList.children[i].id.substring(0,projectList.children[i].id.length - 7);
        let option = document.createElement('option');
        option.setAttribute('value', currentOption);
        option.setAttribute('class', 'projectSelect');
        let optionText = document.createTextNode(currentOption);
        option.appendChild(optionText);
        selector.appendChild(option)
    }

    let materializeProjectSelect = document.getElementById('projectSelector');
    M.FormSelect.init(materializeProjectSelect, '.projectSelect');
}

const addProject = (project) => {
    let projectName = document.createElement('p')
    projectName.textContent = project.name;
    projectName.setAttribute('class', 'project-child')
    projectName.setAttribute('id', project.name + 'Project')

    let toDoContainer = document.createElement('div')
    toDoContainer.setAttribute('id', project.name + 'ProjectContainer')


    allProjects.append(projectName)
    projectsContainer.appendChild(allProjects);
    toDos.appendChild(toDoContainer)
}

const openProject = (() => {
    const allProjects = document.getElementById('allProjects')
    //open home by default on page load
    const openHome = () => {
        HomeProject.classList.add('selected')

        for (let i = 0; i < allProjects.children.length; i++) {
            if(allProjects.children[i].id != 'HomeProject') {
                allProjects.children[i].classList.add('unselected')
            }
        }
    }

    const openSelectedProject = (id) => {

        for (let i = 0; i < allProjects.children.length; i++) {
            //add selected class if its clicked, remove if its not. hide the corresponding container
            if(allProjects.children[i].id == id) {
                allProjects.children[i].classList.remove('unselected')
                allProjects.children[i].classList.add('selected')
                console.log('showing ' + '#' + id + 'Container')
                document.querySelector('#' + id + 'Container').style.display = 'block';
            } else {
                allProjects.children[i].classList.remove('selected')
                allProjects.children[i].classList.add('unselected')
                console.log('hiding ' + '#' + allProjects.children[i].id + 'Container')
                document.querySelector('#' + allProjects.children[i].id + 'Container').style.display = 'none';
            }
        }

    }

    return { openHome, openSelectedProject }

})();

const completeToDo = (() => {
    const checkToDoBox = (event) => {
        let parentNode = event.parentNode.parentNode
        if (event.checked) {
            //if checkbox is checked, strikethrough text that needs to be strikethrough'd
            parentNode.childNodes[0].innerHTML = `<input type="checkbox" class="toDoCheckbox" checked><p>${parentNode.childNodes[0].innerText.strike()}</p>`
            parentNode.childNodes[1].children[1].innerHTML = parentNode.childNodes[1].children[1].innerText.strike()
            parentNode.childNodes[1].children[2].innerHTML = parentNode.childNodes[1].children[2].innerText.strike()
        } else {
            //if checkbox unchecked, remove strikethrough from text
            parentNode.childNodes[0].innerHTML = `<input type="checkbox" class="toDoCheckbox"><p>${parentNode.childNodes[0].innerText}</p>`
            parentNode.childNodes[1].children[1].innerHTML = parentNode.childNodes[1].children[1].innerText
            parentNode.childNodes[1].children[2].innerHTML = parentNode.childNodes[1].children[2].innerText
        }
    }
    return { checkToDoBox }
})();

const deleteToDo = (() => {
    const removeNode = (event) => {
        console.log('removing Node...' + event)
        event.parentNode.parentNode.remove()
    }
    return { removeNode }
})();

const editToDo = (() => {

    //helper function to assign attributes
    function setAttributes(el, attrs) {
        Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
    }

    //preload previous information into modal
    const setupEdit = (event) => {
        const content = document.querySelector('#editContainer');

        let container = event.parentNode.parentNode;

        let priorities = ['Low', 'Medium', 'High'];

        if(document.querySelector("#editToDoContainer")) {
            content.removeChild(document.querySelector("#editToDoContainer"));
        }

        let details = document.createElement('div');
        details.setAttribute('id', 'editToDoContainer');
       
        let titleText = container.childNodes[0].innerText;
        let dateText = container.childNodes[1].children[1].innerText.substring(10);
        let descriptionText = container.childNodes[1].children[5].innerText;

        let breaker1 = document.createElement('br');
        let breaker2 = document.createElement('br');
        let breaker3 = document.createElement('br');
        let title = document.createElement('input');
        let titleLabel = document.createElement('label');
        let description = document.createElement('input');
        let descriptionLabel = document.createElement('label');
        let date = document.createElement('input');
        let dateLabel = document.createElement('label');
        let priority = document.createElement('select');
        let priorityLabel = document.createElement('label');
        let submitEdit = document.createElement('input');
        let priorityContainer = document.createElement('div')

        titleLabel.setAttribute('for', 'editTitle');
        titleLabel.innerText = 'Title: ';
        descriptionLabel.setAttribute('for', 'editDescription');
        descriptionLabel.innerText = 'Description: ';   
        dateLabel.setAttribute('for', 'editDueDate');
        dateLabel.innerText = 'Due date: ';
        priorityLabel.setAttribute('for', 'editPriority');
        priorityLabel.innerText = 'Priority: ';
        priorityContainer.setAttribute('class', 'input-field')

        setAttributes(title, { type: 'text', id: 'editTitle', name: 'editTitle', value: titleText });
        setAttributes(description, { type: 'text', id: 'editDescription', name: 'editDescription', value: descriptionText });
        setAttributes(date, { type: 'date', id: 'editDueDate', name: 'editDueDate', value: dateText, min: "2018-01-01", max: "2080-12-31"});
        setAttributes(priority, { name: 'editPriority', id: 'editPriority'})

        for (let i = 0; i < priorities.length; i++) {
            let option = document.createElement('option')
            option.value = priorities[i]
            option.text = priorities[i]
            option.setAttribute('class', 'editPrioritySelect')
            priority.appendChild(option);
        }

        setAttributes(submitEdit, {type: 'button', value: 'Submit Edit', id: 'submitEditButton'});

        priorityContainer.appendChild(priority)

        details.append(titleLabel, title, breaker1, descriptionLabel, description, breaker2, 
            dateLabel, date, priorityLabel, priorityContainer, breaker3, submitEdit);
        content.append(details);

        editToDoContainer.addEventListener('click', (e) => {
            if (e.target.matches('#submitEditButton')) {
                editInfo(container, editTitle.value, editDescription.value, editPriority.value, editDueDate.value);
            }
        })

        let materializePrioritySelect = document.getElementById('editPriority')
        M.FormSelect.init(materializePrioritySelect, '.prioritySelect');
    }

    const editInfo = (container, title, description, priority, dueDate) => {
        container.childNodes[0].innerHTML = `<input type="checkbox" class="toDoCheckbox"><p>${title}</p>`
        container.childNodes[1].children[1].innerHTML = 'Due Date: ' + dueDate;
        container.childNodes[1].children[2].innerHTML = 'Priority: ' + priority;
        container.childNodes[1].children[5].innerHTML = description;
    }

    return { setupEdit, editInfo }
})();

//coming soon...
// const addToLocalStorage = (() => {
//     const addProjectToStorage = (object) => {
//         console.log(object)
//     }
//     return { addProjectToStorage }
// })();


export { addToDo, expandToDoInfo, addProject, generateProjects, openProject, completeToDo, deleteToDo, editToDo }