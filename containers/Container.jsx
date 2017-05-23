// npm package
import React from 'react'
import axios from 'axios'

// modules
import Form from '../components/Form.jsx'
import Exposition from '../components/Exposition.jsx'
import List from '../components/List.jsx'

class Container extends React.Component {
  constructor(){
    super()
    this.state = {
      wishlist: {},
      renderList: false
    }
    this.getList = this.getList.bind(this)
  }

  getList(){
    axios.get('https://yetis-amazon-wishlist-api.herokuapp.com/' + document.getElementById('input').value)
      .then((data)=>{
        this.setState({
          wishlist: JSON.parse(data.data),
          renderList: true
        })

        //console.log(JSON.parse(data.data))
      })
  }

  render(){
    return (
      <div>
        <Exposition />
        <Form getList={this.getList} />
        {this.state.renderList ? <List list={this.state.wishlist}/> : null}
      </div>
    )
  }
}

export default Container
