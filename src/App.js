import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);
  if (state.todo.isLoading) {
    return <h1>Loading......</h1>;
  }
  return (
    <>
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch todos</button>
      {state.todo.data &&
        state.todo.data.map((e) => (
          <li>
            {e.id}. {e.title}
          </li>
        ))}
    </>
  );
}

export default App;
