import * as express from "express"
import routes from "./routes"

const app = express()
const port = 3333

app.use(routes)

app.listen(port, () => {
  console.log(`Api conectada na porta ${port}`)
})
