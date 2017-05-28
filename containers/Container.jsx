// npm package
import React from 'react'
import axios from 'axios'

// modules
import Form from '../components/Form.jsx'
import Exposition from '../components/Exposition.jsx'
import List from '../components/List.jsx'

var style = {
  width: "70%",
  padding: 15,
  alignText: "center",
  fontFamily: "'Kumar One', cursive"
}

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
          renderList: true,
          url: 'https://www.amazon.com/gp/registry/wishlist/' + document.getElementById('input').value
        })
      })
  }

  render(){
    return (
      <div style={style}>
        <Exposition />
        <Form getList={this.getList} />
        {this.state.renderList ? <List url={this.state.url} list={this.state.wishlist}/> : null}
      </div>
    )
  }
}

export default Container
