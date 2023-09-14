import React, {useState} from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    const [receivedData, setReceiveData] = useState("");


    const handleDataFromChild = (data) => {
        setReceiveData(data);
    }
    const names = ["Alice" , "barbie"];
  return (
    <div>
        <h1>List  of Names</h1>
        <p>Data from child: {receivedData}</p>
        <ChildComponent onDataFromChild={handleDataFromChild}
        names={names}></ChildComponent>
    </div>
  )
}

export default ParentComponent