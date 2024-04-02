import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

export default function index() {
  return (
    <div className="main-container container-fluid d-flex align-items-center justify-content-center vh-100 ">
      <div className="glass-effect p-4 rounded ">
        {/* Form take input from this component */}
        <TaskInput />
        {/* display the list of the to-dos here */}
        <TaskList />
      </div>
    </div>
  );
}
