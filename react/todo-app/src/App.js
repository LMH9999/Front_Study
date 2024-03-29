import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array = [];
  for(let index = 0; index < 2500; index++){
    array.push({id:index+1,text:'일정'+(index+1),checked:false});
  }
}

const App = () => {
  const [todos,setTodos] = useState(
    [
      {id:1, text:'일정1', checked:true},
      {id:2, text:'일정2', checked:true},
      {id:3, text:'일정3', checked:true}
    ]
  );

  const nextId = useRef(4);
  const onInsert = useCallback(text=>{
    const nextTodo = {id:nextId.current,text:text,checked:false};
    setTodos(todos.concat(nextTodo));
    nextId.current = nextId.current+1;
  },[todos]);

  //TodoListItem remove button click -> id
  const onRemove = useCallback(id =>{
    setTodos(todos.filter(todo => todo.id !== id));
  },[todos]);
  
  
  const onToggle = useCallback(id => {
    setTodos(todos.map(todo=>
      todo.id===id ? {...todo,checked:!todo.checked}:todo)
    );
  },[todos]);

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
};

export default App;
