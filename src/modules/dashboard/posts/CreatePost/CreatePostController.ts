import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreatePostUseCase } from './CreatePostUseCase';

class CreatePostController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;
    const { title, subtitle, content, categoryId, isDraft = false  } = req.body;
    const banner_file = req.file;

    const createPostUseCase = container.resolve(CreatePostUseCase);

    await createPostUseCase.execute({
      title,
      subtitle,
      content,
      bannerUrl: banner_file?.filename,
      authorId: id,
      categoryId,
      isDraft: isDraft === 'true'
    });

    return res.json({ message: "Post created successfuly!" });
  }
}
export { CreatePostController };

