import Todo from './components/Todo'
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
    </div>
  )
}

export default App;
