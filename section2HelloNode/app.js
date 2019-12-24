const http = require('http')
const fs = require('fs')
const PORT = 3000

const server = http.createServer((req, res) => {
  //res.statusCode = 200
  //res.setHeader('Content-Type', 'text/plain')
  //res.end("Hello World")
  
  switch (req.url) {
    case '/' :
      fs.readFile('./index.html', (error, data) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      })
      break
    case '/hello' :
      fs.readFile('./hello.html', (error, data) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      })
      break
      
    default:
      res.statusCode = 404
      res.setHeader('Content-Type', 'text/html')
      res.end('Not found!')
  }
})

server.listen(PORT, () => {
  console.log('Server is running...')
})