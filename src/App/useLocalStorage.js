import React from "react";

function useLocalStorage (itemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronizedItem, setSincronizedItem] = React.useState(true)

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
      setSincronizedItem(true)
  
      }catch(error){
        setLoading(false);
        setError(true);
      }
    },4000)
  },[sincronizedItem]);

  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };   

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  }

  return {
    item,
    saveItems,
    error,
    loading,
    sincronizeItem,
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