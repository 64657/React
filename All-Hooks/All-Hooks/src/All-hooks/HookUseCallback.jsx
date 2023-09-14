import React, { useCallback, useState} from 'react'


const Child = React.memo(({handleChange, setfirst}) => {
    console.log('child ran');
    return (
        <>
        <p>{handleChange()}</p>
        <button onClick={()=>setfirst(prev => !prev)}>Change</button>
        </>
    )
})

function HookUseCallback() {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });

    const [first, setfirst] = useState(false);

   const handleChange = useCallback(() => {
    return count.num * 2
   },[count]);

    const handleAdd = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num + 1,
            };
        });
    };

    const handleSubtract = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num - 1,
            };
        });
    };
    
   
  

  return (
    <>
    <button onClick={handleSubtract}>-</button>
    <span>{count.num}</span>
    {first && <span>{count.id}</span>}
    {/* if the first is true , display this id */}
    <button onClick={handleAdd}>+</button>
    <Child handleChange = {handleChange} setfirst={setfirst} />
   
    </>
  );
}

export default HookUseCallback;