import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from './components/Main/Main.jsx'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch >
          <Route exact path="/login">
            <p>Login page</p>
          </Route>
          <Route exact path="/register">
            <p>Register page</p>
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
