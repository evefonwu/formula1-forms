import React from "react";
import CreateConstructor from "./CreateConstructor";
import CreateDriver from "./CreateDriver";
import CreateRace from "./CreateRace";
import CreateResult from "./CreateResult";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/constructor" component={CreateConstructor} />
            <Route exact path="/driver" component={CreateDriver} />
            <Route exact path="/race" component={CreateRace} />
            <Route exact path="/result" component={CreateResult} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
