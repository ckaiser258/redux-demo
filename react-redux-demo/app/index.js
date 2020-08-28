import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import ReactDOM from "react-dom";
import "./index.css";
import CakeContainer from "./components/CakeContainer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CakeContainer />
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
