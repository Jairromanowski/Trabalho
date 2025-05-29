import expres from 'express'
import publiRoutes from './routes/public.js'

const app = express()

app.use('/', publicRoutes)

app.listen(3000, () => console.log("Servidor rodando!!"))