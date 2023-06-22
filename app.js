const app = require ('./holamundo')

const port = process.env.PORT || 3000

app.listen(port,
    ()=> console.log(`La aplicacion está corriendo en http://localhost:${port}`))
    