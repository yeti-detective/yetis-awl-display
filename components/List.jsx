import React from 'react'

function List(props){
  let itemList = []
  if (props.list.title){
    itemList.push(props.list.title)
    for ( let i = 1; i < Object.keys(props.list); i++ ){
      itemList.push(props.list[i])
    }
    return (
      <table>
        <thead>{itemList.shift()}</thead>
        {itemList.map((wish)=>{
          <tr>
            <td><img src={wish.img} /></td>
            <td><a href={wish.url}>{wish.title}</a></td>
          </tr>
        })}
      </table>
    )
  } else if (Object.keys(props.list).length > 0){
    <table>
      <thead>Wishlist</thead>
      {itemList.map((wish)=>{
        <tr>
          <td><img src={wish.img} /></td>
          <td><a href={wish.url}>{wish.title}</a></td>
        </tr>
      })}
    </table>
  } else {
    return (
      <div>
        <p>Yo?</p>
      </div>
    )
  }
}

export default List
