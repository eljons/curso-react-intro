import React from 'react';
import './TodoCounter.css'

function TodoCounter({totalTodos, completedTodos,loading}) {
  console.log(loading)
  return (
    totalTodos === completedTodos ?
    <h1 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Has completado todas las tareas !!!
    </h1>

    :

    <h1
      className="TodoCounter"
    >
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export {TodoCounter}

