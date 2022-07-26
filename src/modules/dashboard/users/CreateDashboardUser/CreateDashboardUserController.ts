import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDashboardUserUseCase } from "./CreateDashboardUserUseCase";

class CreateDashboardUserController {
  async handle(req:Request, res:Response) {
    const { firstName, lastName, email, roleId } = req.body;
    const avatarFile = req.file?.filename;

    const createDashboardUserUseCase = container.resolve(CreateDashboardUserUseCase);

    await createDashboardUserUseCase.execute({
      firstName,
      lastName,
      email,
      avatarFile,
      roleId
    });

    return res.status(201).json({ message: "User Created Successfuly!" });
  }
}

export { CreateDashboardUserController };

