
import './App.css';
import Login from './components/Login/login'
import DashBoard from './components/List/dashBoard'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
      <Switch>
          <Route path="/dashboard" >
         <DashBoard/>
            </Route>
        
          <Route path="/" >
            <Login/>

            </Route>
        </Switch>
        </Router>
 
    </div>
  );
}

export default App;
