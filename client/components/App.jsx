import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    })
  }
  render () {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <h4>Tweet Sentiment Analysis</h4>
        <p>Result:</p>
      </div>
    )
  }
}

export default App
