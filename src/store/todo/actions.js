import * as types from './types';

import api from '../../api/data.json';

export const getAllTodo =()=>{
    return dispatch =>{
        
        return dispatch({
            type : types.ALL_TODOS_SUCCESS,
            payload : api.todos
        });

    }
}