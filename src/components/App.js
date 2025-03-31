import React from 'react'

const App = () => {

  let relatives  = ["Arjun","yashvini","Ashish"]
  return (
    <div id="main">
<ol key = "relativeList">
 {relatives .map((value,index)=>{
  return <li key = {`relativeListItem${index+1}`} >{value}</li>
})}
</ol>
    </div>
  )
}

export default App
