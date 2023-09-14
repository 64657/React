import { useEffect, useState} from 'react'

function HookUseState() {
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

    const handleSubtract = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num - 1,
            };
        });
    };
    
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() =>  {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth);
        });
        console.log("ran");

        return() => {
            console.log('ran returened')
        }
    }, [count]);


  return (
    <>
    <button onClick={handleSubtract}>-</button>
    <span>{count.num}</span>
    <span>{count.id}</span>
    <button onClick={handleAdd}>+</button>
    <p>{screenWidth}</p>
    </>
  );
}

export default HookUseState