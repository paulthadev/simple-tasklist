import { useState } from "react";
import { TaskType } from "../types/taskTypes";

interface TaskProps {
  addTask: (task: TaskType) => void;
}

function Form({ addTask }: TaskProps) {
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!description) {
      alert("enter task");
      return;
    }

    const task = {
      id: Math.random(),
      description: description,
      isCompleted: false,
    };

    addTask(task);
    setDescription("");
  };

  return (
    <div className="form">
      <form className="task-form">
        <input
          type="text"
          className="form-input"
          placeholder="Enter description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
