import React, { useEffect, useMemo, useState } from 'react'

function Hookspractise() {
    const [count, setcount] = useState({
        num: 1,
        id: "abcd",
    });


    const [show, setshow] = useState(false);
    const handlechange = useMemo(() => {
     for(let i = 0; i < 100000000; i++) 
        return count.num * 2
     },[count])

        
    

    const handleAdd = () => {
        setcount((prev) => {
            return {
                ...prev,
                num: prev.num + 1,
            }
        })
    };

    const handleSubtract = () => {
        setcount((prev) => {
            return {
                ...prev,
                num: prev.num - 1,
            };
        });
    };
//    const [screenWidth, setscreenWidth] = useState(window.innerWidth);

//    useEffect(() => {
//      window.addEventListener('resize', () =>{
//         setscreenWidth(window.innerWidth);
//      });
//      console.log("ran")
   
//      return () => {
//        console.log("ran returned")
//      }
//    }, [count]);
   
  return (
    <>
    <button onClick={handleSubtract}>-</button>
    <span>{count.num}</span>
    {show && <span>{count.id}</span>}
    <button onClick={handleAdd}>+</button>
    {/* <p>{screenWidth}</p> */}
    <p>{handlechange}</p>
    <button onClick={() => setshow (prev => !prev)}>Change</button>
    </>
  )
  }

export default Hookspractise