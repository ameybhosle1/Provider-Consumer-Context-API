import React, { useReducer } from 'react';
import Context from '../context/Context';
import TodoReducer from '../context/Reducer';
import TodoForms from './TodoForms';


export default function Stateing(){
    const [todos , dispatch ] = useReducer(TodoReducer , [])
    return(
        <Context.Provider value={{todos , dispatch }}>
            <h1>APP WITH REDUCER AND CONTEXT API</h1>
            {todos.map(data =>(
                <h4>
                    {data.todoString}
                </h4>
            ))}
            <TodoForms />
        </Context.Provider>
    );
}