import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CakeContainer from './components/CakeContainer'

class App extends React.Component{
    render(){
        return(
        <div className="App">
            <CakeContainer />
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))