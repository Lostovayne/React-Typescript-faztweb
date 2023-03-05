import './App.css';
import { useState } from 'react';
import logo from '../src/assets/react.svg';
import { Task } from './interface/Task';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

interface Props {
  title: string;
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn react',
      completed: false
    }
  ]);
  
  const getCurrentTimestamp = () : number => new Date().getTime() 

  const addANewTask = (task: Task) =>
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false }
    ]);

  const deleteTask = (id:number) => setTasks(tasks.filter( task => task.id !== id  ))  
    
  
  return (
    <div className='bg-dark' style={{ height: '100vh', color: 'white' }}>
      {/* Navbar */}
      <nav className='navbar navbar/dark bg-primary'>
        <div className='container'>
          <a href='/' className='navbar-brand' style={{ color: 'white' }}>
            <img src={logo} alt='react logo' style={{ width: '4rem' }} />
            {title}
          </a>
        </div>
      </nav>

      <main className='container p-4'>
        <div className='row'>
          <div className='col-md-4'>
            <TaskForm addANewTask={addANewTask} />
          </div>

          <div className='col-md-8'>
            <div className='row'>
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
