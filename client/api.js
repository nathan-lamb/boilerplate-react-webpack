import request from 'superagent'
import App from './components/App'

export const getSentiment = (text, cb) => {
  request
    .get('https://jamiembrown-tweet-sentiment-analysis.p.mashape.com/api')
    .set('X-Mashape-Key', 'mr7PX3iE3ZmshgkqWCWmdp2cQyb4p1Vj43PjsnoTlpQ4riiYcB')
    .set('Accept', 'application/json')
    .end(function (result) {
      console.log(result.status, result.headers, result.body)
    })
}
