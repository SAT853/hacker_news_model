import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { Provider } from "react-redux";
import { st, store } from "./redux/stroe";
const App = () => {
  return (
    <Provider store={store}>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </Provider>
  );
};

export default App;
