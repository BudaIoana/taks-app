import { useContext, useEffect, useReducer, useState } from "react";
import getTasks from "../../services/getTasks";
import Task, { TaskProps } from "../../parts/Task";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import {
  tasksInitialState,
  tasksReducer,
  useTasksAction,
} from "./tasksReducer";
import { AuthContext } from "../LoginPage/AuthContext";

const initialTask = {title:'',description:''};

export default function HomePage() {
  const [state, dispatch] = useReducer(tasksReducer, tasksInitialState);
  const { setTasks } = useTasksAction(dispatch);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [task, setTask] = useState<TaskProps>(initialTask);
  const user = useContext(AuthContext).user;
  console.log('am user',user,localStorage.getItem('user'));

  useEffect(() => {
    try {
      getTasks().then((tasks) => setTasks(tasks));
    } catch (error) {
      console.log("error");
    }
  }, [setTasks]);

  const addNewTask = () => {
    setIsAddDialogOpen(true);
  };
  const handleSaveTask =()=>{
  setTasks([...state.allTasks,{...task,createDate:new Date().toUTCString(),
  id:Math.random()*99999}]);
  setIsAddDialogOpen(false)
  setTask(initialTask)
  }
  const handleTaskChange =(e)=>{
   const {name,value}=e.target;
    setTask({...task,[name]:value})
  
  }
  const handleRemoveTask=(task:TaskProps)=>{
   setTasks(state.allTasks.filter(e=>e.id!==task.id))
  }

  

  return (
    <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button variant="contained"  sx={{position:'absolute',top:'10px',left:'10px'}} onClick={addNewTask}>Add</Button>
     
      <Grid
        container
        spacing={4}
        sx={{ width: "85%", backgroundColor: "grey" }}
      >
        {state.allTasks.map((e) => (
          <Grid item key={`${e.title}+${e.createDate}`}>
            <Task
              title={e.title}
              description={e.description}
              createDate={e.createDate}
              onRemove={()=>handleRemoveTask(e)}
            ></Task>
          </Grid>
        ))}
      </Grid>
      <Dialog open={isAddDialogOpen}>
        <DialogTitle>Task</DialogTitle>
        <DialogContent >
        <Stack spacing={3} direction="column" sx={{ marginBottom: 5 }}>
          <TextField  onChange={handleTaskChange} name='title' label="title" type='text' value={task.title}>
          </TextField>
          <TextField  name='description' label="description" onChange={handleTaskChange} value={task.description} multiline rows={2} maxRows={4} />
         </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveTask}>Save</Button>
        </DialogActions>
      </Dialog>
     
    </div>
    </>
  );
}
