const jsonServer = require('json-server')
const userServer =jsonServer.create()
const router = jsonServer.router("db.json")  // db.json is the data source file
const middleware=jsonServer.defaults()
const port= 3031 || process.env.PORT
userServer.use(middleware)
userServer.use(router)
userServer.listen(port, ()=>{console.log(`JSON Server is running on ${port}`)})
