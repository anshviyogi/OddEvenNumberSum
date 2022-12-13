import React,{useEffect, useState} from 'react'

function App() {
  const[number,setNumber] = useState(0)
  const[isEven,setIsEven] = useState(false)
  const[resultant,setResultant] = useState(0)
  const newNumber = []

  useEffect(()=>{
    localStorage.removeItem('numbers')
  },[])

  function submitHandler(e){
    e.preventDefault();
    const numberArray = JSON.parse(localStorage.getItem('numbers') || "[]");

    if(number % 2 === 0){
      setIsEven(true)

      // Even Number
      const localOddNumbers = JSON.parse(localStorage.getItem('numbers'))
      localOddNumbers.map(data => newNumber.push(Number(data)))

      // Adding the numbers
      const number = newNumber.reduce((a,b) => a+b)
      return setResultant(number)
    }else{
      // Odd Number
      setIsEven(false)

      numberArray.push(number)
      localStorage.setItem('numbers',JSON.stringify(numberArray))
    }
  }

  return (
    <form className='bg-teal-400 w-screen h-screen flex justify-center items-center' onSubmit={submitHandler}>
        <input type="number" className='outline-none border border-black rounded-sm' onChange={e => setNumber(e.target.value)}/>
        <button className='bg-white p-1 rounded-lg w-20'>{isEven ? resultant * number  :  "Add"}</button>
    </form>
  )
}

export default App