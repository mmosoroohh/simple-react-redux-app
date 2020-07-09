import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as todoActions from '../../actions/TodoActions';

export class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }
    onsubmit = (event) => {
        event.preventDefault()
        this.props.actions.addTodo({title: this.state.todo, status: false})
    }
    handleChange = (event) => {
        this.setState({todo: event.target.value})
    }
    render(){
        return(
            <div>
                <form>
                    <input
                        type="text"
                        placeholder="Add todo item"
                        onChange={this.handleChange}
                    />
                    <input
                        value="Add todo"
                        type="submit"
                        onClick={this.onsubmit}
                    />
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);
