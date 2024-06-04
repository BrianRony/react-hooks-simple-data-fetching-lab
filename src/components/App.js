// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setData(data);
            setLoading(true)
        })
    })

    if(!loading) return <p>Loading...</p>
  return (
    <div>
      
      <img src={data.message} alt="A Random Dog" />
    </div>
  )
}

export default App