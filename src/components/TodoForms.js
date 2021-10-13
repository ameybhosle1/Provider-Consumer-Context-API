import React , {useContext, useState , } from 'react'
import {v4} from "uuid";
import { ADD_TODO  , REMOVE_TODO } from '../context/action.types';
import Context from '../context/Context';


const TodoForms = ()=>{
    const [todostring , setTodostring] = useState("");
    const { dispatch } = useContext(Context)
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(todostring == ""){
            return alert("Add String");
        }else{
            const todo = {
                todostring ,
                id: v4()
            }
            dispatch({
                type:ADD_TODO,
                payload:todo
            })
            setTodostring("");
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="todo" 
            id="todo" 
            value={todostring} 
            onChange={e  => setTodostring(e.target.value)} />
            <button>Submit</button>
        </form>
    );
}

export default TodoForms;