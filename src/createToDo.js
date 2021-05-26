const toDo = (title, description, dueDate, priority, projectSelector) => {
    
    return { title, description, dueDate, priority, projectSelector };

}

const project = (name) => {
    
    return { name }

}

export { toDo, project };