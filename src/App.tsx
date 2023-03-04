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
          <div className='col-md-4'><TaskForm /></div>

          <div className='col-md-8'>
            <div className='row'>
              <TaskList tasks={tasks} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
