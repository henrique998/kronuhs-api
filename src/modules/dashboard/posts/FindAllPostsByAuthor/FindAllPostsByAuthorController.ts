import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllPostsByAuthorUseCase } from "./FindAllPostsByAuthorUseCase";

class FindAllPostsByAuthorController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { page = 1, per_page = 6 } = req.query;
    const { id : authorId } = req.user;

    const findAllPostsByCategoryUseCase = container.resolve(FindAllPostsByAuthorUseCase);

    const { posts, total } = await findAllPostsByCategoryUseCase.execute({
      authorId,
      page: Number(page),
      per_page: Number(per_page)
    });

    res.setHeader('x-total-count', String(total));

    return res.json(posts);
  }
}

export { FindAllPostsByAuthorController }