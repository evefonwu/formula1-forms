import React from "react";
import CreateConstructor from "./CreateConstructor";
import Header from "./Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={CreateConstructor} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
