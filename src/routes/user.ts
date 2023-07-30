import { Router } from "express"
import UserController from "../controller/UserController"

const routesRoutes = Router()
const userController = new UserController()

routesRoutes.post("/user", userController.create)
routesRoutes.get("/user", userController.index)

export default routesRoutes
