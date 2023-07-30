import { Request, Response } from "express"
import prisma from "../database/prismaClient"
import { z } from "zod"
import UserType from "../interface/UserType"

class UserService {
  public async create(request: Request, response: Response) {
    const { email, name, password, type } = request.body

    const UserValidator = z.object({
      email: z.string().min(1, "Forneça um Email valido."),
      name: z.string().min(1, "Campo obrigatorio."),
      password: z
        .string()
        .min(8, "A senha deve conter no minimo 8 caracteres."),
      type: z.nativeEnum(UserType, {
        required_error: "Tipo incorreto",
      }),
    })

    const userData = UserValidator.parse({ email, name, password, type })

    const user = await prisma.user.create({
      data: userData,
    })
    return response.json(user)
  }

  public async index(_: Request, response: Response) {
    const users = await prisma.user.findMany()
    return response.json(users)
  }

  public async update(request: Request, response: Response) {
    const { id } = request.params
    const { email, name, password, type } = request.body

    const UserValidator = z.object({
      email: z.string().min(1, "Forneça um Email valido."),
      name: z.string().min(1, "Campo obrigatorio."),
      password: z
        .string()
        .min(8, "A senha deve conter no minimo 8 caracteres."),
      type: z.nativeEnum(UserType, {
        required_error: "Tipo incorreto",
      }),
    })

    const userData = UserValidator.parse({ email, name, password, type })

    const user = await prisma.user.update({
      data: userData,
      where: {
        id,
      },
    })

    return response.json(user)
  }
}

export default UserService
