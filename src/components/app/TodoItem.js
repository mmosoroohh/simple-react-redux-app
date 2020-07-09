import React from "react";

export const TodoItem = (todo) => {
    return (
        <div className="item-box">
            <h2 className="pull-left">
                {todo.todo.title}
                <input className="checkbox" type="checkbox" />
            </h2>
        </div>
    )
}

export default TodoItem;
