import React from "react";

function TodoHeader({children, loading}){
  

  return(
    <>
      {React.Children
        .toArray(children)
        .map(child => React.cloneElement(child,{loading}))}
    </>
  )
}

export {TodoHeader}