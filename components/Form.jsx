import React from 'react'

function Form(props){
  return (
    <div id="form">
      <input type="text" placholder="Wishlist ID here" id="input"/>
      <button onClick={props.getList}>get that list</button>
    </div>
  )
}

export default Form
