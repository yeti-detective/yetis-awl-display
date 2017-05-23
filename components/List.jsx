import React from 'react'

function List(props){
  let listMap = []
  console.log(props)
  for (let i = 0; i < Object.keys(props).length; i++){
    if(i === 0){
      listMap.push(props.title)
    }
    listMap.push(props[i])
  }
  console.log(listMap)
  return (
    <div>
      <h3>{listMap.shift()}</h3>
      <table>
        {listMap.map((wish)=>{
          <tr>
            <td><img src={wish.img} /></td>
            <td><a href={wish.url}>{wish.title}</a></td>
          </tr>}
        )}
      </table>
    </div>
  )
}

export default List
