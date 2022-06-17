import {useState} from 'react';

function Todo(props) 
{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler()
    {
        
    }

    return (<div>
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick = {deleteHandler}>Delete</button> {/* No parentheses when calling function otherwise function is run as soon as react sees it */}
        </div>
    </div>
  </div>);
}

export default Todo;