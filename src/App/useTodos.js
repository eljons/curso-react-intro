import React from "react";
import { useLocalStorage } from './useLocalStorage';

function useTodos(){
  const {
    item: todos,
    saveItems: setTodos,
    sincronizeItem: sincronizeTodos,
    error,
    loading,
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos?.filter(
    todo => todo.completed === true
    ).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {  // o usar { return .....}
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)           ;
    }
  );

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
    setTodos(newTodos);
  };    

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  }

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  };
  
  return(
    {
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      loading,
      error,
      openModal,
      setOpenModal,
      addTodo,
      sincronizeTodos
    }
  )
}



export { useTodos };