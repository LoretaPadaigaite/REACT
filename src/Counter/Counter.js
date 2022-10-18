import { useEffect, useState } from "react";

export const Counter = () => {
    const[count, setCount] = useState(0);
    const [todo, setTodo] = useState(null);
    const [isLoading, setIsLoading] = useState(false)


    const handelIncrement = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handelDecrement = () => {
        setCount(count - 1)
    }

   useEffect(()=>{
    //console.log('RERENDER')

   setIsLoading(true);
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    setTodo(json);
    setIsLoading(false);
  })
   }, []);

/*    return () => {
        console.log('ANMOUNTING')
    }
   }, [])*/

   if(isLoading) {
    return <div>Loading....</div>
   }

    return (
        <>

        <span>{count}</span>
        <button onClick={handelIncrement}>Increment</button>
        <button onClick={handelDecrement}>Decrement</button>
       <div>{todo?.title}</div>
       <div>{String(todo?.completed)}</div>
        


        </>
    )
}