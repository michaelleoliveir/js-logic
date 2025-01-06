function verificaTarefaConcluida(tarefas, tarefa) {
    for(let tasks of tarefas) {
        if(tasks.includes(tarefa)) {
            return true
        }
    }

    return false
}

const tarefasConcluidas = ["Estudar", "Lavar a louça", "Ir ao mercado"];
console.log(verificaTarefaConcluida(tarefasConcluidas, "Estudar")); // true
console.log(verificaTarefaConcluida(tarefasConcluidas, "Fazer exercícios")); // false
