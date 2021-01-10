import React from 'react';
import { connect } from "react-redux";
import './List.css';
import { deleteTodo } from "../../actions";

const List = (props) => {
    return (
        <div className="result_part">
            <ul>
                {props.todos.map((todo, index) => (
                    <li key={index}>
                        {todo.message}
                        <button onClick={() => props.dispatch(deleteTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateTopProps = (state) => ({
    todos: state.todos.data,
})

export default connect(mapStateTopProps)(List);