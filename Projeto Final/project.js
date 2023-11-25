let tasks = [];

function addTask() {
  const id = Date.now();
  let title = "";
  let description = "";
  while (true) {
    try {
      title = prompt("Informe o título da tarefa:");
      if (title === "") {
        throw new Error("O título não pode ser vazio.");
      } else if (title.length < 4) {
        throw new Error("O título não pode conter menos de 4 caracteres.");
      } else if (tasks.some((task) => task.title === title)) {
        throw new Error(
          "O título não pode ser igual ao de uma tarefa já existente."
        );
      }
      break; // Sai do loop se nenhum erro for lançado
    } catch (error) {
      alert(error.message);
      // Continua no loop para solicitar dados novamente
    }
  }
  while (true) {
    try {
      description = prompt("Informe a descrição da tarefa:");
      if (description === "") {
        throw new Error("A descrição não pode ser vazia.");
      } else if (description.length < 20) {
        throw new Error("A descrição não pode conter menos de 20 caracteres.");
      }
      break; // Sai do loop se nenhum erro for lançadp
    } catch (error) {
      alert(error.message);
      // Continua no loop para solicitar dados novamente
    }
  }
  const task = {
    id: id,
    title: title,
    description: description,
  };
  tasks.push(task);
  alert(`Tarefa adicionada: ${title}`);
}

function editTask() {
  let editId = "";
  let newTitle = "";
  let newDescription = "";
  let task = "";
  if (tasks != "") {
    const listTasksInfo = tasks
      .map((task) => {
        return `ID: ${task.id}\nTítulo: ${task.title}\nDescrição: ${task.description}`;
      })
      .join("\n\n");
    alert(
      "Copie o Id da tarefa que deseja alterar.\nLista de tarefas:\n\n" +
        `${listTasksInfo}`
    );
    while (true) {
      try {
        editId = prompt("Informe o ID da tarefa a ser editada:");
        if (!editId) {
          throw new Error("A Id não pode estar vazia.");
        } else if (editId.length != 13) {
          throw new Error("A Id deve conter 13 caracteres.");
        }

        task = tasks.find((task) => task.id === parseInt(editId));

        if (!task) {
          throw new Error("Tarefa com ID ${id} não encontrada.");
        }
        break;
      } catch (error) {
        alert(error.message);
      }
    }
    while (true) {
      try {
        newTitle = prompt("Novo título da tarefa:");
        if (newTitle === "") {
          throw new Error("O título não pode ser vazio.");
        } else if (newTitle.length < 4) {
          throw new Error("O título não pode conter menos de 4 caracteres.");
        } else if (tasks.some((task) => task.title === newTitle)) {
          throw new Error(
            "O título não pode ser igual ao de uma tarefa já existente."
          );
        }
        break; // Sai do loop se nenhum erro for lançado
      } catch (error) {
        alert(error.message);
        // Continua no loop para solicitar dados novamente
      }
    }
    while (true) {
      try {
        newDescription = prompt("Nova descrição da tarefa:");
        if (newDescription === "") {
          throw new Error("A descrição não pode ser vazia.");
        } else if (newDescription.length < 20) {
          throw new Error(
            "A descrição não pode conter menos de 20 caracteres."
          );
        }
        break; // Sai do loop se nenhum erro for lançadp
      } catch (error) {
        alert(error.message);
        // Continua no loop para solicitar dados novamente
      }
    }
    task.title = newTitle;
    task.description = newDescription;
    alert(`Tarefa editada: ${newTitle}`);
  } else {
    alert("Não há tarefas cadastradas.");
  }
}

function removeTask() {
  let removeId = "";

  if (tasks.length > 0) {
    const listTasksInfo = tasks
      .map((task) => {
        return `ID: ${task.id}\nTítulo: ${task.title}\nDescrição: ${task.description}`;
      })
      .join("\n\n");

    alert(
      "Copie o Id da tarefa que deseja remover.\nLista de tarefas:\n\n" +
        `${listTasksInfo}`
    );

    while (true) {
      try {
        removeId = prompt("Informe o ID da tarefa a ser removida:");

        if (!removeId) {
          throw new Error("A Id não pode estar vazia.");
        } else if (removeId.length !== 13) {
          throw new Error("A Id deve conter 13 caracteres.");
        }

        const taskId = parseInt(removeId);
        const index = tasks.findIndex((task) => task.id === taskId);

        if (index === -1) {
          throw new Error(`Tarefa com ID ${taskId} não encontrada.`);
        }

        const removedTask = tasks.splice(index, 1)[0];
        alert(`Tarefa removida: ${removedTask.title}`);
        break;
      } catch (error) {
        alert(error.message);
      }
    }
  } else {
    alert("Não há tarefas cadastradas.");
  }
}


function listTasks() {
  if (tasks == "") {
    alert("Não há tarefas cadastradas.");
  } else {
    const listTasksInfo = tasks
      .map((task) => {
        return `ID: ${task.id}\nTítulo: ${task.title}\nDescrição: ${task.description}`;
      })
      .join("\n\n");
    alert("Lista de tarefas:\n\n" + `${listTasksInfo}`);
  }
}

function getTaskById() {
  let findId = "";

  if (tasks.length > 0) {
    while (true) {
      try {
        findId = prompt("Informe o ID da tarefa desejada:");

        if (!findId) {
          throw new Error("A Id não pode estar vazia.");
        } else if (findId.length !== 13) {
          throw new Error("A Id deve conter 13 caracteres.");
        }

        const taskId = parseInt(findId);
        const task = tasks.find((task) => task.id === taskId);

        if (task) {
          alert(
            `ID: ${task.id}, Título: ${task.title}, Descrição: ${task.description}`
          );
        } else {
          alert(`Tarefa com ID ${findId} não encontrada.`);
        }
        break;
      } catch (error) {
        alert(error.message);
      }
    }
  } else {
    alert("Não há tarefas cadastradas.");
  }
}

function Menu() {
  let inicio = parseInt(
    prompt(
      "Menu do Gerenciador de Tarefas\n------ Escolha uma das opções abaixo e digite o número. -----\n1 - Adicionar Tarefa\n2 - Editar Tarefa\n3 - Remover Tarefa\n4 - Listar Tarefas\n5 - Obter Tarefa por Id\n6 - Sair"
    )
  );

  switch (inicio) {
    case 1:
      addTask();
      break;
    case 2:
      editTask();
      break;
    case 3:
      removeTask();
      break;
    case 4:
      listTasks();
      break;
    case 5:
      getTaskById();
      break;
    case 6:
      alert("Obrigado por utilizar o gerenciador de tarefas, até mais.");
      break;
    default:
      alert("Opção inválida, por favor tente novamente.");
  }
  if (inicio != 6) {
    Menu();
  } else {
    return;
  }
}

Menu();
