import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom";
import "./index.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/iceCreamContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <HooksCakeContainer />
          <CakeContainer />
          <IceCreamContainer />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
