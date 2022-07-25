import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { PostMap } from "../../../../mappers/PostMap";
import { IPostsRepository } from "../../../../repositories/posts/IPostsRepository";

interface IRequest {
  authorId: string;
  page: number;
  per_page: number;
}

@injectable()
class FindAllPostsByAuthorUseCase {
  constructor(
    @inject("PrismaPostsRepository")
    private postsRepository: IPostsRepository
  ) {}

  async execute({ authorId, page, per_page }: IRequest) {
    if (!authorId) {
      throw new AppError("Author id is required!");
    }

    const response = await this.postsRepository.findAllByAuthor(authorId);

    const total = response.length;

    const pageStart = (page - 1) * per_page;
    const pageEnd = pageStart + per_page;

    const posts = response.slice(pageStart, pageEnd);

    // const postsResponse = posts.map(post => PostMap.toDTO(post));
    
    return {
      posts,
      total
    }
  }
}

export { FindAllPostsByAuthorUseCase }