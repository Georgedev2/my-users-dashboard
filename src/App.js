import "./App.css";
import LoginForm from "./form/LoginForm";
import UserDashBoard from "./user-dashboard/UserDashBoard"

function App() {
  return (
    <div className="App">
      <header className="App-header">
     {/*    <LoginForm/> */}
        <UserDashBoard/>
      </header>
    </div>
  );
}

export default App;
