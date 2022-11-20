import "./App.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Home from "./components/Home";
import Control from "./components/controlpanel";
import Analyze from "./components/Analyze";
import Results from "./components/results";
function App() {
    // const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate("/controlpanel");
    // }
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/control" component={Control} />
                <Route path="/analyze" component={Analyze} />
                <Route path="/results" component={Results} />
                <Redirect to="/" /> 
            </Switch>
        </Router>
        </>
    );
}
  
export default App;