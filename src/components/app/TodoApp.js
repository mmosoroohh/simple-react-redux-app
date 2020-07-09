import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as todoActions from '../../actions/TodoActions';

import Navbar  from '../common/Navbar';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

export class TodoApp extends Component {
    constructor(props, ownProps) {
        super(props, ownProps);
        this.state = {
            todos: {}
        }
    }

    componentWillMount() {
        this.props.actions.getTodo()
    }

    render() {
        let listTodo
        if (this.props.todo.length > 0) {
            listTodo = this.props.todo.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })
        } else {
            listTodo = <h2>There are no available todos</h2>
        }
        return(
            <div>
                <Navbar />
                <div className="main">
                    <h2>TODO List</h2>
                    <AddTodo />
                    {listTodo}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state, ownProps) {
    return {
        todo: state.todo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
