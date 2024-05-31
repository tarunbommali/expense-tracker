import React from "react";
import Home from "./routes/Home";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
const App = () => {
  return (
    <Provider store={appStore}>
      <Home />
    </Provider>
  );
};

export default App;
