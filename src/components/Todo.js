import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) 
{
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler()
    {
        setModalIsOpen(true);
    }

    function closeModalHandler()
    {
      setModalIsOpen(false);
    }

    return (<div>
    <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick = {deleteHandler}>Delete</button> {/* No parentheses when calling function otherwise function is run as soon as react sees it */}
        </div>
        { modalIsOpen && <Modal onCancel = {closeModalHandler} onConfirm = {closeModalHandler}/>}
        {modalIsOpen && <Backdrop onCancel = {closeModalHandler}/>}
    </div>
  </div>);
}

export default Todo;