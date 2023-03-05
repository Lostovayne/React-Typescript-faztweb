import { AiOutlinePlus } from 'react-icons/ai';
import { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { Task } from '../interface/Task';

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type HandleSubmitForm = FormEvent<HTMLFormElement>;

interface Props {
  addANewTask: (task: Task) => void;
}

const initialState = {
  title: '',
  description: ''
};



export default function TaskForm({ addANewTask }: Props) {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value }
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const handleNewTask = (e: HandleSubmitForm) => {
    e.preventDefault();
    addANewTask(task);
    setTask(initialState)
  };

  return (
    <div className='card card-body bg-secondary text-dark'>
      <h1>Add Task</h1>

      <form onSubmit={handleNewTask}>
        <input
          type='text'
          placeholder='whrite a title '
          name='title'
          className='form-control mb-3 rounded-0 shadow-none border-0'
          onChange={handleInputChange}
          value={task.title}
        />

        <textarea
          name='descripcion'
          rows={2}
          placeholder='write a Description'
          className='form-control mb-3 shadow-none border-0'
          onChange={handleInputChange}
          value={task.description}
        ></textarea>

        <button className='btn btn-primary'>
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
