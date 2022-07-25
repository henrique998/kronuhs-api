import { hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { resolve } from "path";
import { inject, injectable } from "tsyringe";
import { authConfig } from "../../../../config/auth";
import { AppError } from "../../../../errors/AppError";
import { IMailProvider } from "../../../../providers/MailProvider/IMailProvider";
import { IStorageProvider } from "../../../../providers/StorageProvider/IStorageProvider";
import { IDashboardUsersRepository } from "../../../../repositories/dashboardUsers/IDashboardUsersRepository";

interface IRequest {
  firstName: string;
  lastName: string;
  email: string;
  avatarFile?: string;
  roleId: string;
}

@injectable()
class CreateDashboardUserUseCase {
  constructor(
    @inject("PrismaDashboardUsersRepository")
    private usersRepository: IDashboardUsersRepository,
    @inject("StorageProvider")
    private storageProvider: IStorageProvider,
    @inject("EtherealMailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute({ firstName, lastName, email, avatarFile, roleId }: IRequest): Promise<void> {
    if (!firstName) {
      throw new AppError("First Name is required!", 400);
    }

    if (!lastName) {
      throw new AppError("Last Name is required!", 400);
    }

    if (!email) {
      throw new AppError("E-mail is required!", 400);
    }

    const userAlreadyExists = await this.usersRepository.findUserByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!")
    }

    if (avatarFile) {
      await this.storageProvider.save(avatarFile, "avatar");
    }

    const password = sign({}, authConfig.DASHBOARD_SECRET_KEY).slice(0, 15)

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({ 
      firstName, 
      lastName,
      email, 
      password: passwordHash,
      avatar_url: avatarFile,
      roleId
    });

    const variables = {
      name: firstName,
      link: 'http://localhost:3000/',
      password
    }

    const templatePath = resolve(__dirname, ".", "templates", "emails", "sendPasswordAccount.hbs")

    await this.mailProvider.sendMail(
      email, "Senha para acessar o painel de controle",
      variables,
      templatePath
    )
  }
}

export { CreateDashboardUserUseCase };

