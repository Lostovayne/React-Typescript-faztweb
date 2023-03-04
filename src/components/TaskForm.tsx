import { AiOutlinePlus } from 'react-icons/ai';
import { ChangeEvent, useState } from 'react';

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>



export default function TaskForm() {
  const [task, setTask] = useState({
    title: '',
    description: ''
  });

  const handleInputChange = ({
    target: { name, value }
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  return (
    <div className='card card-body bg-secondary text-dark'>
      <h1>Add Task</h1>

      <form action=''>
        <input
          type='text'
          placeholder='whrite a title '
          name='title'
          className='form-control mb-3 rounded-0 shadow-none border-0'
          onChange={handleInputChange}
        />

        <textarea
          name='descripcion'
          rows={2}
          placeholder='write a Description'
          className='form-control mb-3 shadow-none border-0'
          onChange={handleInputChange}
        ></textarea>

        <button className='btn btn-primary'>
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
