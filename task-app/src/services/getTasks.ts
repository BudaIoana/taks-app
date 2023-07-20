import tasks from '../_mocks_/tasks.json'
import { TaskProps } from '../parts/Task';


async function getTasks():Promise<TaskProps[]> {

    try{
      let returnedTasks = Promise.resolve(tasks)
      return returnedTasks;
    }
    catch(error){
        console.log('error')
    }

}

export default getTasks;