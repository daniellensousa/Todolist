import * as Css from './style'
import { useState } from 'react'

export default function App() {
  const [task, setTask] = useState("");
  const [listTask, setlistTask] = useState([{
    id: 1,
    task: 'Fazer bolo',
    checked: true
  },
  {
    id: 2,
    task: 'Fazer suco',
    checked: false
  },
  ]);
  const addTask = () => {
    if (!task) return alert("Preencha uma tarefa");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    }
    setlistTask([...listTask, newTask]);
    setTask("");
  }
  const removeTask = (id) => {
    const newList = listTask.filter(task => task.id != id);
    setlistTask(newList);

  }
  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex(task => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;
    setlistTask([...newList])
  }

  return (
    <Css.Container>
      <h1 className="title">TODO LIST</h1>
      <Css.Spacer />
      <Css.Flex direction="row">
        <Css.Input
        value={task}
          placeholder='Digite sua tarefa'
          onChange={(e) => setTask(e.target.value)}
        />
        <Css.Button onClick={addTask}>Adicionar </Css.Button>
      </Css.Flex>
      <Css.Spacer margin="16px" />

      <ul>

        {listTask.map((task) => (
          <>
            <Css.Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Css.Flex direction="row">
                <button onClick={() => removeTask(task.id)}><i class='bx bx-trash'></i></button>
                <button onClick={() => toggleChecked(task.id, task.checked)}><i class='bx bx-check'></i></button>
              </Css.Flex>
            </Css.Item>
            <Css.Spacer margin="12px" />
          </>
        ))}

      </ul>

    </Css.Container>
  )
}

