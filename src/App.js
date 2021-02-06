import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home/Home';
function App() {
  return (
    <div className="">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
           
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
