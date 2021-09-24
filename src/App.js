import React, { Component } from 'react'
import Loader from './Loader/Loader'
import Table from './Table/Table'
import Pagination from './Table/Pagination'
import Search from './Table/Search'
import DetailRowView from './Info/DetailRowView'
import './App.css'
import _ from 'lodash'

class App extends Component {

  state = {
    isLoading: true,
    data: [],
    sortDirection: 'asc',
    sortField: 'id',
    row: null
  }

  async componentDidMount() {
    const response = await fetch(`https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`)
    const data = await response.json()

    this.setState({
      isLoading: false,
      data: _.orderBy(data, this.state.sortField, this.state.sortDirection)
    })
  } 

  sort = sortField => {
    const cloneData = this.state.data.concat()
    const sortType = this.state.sortDirection === 'asc' ? 'desc' : 'asc'

    const orderedData = _.orderBy(cloneData, sortField, sortType)
    this.setState({
      data: orderedData,
      sortDirection: sortType,
      sortField
    })
  }
  
  onRowSelect = row => {
    this.setState({row})
  }

  render() {

    return (
      <div className="container">
        {
          <Search />
        }
        {
          this.state.isLoading
           ? <Loader /> 
           : <Table 
           data={this.state.data}
           sort={this.sort} 
           sortDirection = {this.state.sortDirection}
           sortField = {this.state.sortField}
           onRowSelect={this.onRowSelect}
           />
        }
        {
          <Pagination />
        }
        {
          this.state.row ? <DetailRowView person={this.state.row} /> : null
        }
      </div>
    );
  }
}

export default App