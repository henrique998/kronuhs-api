import { inject, injectable } from "tsyringe";
import { DashboardUserDataDTO } from "../../../../dtos/dashboardUser/DashboardUserDataDTO";
import { UserMap } from "../../../../mappers/UserMap";
import { IDashboardUsersRepository } from "../../../../repositories/dashboardUsers/IDashboardUsersRepository";

interface IRequest {
  page: number;
  per_page: number;
  userId: string;
}

@injectable()
class FindAllUsersUseCase {
  constructor(
    @inject("PrismaDashboardUsersRepository")
    private usersRepository: IDashboardUsersRepository
  ) {}

  async execute({ page, per_page, userId }: IRequest) {
    const allUsers = await this.usersRepository.findAll();
    
    const pageStart = (page - 1) * per_page;
    const pageEnd = pageStart + per_page;
    
    const usersFiltered = allUsers.filter(user => user.id !== userId);
    
    const totalCountOfUsers = usersFiltered.length;

    const usersResponse = usersFiltered.slice(pageStart, pageEnd).map(user => UserMap.toDTO(user))

    return {
      usersResponse,
      totalCountOfUsers
    };
  }
}
export { FindAllUsersUseCase };

