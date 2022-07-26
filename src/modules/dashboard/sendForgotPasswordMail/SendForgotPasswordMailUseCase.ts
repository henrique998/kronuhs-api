import { resolve } from "path";
import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";
import { AppError } from "../../../errors/AppError";
import { IDateProvider } from "../../../providers/DateProvider/IDateProvider";
import { IMailProvider } from "../../../providers/MailProvider/IMailProvider";
import { IDashboardUsersRepository } from "../../../repositories/dashboardUsers/IDashboardUsersRepository";
import { IDashboardUserTokensRepository } from "../../../repositories/dashboardUserTokens/IDashboardUserTokensRepository";

@injectable()
class SendForgotPasswordMailUseCase {
  constructor(
    @inject("PrismaDashboardUsersRepository")
    private usersRepository: IDashboardUsersRepository,
    @inject("PrismaDashboardUserTokensRepository")
    private userTokensRepository: IDashboardUserTokensRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("EtherealMailProvider")
    private mailProvider: IMailProvider
  ) {}

  async execute(email: string): Promise<void> {
    const templatePath = resolve(__dirname, ".", "templates", "emails", "forgotPassword.hbs")

    const user = await this.usersRepository.findUserByEmail(email);

    if (!user) {
      throw new AppError("User does not exists!");
    }

    const token = uuidV4();

    await this.userTokensRepository.create({
      refresh_token: token,
      userId: user.id,
      expires_date: this.dateProvider.addHours(3)
    });

    const variables = {
      name: user.firstName,
      link: `${process.env.FORGOT_MAIL_URL}${token}`
    }

    await this.mailProvider.sendMail(
      email, 
      "Recuperação de senha", 
      variables,
      templatePath
    );
  }
}
export { SendForgotPasswordMailUseCase };

