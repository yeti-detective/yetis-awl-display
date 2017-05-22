// npm package
import React from 'react'
import axios from 'axios'

// modules
import Form from '../components/Form.jsx'

class Container extends React.Component {
  constructor(){
    this.state = {
      wishlist: {}
    }
  }

  getList(){
    axios.get('https://yetis-amazon-wishlist-api.herokuapp.com/' + document.getElementById('input').value)
      .then((data)=>{
        this.setState({wishlist: data})
      })
  }

  render(){
    return (
      <div>
        <Form getList={this.getList} />
      </div>
    )
  }
}
