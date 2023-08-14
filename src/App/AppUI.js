import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreatetodoButton';
import {Modal} from '../Modal'
import { TodoContext } from '../TodoContext';
import {TodoForm} from '../TodoForm'
import {TodoHeader} from '../TodoHeader'

function AppUI() {
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoHeader>
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}  
        />
      </TodoHeader>
      
      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />} 

        {searchedTodos.map((todo,index) => (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };