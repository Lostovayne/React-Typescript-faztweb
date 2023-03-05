import { Task } from '../interface/Task';

interface Props {
  task: Task;
  deleteTask: (id: number) => void;
}

export default function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className='card card-body bg-primary rounded-4 '>
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>
      <button
        onClick={() => task.id && deleteTask(task.id)}
        className='btn btn-danger rounded-4'
      >
        Delete
      </button>
    </div>
  );
}
