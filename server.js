import Express from 'express'
import path from 'path'
import routes from './routes'

const port = 8080

const App = Express()

routes(App)
App.use('/assets',Express.static(path.resolve(__dirname,'assets'),{
	maxAge: 8640000 }))

App.listen(port, err => {
 console.log('server is runnig on port'+ port)
})
