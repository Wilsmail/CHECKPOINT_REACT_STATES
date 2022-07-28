import React, { useState, useEffect, useRef } from "react";

export default function 
() { 
    const [count, setCount] = useState(0);

    useInterval(() => {
      // Your custom logic here
      setCount(count + 1);
    }, 1000);
    function useInterval(callback, delay) {
        const savedCallback = useRef();
      
        // Remember the latest function.
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        // Set up the interval.
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, []);
      }
  return (
    <div>
        {count}
    </div>
  )
}
