import React, {useEffect, useState } from 'react'

function DataFetchingComponent() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const url = "http://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        console.log("Component Rendered!!!!");

        fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setTimeout(() =>   {
            setData(data);
            setLoading(false);
          }, 5000)
        })
        .catch(error => {
          console.log("$$$$",error);
          setError(error);
          setLoading(false)

        });
  },[]);
  if(loading) {
    console.log('First loaded!!!')
    return <div>Loading...</div>;
  }
  if(error) {
    return <div>Error: {error.messege}</div>
  }
  return (
    <div>
      <h2>DataFetchingComponent</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.username}</li>
        ))}
      </ul>
       </div>
  )
}

export default DataFetchingComponent