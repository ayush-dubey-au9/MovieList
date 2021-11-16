import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import MovieList from "./components/movielist";

const Error  = ()=>{
  return <div style={{width: "100vw", height: "100vh", background: "none"}}> <div style={{margin: "auto"}}>Page Not Found...</div></div>
}

function App() {
  
  return (
    

    <div className="App">
      
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/movielist" component={MovieList} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
