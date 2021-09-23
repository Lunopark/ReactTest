import React, { Component } from 'react'
import Loader from './Loader/Loader'
import Table from './Table/Table'

class App extends Component {

  state = {
    isLoading: true,
    data: []
  }

  async componentDidMount() {
    const response = await fetch(`https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json`)
    const data = await response.json()

    this.setState({
      isLoading: false,
      data
    })
  } 

  render() {
    return (
      <div className="container">
        {
          this.state.isLoading ? <Loader /> : <Table data={this.state.data} />
        }
      </div>
    );
  }
}

export default App