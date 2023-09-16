import "./App.css";
import { useGetPostsQuery } from "./Redux/API";

function App() {
  const { data, isError, isLoading, error, isSuccess } = useGetPostsQuery("");
  console.log(data, isError, isLoading, error, isSuccess);
  return (
    <div className="App">
      <h1>My App</h1>
    </div>
  );
}

export default App;
