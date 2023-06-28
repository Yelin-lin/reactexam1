import { useState } from 'react';
import './App.css';

import ToDoItem from './components/ToDoItem';

function App() {

  //기본 데이터
  const [toDo, setToDo] = useState([
    {id:1, title:"리액트", content:"공부하자", isDone: false},
    {id:2, title:"vercel", content:"해보자", isDone: false},
  ])

  //title과 content를 입력받는 걸 render해주기 위함
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //title입력받기 위함
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  //content입력받기 위함
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  }

  //추가하기 버튼 handler
  const clickAddButtonHandler = () => {
    const newToDo = {
      id: Date.now(),
      title,
      content,
      isDone: false,
    }

    setToDo([...toDo, newToDo])

    setTitle('');
    setContent('');
  }

  //삭제버튼 handler
  const clickRemoveButtonHandler = (id) => {
    const newToDo = toDo.filter((item)=>item.id!==id);
    setToDo(newToDo)
  }

  //완료 버튼 눌렀을 때 
  //완료 <-> 취소
  const clickDoneButtonHandler = (id, isDone) =>{
    const upDateToDo = toDo.map((item)=>{

      if(item.id === id){
        return {...item, isDone: !isDone}
      }
      return item;
    })

    setToDo(upDateToDo)
  }

  return (
    <div>
      <div className='container'>
        <div>My Todo List</div>
        <div>React</div>
      </div>
      
      <div className='inputTodoBox'>
        <div className='inputTitleBox'>
          제목 &nbsp;
          <input
            value={title}
            onChange={titleChangeHandler}
            />
        </div>

        <div className='inputContentBox'>
          내용 &nbsp;
          <input
            value={content}
            onChange={contentChangeHandler}
            />
        </div>

        <button onClick={clickAddButtonHandler}>추가하기</button>

      </div>
      <div className='toDoListBox'>
        <div className='toDoBox'>
          <div>Working.. 🔥</div>
          <div className='toDoItemList'>
            {toDo
            .filter((item)=>item.isDone===false)
            .map((item)=>{
              return <ToDoItem key={item.id} item={item} clickRemoveButtonHandler={clickRemoveButtonHandler} clickDoneButtonHandler={clickDoneButtonHandler}>완료</ToDoItem>
            })}
          </div>
        </div>

        <div className='toDoBox'>
          <div>Done..! 🎉</div>
          <div className='toDoItemList'>
            {toDo
            .filter((item)=>item.isDone===true)
            .map((item)=>{
              return <ToDoItem key={item.id} item={item} clickRemoveButtonHandler={clickRemoveButtonHandler} clickDoneButtonHandler={clickDoneButtonHandler}>취소</ToDoItem>
            })}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;