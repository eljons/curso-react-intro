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
import { useTodos } from './useTodos';
import {TodoForm} from '../TodoForm'
import {TodoHeader} from '../TodoHeader'
import {ChangeAlert} from '../ChangeAlert'

function App() {
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
    setSearchValue,
    addTodo, 
    setOpenModal,
    sincronizeTodos,
  } = useTodos();
  
  return (
    <>
      <TodoHeader
        loading={loading}
      >
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos} 
          
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}  
          loading={loading}
        />
      </TodoHeader>

      <TodoList 
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={()=><TodosError />}
        onLoading={()=><TodosLoading />}
        onEmptyTodos={()=><EmptyTodos />}
        onEmptySearchResults={
          (searchText)=> <p>No hay resultados para {searchText}</p>
        }
        render={todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
        >
        {/* {todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )} */}
      </TodoList>
      
      {/* <TodoList>
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
      </TodoList> */}

      <CreateTodoButton setOpenModal={setOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <ChangeAlert sincronize={sincronizeTodos} />
    </>
  );
}

export default App;