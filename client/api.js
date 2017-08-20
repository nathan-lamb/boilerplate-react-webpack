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

export const getSentiment2 = (text, cb) => {
  request
    .post('https://community-sentiment.p.mashape.com/text/')
    .send({'txt': text})
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('X-Mashape-Key', '2IpJM2mA70mshnNZF7IxqvgBnHyvp1H0D3Fjsn0iy46MsIYgDb')
    .set('Accept", "application/json')
    .send({text})
    .end((err, res) => {
      if (err) {
        console.error(err.message)
      } else {
        cb(res.body.result.confidence, res.body.result.sentiment)
      }
    })
}

export const getSentiment3 = (text, cb) => {
  request
    .post('https://textanalysis-text-sentiment-v1.p.mashape.com/twitter-sentiment')
    .send({text: text})
    .set('X-Mashape-Key', '2IpJM2mA70mshnNZF7IxqvgBnHyvp1H0D3Fjsn0iy46MsIYgDb')
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .end((err, res) => {
      if (err) {
        console.error(err.message)
      } else {
        cb(res.body.sentiment, res.body.confidence)
      }
    })
}
