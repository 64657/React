import {  useEffect, useRef, useState} from 'react'

function HookUseRef() {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd",
    });

    // const [rendered, setrendered] = useState(1)
    // useEffect(() => {
    //     setrendered((prev) => prev + 1)
    // })

    // const renderRef = useRef(0);

    // useEffect(() => {
    //   renderRef.current = renderRef.current + 1;
    // })
    
    const countRef = useRef()


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

    const [name, setName] = useState('');

    useEffect(() => {
        countRef.current = name;
    }, [name]);
     

  return (
    <>
    <button onClick={handleSubtract}>-</button>
    <span ref={countRef}>{count.num}</span>   
    {/* here the countRef references to the particular html tag */}
    <span>{count.id}</span>                     
    <button onClick={handleAdd}>+</button>
    {/* <p>{renderRef.current}</p> */}

    {/* <button onClick={() => {
        countRef.current.innerHTML = '10';
    }}>Change to 10</button> */}

    <input ref={countRef} onChange={(e) => setName(e.target.value)} />

    <p>
        {name} is state -- {countRef.current} is ref
    </p>

    
    </>
  );
}

export default HookUseRef