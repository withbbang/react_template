import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Index from "components/index";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route
            path="*"
            component={({ location }) => (
              <div>"{location.pathname}" not found</div>
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
