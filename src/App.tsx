import Form from "./components/Form";
import List from "./components/List";
import { type Task } from "./types/taskTypes";

const Task: Task[] = [];

function App() {
  return (
    <main>
      <Form />
      <List />
    </main>
  );
}

export default App;
