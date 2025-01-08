import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { type TaskType } from "./types/taskTypes";

function App() {
  const fetchStorage = localStorage.getItem("tasks");
  const parsedTasks = fetchStorage ? JSON.parse(fetchStorage) : [];

  const [tasks, setTasks] = useState<TaskType[]>(parsedTasks);

  const updateStorage = (tasks: TaskType[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const addTask = (newTask: TaskType) => {
    const updatedTask = [...tasks, newTask];
    setTasks(updatedTask);

    updateStorage(updatedTask);
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
  };

  return (
    <main>
      <h2 className="mb-1">Simple TaslkList</h2>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </main>
  );
}

export default App;
