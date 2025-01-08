import { TaskType } from "../types/taskTypes";

type ListProp = {
  tasks: TaskType[];
  toggleTask: (id: number) => void;
};

function List(props: ListProp) {
  const { tasks, toggleTask } = props;
  return (
    <ul className="list">
      {tasks.map((task: TaskType, index) => (
        <li key={task.id}>
          <p>{`${index + 1}.  ${task.description}`}</p>

          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTask(task.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
