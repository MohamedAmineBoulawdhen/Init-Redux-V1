import Addtask from "./components/Addtask";
import ListTask from "./components/ListTask";
import Sidebar from "./components/Sidebar";
import "./index";
function App() {
  return (
    <>
      <Sidebar />
      <article className="main">
        <Addtask />
        <ListTask />
      </article>
    </>
  );
}

export default App;
