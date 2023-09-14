import { forwardRef, useEffect, useImperativeHandle, useState} from 'react'

const Counter = forwardRef((props, ref) => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });

    const handleAdd = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num + 1,
            };
        });
    };

    const handleSubstract = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num - 1,
            };
        });
    };
    
    useImperativeHandle(ref, () => ({
        handleAdd,
        handleSubstract,
    }))
   


  return (
    <>
    {/* <button onClick={handleSubtract}>-</button> */}
    <span>{count.num}</span>
    {/* <span>{count.id}</span> */}
    {/* <button onClick={handleAdd}>+</button> */}
    {/* <p>{screenWidth}</p> */}
    </>
  );
})

export default Counter