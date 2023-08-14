import React from "react";

function useLocalStorage (itemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() =>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
  
      setLoading(false);
  
      }catch(error){
        setLoading(false);
        setError(true);
      }
    },4000)
  },[]);

  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };   

  return {
    item,
    saveItems,
    error,
    loading,
  };
}

export { useLocalStorage };


// localStorage.removeItem('TODOS_V1');

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar curso', completed: false },
//   { text: 'Test 3', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'lwlo', completed: false },
//   { text: 'nueva prueba', completed: true }
// ];

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));