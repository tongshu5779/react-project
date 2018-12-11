import React, {Component} from 'react'
import {connect} from 'react-redux'
import {search} from '../../store/actions'

class Search extends Component {


  setSearchName = () => {
    const searchName = this.refs.searchName.value.trim()
    if(searchName) {
      this.props.search(searchName)
    }
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref='searchName'/>
          <button onClick={this.setSearchName}>Search</button>
        </div>
      </section>
    )
  }
}

export default connect(
  state => ({}),
  {search}
)(Search)