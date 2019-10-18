const express = require('express')
const app = express()
const http = require('http')




app.listen('8233', () => {
  console.log('server started')
  console.log('http://localhost:8233')
})

app.get('/getimage', (req, resp) => {
  resp.set("Access-Control-Allow-Origin", "*")
  http.get('http://gchat.qpic.cn/gchatpic_new/console.log(req.headers)771210053/549823679-2860105086-7161E023087FC6BBAE3484BE4189D69B/0?vuin=2375373419&term=2', res => {
    let chunks = [], size = 0
    res.on('data', chunk => {
      chunks.push(chunk)
      size += chunk.length
    });
    res.on('end', () => {
      resp.send(`data:${res.headers['content-type']};base64,${Buffer.concat(chunks, size).toString('base64')}`)
    })
    res.on('error', e => {
      console.log(e)
    })
  })
})