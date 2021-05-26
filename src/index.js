import { modalController } from "./modalController";
import { toDo, project } from "./createToDo";
import { addToDo, expandToDoInfo, addProject, generateProjects, openProject, completeToDo, deleteToDo, editToDo, addToLocalStorage } from "./domManipulator"

toDoControllerContainer.addEventListener('click', (e) => {
    if (e.target.matches('#createNewToDo')) {
        generateProjects();
        modalController.openModal(e.target.id);
    }
    if (e.target.matches('#createNewProject')) {
        modalController.openModal(e.target.id);
    }

    if (e.target.matches('.project-child')) {
        openProject.openSelectedProject(e.target.id);
    }
})

toDos.addEventListener('click', (e) => {
    if (e.target.matches('.toDoDetails')) {
        modalController.openModal(e.target.className.substring(12));
        expandToDoInfo(e.target);
    }
    if (e.target.matches('.toDoCheckbox')) {
        completeToDo.checkToDoBox(e.target)
    }
    if (e.target.matches('.delete-to-do')) {
        deleteToDo.removeNode(e.target)
    }
    if (e.target.matches('.editToDo')) {
        editToDo.setupEdit(e.target)
        modalController.openModal(e.target.className.substring(12))
    }
})

createNewToDoModal.addEventListener('click', (e) => {
    if (e.target.matches('#createNewToDoSubmit')) {
        let newToDo = toDo(title.value, description.value, dueDate.value, priority.value, projectSelector.value)
        addToDo(newToDo)
    }
})

createNewProjectModal.addEventListener('click', (e) => {
    if (e.target.matches('#createNewProjectSubmit')) {
        let newProject = project(projectName.value)
        addProject(newProject)
    }
})

window.addEventListener('DOMContentLoaded', (event) => {
    openProject.openHome();
});