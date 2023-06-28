const ToDoItem = ({item, clickRemoveButtonHandler, clickDoneButtonHandler, children}) => {
    return (
        <div key={item.id} className='toDoItem'>
          <div className='toDoContent'>
            <p>{item.title}</p>
            <p>{item.content}</p>
          </div>
          <div className='buttonBox'>
            <button onClick={()=>clickRemoveButtonHandler(item.id)}>삭제하기</button>
            <button onClick={()=>clickDoneButtonHandler(item.id, item.isDone)}>{children}</button>
          </div>
        </div>
        )
}

export default ToDoItem