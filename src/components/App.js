import React from 'react'

const App = () => {

  let arr = ["Arjun","yashvini","Ashish"]
  return (
    <div id="main">
<ul id = "order">
 {arr.map((value,index)=>{
  return <li>{value}</li>
})}
</ul>
    </div>
  )
}

export default App
