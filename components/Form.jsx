import React from 'react'

// rendered by Container
function Form(props){
  return (
    <div id="form">
      <input type="text" placeholder="Wishlist ID here" id="input"/>
      <button onClick={props.getList}>get that list</button>
    </div>
  )
}

export default Form
