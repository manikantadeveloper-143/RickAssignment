import React, { useEffect, useState } from 'react'
import "./Styles.css";
import Button from './Components/Button';
const App = () => {
  
  const [number,setNumber] = useState(1) //for pagenumbers
  const [state,setState] = useState() //for storing API data
  const url = `https://rickandmortyapi.com/api/character/?page=${number}`
  const list = [1,2,3,4,5,6,7,8,9,10] //for button values


  //ButtonList() for page Buttons
  function ButtonList(){
    let Btnlist = [];
    list.forEach((item,index)=>{
      Btnlist.push(<Button value={item} item={item} key={index} onClick={(e)=>getValue(e)}/>)
    })
    return Btnlist;
  }

  //getValue() for getting page number
 const getValue = ({target})=>{
  setNumber(target.value)
 }

 //fetchData() for fetching json object from API
  const fetchData = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    setState(data.results)
  }
  
  //useEffect to call the fetchData() when the page number is changed
  useEffect(()=>{
    fetchData()
  },[number])



  return (
    <>
    <div className='heading'>
      THE RICK AND MORTY DETAILS
    </div>
    <div className='btncontainer'>{ButtonList()}</div>
    <div className="maindiv">
      {state && state.map((item,index) =>{ 
      return(
      <div key={index} className="containerdiv">
        <img src={item.image} alt="img not found" width="200px" height="200px"/>
        <div>
        <h3 className='name'>{item.name}</h3>
        <h3 className='status'>{item.status==="Alive"?
         <span style={{color:"green"}}>{item.status}</span> :
         <span style={{color:"red"}}>{item.status}</span> }&nbsp;-&nbsp;{item.species}&nbsp;-&nbsp;{item.gender}
         </h3>
         <h3>
          Last Known Location:-
          <span style={{color:"brown"}}>{item.origin.name}</span>
         </h3>
         </div>
       </div>
      )
  })}
    <div className='btncontainer'>{ButtonList()}</div>
    </div>
    </>
  )
}

export default App;