import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Pages/Home/Home/Home'
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/appoinment">
              <Appoinment></Appoinment>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
