import { inject, injectable } from "tsyringe";
import { DashboardUserDataDTO } from "../../../../dtos/dashboardUser/DashboardUserDataDTO";
import { IDashboardUsersRepository } from "../../../../repositories/dashboardUsers/IDashboardUsersRepository";

@injectable()
class FindAllUsersUseCase {
  constructor(
    @inject("PrismaDashboardUsersRepository")
    private usersRepository: IDashboardUsersRepository
  ) {}

  async execute(userId: string): Promise<DashboardUserDataDTO[]> {
    const allUsers = await this.usersRepository.findAll();

    const users = allUsers.filter(user => user.id !== userId);

    return users;
  }
}
export { FindAllUsersUseCase };

