import React, { useState } from 'react';
import './App.css';

function App() {

  //기본 데이터
  const [toDo, setToDo] = useState([
    {id: 1, title: "리액트 공부"},
    {id: 2, title: "배포 공부"},
  ])

  //title 입력을 알아차리고 저장하기 위함
  const [title, setTitle] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  //추가하기 버튼 눌렀을 때 handler
  const clickAddButtonHandler = () =>{
    const newToDo = {
      id: Date.now(),
      title,
    }

    setToDo([...toDo, newToDo])

    setTitle('')
  }

  return (
    <div className='container'>
      {/* 입력div 부분*/}
      <div>
        <input 
        ype="text"
        value={title}
        onChange={titleChangeHandler}/>
        <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>

      {/* Todo List div 부분 */}
      <div className='toDoListText'>ToDo List</div>
      <div className='toDoBoxs'>
        {toDo
        .map((item)=>{
          return (
            <div className='toDoBox' key={item.id}>
              {item.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App