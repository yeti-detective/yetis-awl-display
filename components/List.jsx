import React from 'react'

function List(props){

  return(
    <div>
      <table>
        <thead><a href={props.list.url}>{props.list.title}</a></thead>
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
