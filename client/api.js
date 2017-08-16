import request from 'superagent'

export const getSentiment = (text, cb) => {
  request
    .get('https://jamiembrown-tweet-sentiment-analysis.p.mashape.com/api/')
    .query({text: text})
    .set('X-Mashape-Key', 'mr7PX3iE3ZmshgkqWCWmdp2cQyb4p1Vj43PjsnoTlpQ4riiYcB')
    .set('Accept', 'application/json')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
      } else {
        cb(res.body.sentiment, res.body.score)
      }
    })
}
