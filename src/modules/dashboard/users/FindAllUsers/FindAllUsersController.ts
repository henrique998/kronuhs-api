import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindAllUsersUseCase } from "./FindAllUsersUseCase";

class FindAllUsersController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { page = 1, per_page = 10 } = req.query;
    const { id: userId } = req.user;

    const findAllUsersUseCase = container.resolve(FindAllUsersUseCase);

    const {
      usersResponse,
      totalCountOfUsers
    } = await findAllUsersUseCase.execute({
      page: Number(page),
      per_page: Number(per_page),
      userId
    });

    return res.json({
      usersResponse,
      totalCountOfUsers
    });
  }
}
export { FindAllUsersController };

