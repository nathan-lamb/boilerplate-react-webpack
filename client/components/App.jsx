import React from 'react'
import {getSentiment, getSentiment2, getSentiment3} from '../api'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text: '',
      sentiment1: '',
      score1: '',
      sentiment2: '',
      score2: '',
      sentiment3: '',
      score3: ''
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
      this.setState({sentiment1: sentiment, score1: score})
    })
    getSentiment2(this.state.text, (sentiment, score) => {
      this.setState({sentiment2: sentiment, score2: score})
    })
    getSentiment3(this.state.text, (sentiment, score) => {
      this.setState({sentiment3: sentiment, score3: score})
    })
  }
  render () {
    return (
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button onClick={this.handleGetAnalysis}>Submit</button>
        <p>{this.state.text}</p>
        <h4>Tweet Sentiment Analysis</h4>
        <p>Sentiment: {this.state.sentiment1} </p>
        <p>Score: {this.state.score1}</p>
        <h4>Sentiment</h4>
        <p> Sentiment: {this.state.score2} </p>
        <p>Score: {this.state.sentiment2}</p>
        <h4>Sentiment Analysis</h4>
        <p>Sentiment: {this.state.sentiment3}</p>
        <p>Score: {this.state.score3}</p>
      </div>
    )
  }
}

export default App
