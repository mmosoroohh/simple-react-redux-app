import React, {Component} from 'react';
import './App.css';

import TodoApp from "./components/app/TodoApp";

class App extends Component {
    render() {
        return (
            <div className="App">
                <TodoApp />
            </div>
        );
    }
}

export default App;
