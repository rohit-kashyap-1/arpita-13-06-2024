import React, { useRef, useState } from 'react'

// controlled and uncontrolled components: forms

//apis(fetch() and axios)
//functional components
//state management
//conditional rendering 
function Controlled() {

  let username = useRef() //useRef

  const handleSubmit = (e) => {
    e.preventDefault() //used to prevent (submit) page reload

    //console username
    console.log(username.current.value)

    //e.target.value
  }

  //document.quuerySelector("").value
  return (
    <div>
      <form action='' onSubmit={handleSubmit} >
        <input type='text'  ref={username} />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default Controlled
