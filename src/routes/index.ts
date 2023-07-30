import { Router } from "express"

import routesRoutes from "./user"

const routes = Router()

routes.get("/ping", (_, response) => {
  console.log("/pong")
  return response.send("pong")
})

routes.use(routesRoutes)

export default routes
