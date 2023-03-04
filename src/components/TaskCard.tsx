import { Task } from '../interface/Task';

interface Props {
  task: Task;
}

export default function TaskCard({ task }: Props) {
  return (
    <div className='card card-body bg-primary rounded-4 '>
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button className='btn btn-danger rounded-4'>Delete</button>
    </div>
  );
}
