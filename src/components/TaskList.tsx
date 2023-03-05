import { Task } from '../interface/Task';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[];
  deleteTask : ( id: number) => void 
}

export default function TaskList({ tasks, deleteTask }: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className='col-md-6'>
          <TaskCard task={task} deleteTask={deleteTask} />
        </div>
      ))}
    </>
  );
}
