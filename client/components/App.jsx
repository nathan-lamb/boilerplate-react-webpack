import React from 'react'
import {getSentiment} from '../api'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
      sentiment: '',
      score: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleGetAnalysis = this.handleGetAnalysis.bind(this)
  }

  handleChange (e) {
    this.setState({
      text: e.target.value
    })
  }

  handleGetAnalysis () {
    getSentiment(this.state.text, (sentiment, score) => {
      this.setState({sentiment: sentiment, score: score})
    })
  }
  render () {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleGetAnalysis}>Submit</button>
        <h4>Tweet Sentiment Analysis</h4>
        <p>Sentiment: {this.state.sentiment} </p>
        <p>Score: {this.state.score}</p>
      </div>
    )
  }
}

export default App
