import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "./components/Homepage";
import { Dashboard } from "./components/Dashboard";
import { ErrorPage } from "./components/Error";
import { Navigation } from "./components/Navigation";
import { useAuth } from "./CustomHooks/useAuth";

function App() {
  // const [users] = UserFetch();
  const values = useAuth();

  return (
    <div className="App">
      <Navigation {...values}/>
      <Routes>
        <Route path="/" element={<Homepage {...values} />}></Route>
        <Route path="/dashboard" element={<Dashboard {...values} />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      {/* {users.length > 0 &&
        users.map((user) => {
          return <div key={user.id}>{user.author}</div>;
        })} */}
    </div>
  );
}

export default App;
