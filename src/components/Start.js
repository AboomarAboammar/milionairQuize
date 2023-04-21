import React, { useRef } from 'react'

const Start = ({setUserName}) => {
  const inputRef =useRef();
  const handleClick =()=>{
    inputRef.current.value&& setUserName(inputRef.current.value);
  }
  return (
    <div className='start'>
        <input type="text" placeholder='inter you name'
        className='startplayer' ref={inputRef}/>
        <button className='btnstart' onClick={handleClick}>start</button>
    </div>
  )
}

export default Start