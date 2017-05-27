import React from 'react'

// rendered by Container.jsx
function List(props){
  return(
    <div>
      <table>
        <thead><h2><a href={props.url} target="_blank">{props.list.title}</a></h2></thead>
        {
          props.list.wishes.map((wish)=>{
            return (
              <td>
                <tr><img src={wish.img} /></tr>
                <tr><a href={wish.url}>{wish.title}</a></tr>
              </td>
            )
          })
        }
      </table>
    </div>
  )
}

export default List
