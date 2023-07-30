import * as express from "express"

const app = express()
const port = 3333

app.listen(port, () => {
  console.log(`Api conectada na porta ${port}`)
})
