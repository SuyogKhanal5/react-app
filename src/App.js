import Todo from './components/Todo'
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() 
{
  return ( 
    <div>
      <h1>My To Dos:</h1>
      <Todo text = 'Learn React'/>
      <br/>
      <Todo text = 'Master React'/>
      <br/>
      <Todo text = 'Explore the full React course'/>
      <Modal />
      <Backdrop />
    </div>
  )
}

export default App;
