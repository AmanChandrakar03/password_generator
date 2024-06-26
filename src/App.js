
import './App.css';
import { useCallback, useState } from 'react';

function App() {
  const[length,setLength] = useState(8);
  const[numberAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed] = useState(false);
  const[password,setPassword] = useState("")
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+="

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,charAllowed,setPassword])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8
    text-orange-500 bg-gray-700 text-center'>
      <h1 className='text-white text-2xl text-center my-3'>Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden my-6 mb-96'>
        <input
        type='text'
        value={password}
        placeholder='Password'
        readOnly
        className='outline-none w-full py-1 px-3'

        />
        <button className='outline-none bg-blue-600 text-white
        px-3 py-0.5 shrink-0'>Copy</button>
      </div>
    </div>
  );
}

export default App;
