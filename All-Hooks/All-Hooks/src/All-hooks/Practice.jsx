// import React, { createContext, useEffect, useRef, useState } from 'react';


// export const HookDemo = createContext();

// const Context = ({children}) => {
//     const [count, setcount] = useState({
//         num: 1,
//         id: "abcd",
//     })
//     return (
//         <HookDemo.Provider value={{count, setcount}} >
//             {children}
//         </HookDemo.Provider>
//     )
// }

// export default Context;


import React from 'react'

function HookUseReducer() {
    const countReducer = (state, action) => {
        switch(action.type) {
            case "add":
                return state + 1;
            case "substract":
                return state - action.payload;
                default:
                return state;    
        }
    }

    const [state, dispatch] = useReducer(countReducer, 0)
  return (
    <>
    <button onClick={() => dispatch({type: "substract", payload: 5})}>-</button>
    <span>{state}</span>
    <button onClick={() => dispatch({type: "add"})}>+</button>
    </>
  )
}

export default HookUseReducer

































// function Practice() {
//     const [count, setCount] = useState({
//         num: 1,
//         id: "abcd",
//     });

//     const countRef = useRef();
//     const inputRef = useRef();
//     const [name, setName] = useState('');

//     const handleAdd = () => {
//         setCount((prev) => ({
//             ...prev,
//             num: prev.num + 1,
//         }));
//     };

//     const handleSubtract = () => {
//         setCount((prev) => ({
//             ...prev,
//             num: prev.num - 1,
//         }));
//     };

//     useEffect(() => {
//         countRef.current = name;
//     }, [name]);

//     return (
//         <>
//             <button onClick={handleSubtract}>-</button>
//             <span ref={countRef}>{count.num}</span>
//             <span>{count.id}</span>
//             <button onClick={handleAdd}>+</button>

//             <input ref={inputRef} onChange={(e) => setName(e.target.value)} />

//             <p>
//                 {name} is state -- {countRef.current} is ref
//             </p>
//         </>
//     );
// }

// export default Practice;
