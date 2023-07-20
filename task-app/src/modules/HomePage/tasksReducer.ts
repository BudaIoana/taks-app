
import { useCallback } from "react"
import { TaskProps } from "../../parts/Task"

type TasksState ={
    allTasks:TaskProps[]
}

enum TaskActionType {
    SET_TASKS='setTasks',
}
type TaskPayload ={
    tasks:TaskProps[]
}
type TaskAction ={
    type:TaskActionType;
    payload:TaskPayload;
}

export const tasksInitialState:TasksState ={
  allTasks :[] as TaskProps[]
}
export function tasksReducer(state:TasksState,action:TaskAction){
    switch(action.type){
     case TaskActionType.SET_TASKS:
        if(action.payload){
            const allTasks = action.payload.tasks;
            return {...state,allTasks}
        }
        else{
            console.warn('no payload passed to tasks');
            return state;
        }
        default:
            throw new Error('unhadled action type');
    }
  
}
export function useTasksAction(dispatch:React.Dispatch<TaskAction>){
    return {
        setTasks:useCallback((tasks:TaskProps[])=>{
            dispatch({type:TaskActionType.SET_TASKS,payload:{tasks}})
        },[])
    }
}
