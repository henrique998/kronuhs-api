import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IDashboardUsersRepository } from "../../../../repositories/dashboardUsers/IDashboardUsersRepository";

interface IRequest {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

@injectable()
class UpdateDashboardUserUseCase {
  constructor(
  @inject("PrismaDashboardUsersRepository")
  private usersRepository: IDashboardUsersRepository
  ) {}

  async execute({ id, firstName, lastName, email }: IRequest): Promise<void> {
    if (!id) {
      throw new AppError("user id is required!");
    }

    const user = await this.usersRepository.findUserById(id);

    await this.usersRepository.update({
      id,
      firstName: !firstName ? user.firstName : firstName,
      lastName: !lastName ? user.lastName : lastName,
      email: !email ? user.email : email
    });
  }
}
export { UpdateDashboardUserUseCase };

