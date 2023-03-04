import { Task } from '../interface/Task';
import TaskCard from './TaskCard';

interface Props {
  tasks: Task[];
}

export default function TaskList({ tasks }: Props) {
  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} className='col-md-6'>
          <TaskCard task={task} />
        </div>
      ))}
    </>
  );
}
