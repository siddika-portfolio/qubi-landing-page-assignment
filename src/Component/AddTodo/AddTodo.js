import React from 'react';
import './AddTodo.css';
import {connect} from "react-redux";
import {addTodo} from "../../actions";

const AddTodo = (props) => {
    return (
        <div className="search_part">
            <form className="form_part"
                onSubmit= {(event) =>{
                    event.preventDefault()
                   let input = event.target.userInput.value;
                   props.dispatch(addTodo(input));
                   event.target.userInput.value = "";
                }}
            >
                <input className="input_part" type="text" name="userInput" placeholder="EXPLORE"/>
                <button className="bg-warning p-2">Submit</button>
            </form>
        </div>
    );
};

export default connect()(AddTodo);