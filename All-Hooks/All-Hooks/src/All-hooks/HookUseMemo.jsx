import { useMemo, useState} from 'react'

function HookUseMemo() {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });

    const [first, setfirst] = useState(false)

    const handleChange = useMemo( () => {
        for (let i = 0; i < 100000000; i++) {}
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
    {first &&<span>{count.id}</span>}   
    {/* if the first is true , display this id */}
    <button onClick={handleAdd}>+</button>
    <p>{handleChange}</p>
    <button onClick={() => setfirst(prev => !prev)}>Change</button>
    </>
  );
}

export default HookUseMemo;