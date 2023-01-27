const http = require('http')
const PORT = 5000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hola Mundo!!!</h1>')    
})

server.listen(PORT, () => {
    console.log(`Servidor escuchando: ${PORT}`)
})