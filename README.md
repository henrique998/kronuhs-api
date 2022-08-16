<div align="center">
  <img src="logo.svg" width="100px" />
  <h3>Uma solução backend para blogs.</h3>
</div>

## 📃 Sobre

<br />

A **Kronuhs-Api** foi desenvolvida seguindo os princípios SOLID tendo como foco demonstrar a iniciantes na programação como um backend para blog funciona e quais práticas devem ser seguidas ao desenvolver uma api rest.

Esta aplicação tem diversas funcionalidades que são bem úteis no dia a dia de um desenvolvedor que você poderá descobrir logo abaixo.

## 💻 Principais Tecnologias utilizadas no projeto

Este projeto utiliza diversas tecnologias bem legais e úteis que você talvez possa gostar e utilizar em alguns projetos.

- [Node.js](https://nodejs.org/en/about/)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/docs/getting-started/quickstart)
- [PostgreSQl](https://www.postgresql.org/)
- [AWS-S3](https://aws.amazon.com/pt/s3/?trk=9c7f9c59-8d98-452d-8a14-441a9b6492f3&sc_channel=ps&sc_campaign=acquisition&sc_medium=ACQ-P|PS-GO|Brand|Desktop|SU|Storage|S3|BR|PT|Text&s_kwcid=AL!4422!3!589951433462!p!!g!!amazonaws%20s3&ef_id=Cj0KCQjwgO2XBhCaARIsANrW2X2pIZ7PJP1dC9W2SBuL0KYqV-71_oJmaIFs0gqCh0N-MHrmMWvGEKMaAmJHEALw_wcB:G:s&s_kwcid=AL!4422!3!589951433462!p!!g!!amazonaws%20s3)
- [Dayjs](https://day.js.org/)
- [JSONWebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [UUID](https://www.npmjs.com/package/uuid)
- [Multer](https://www.npmjs.com/package/multer)
- [Nodemailer](https://nodemailer.com/about/)
- [Tsyringe](https://www.npmjs.com/package/tsyringe)
- [Turndown](https://www.npmjs.com/package/turndown)

## Funcionalidades

Este projeto possui diversas funcionalidades úteis em um blog que você pode conferir logo abaixo:

- Criação de usuários no painel de gestão,podendo escolher o cargo (role).

- Criação de cargos (role) por um usuário do tipo admin

- Inscrição de usuários no frontend web

- Edição de dados do usuário

- Exclusão de usuário do painel

- Sistema de autenticação utilizando o padrão JWT

- Sistema de refresh token

- Recuperação de senha com envio de email

- Reset de senha

- Criação de postagens

- Sistema de likes em uma postagem

- Criação de comentários por usuários leitores do blog que estejam autenticados

- Criação de categorias por um usuário do tipo admin

- Upload de imagens

## Como executar o projeto na sua máquina

<br />

Para executar o projeto você terá de seguir os passos listados abaixo. 

Primeiro clone o repositório do projeto com o comando:

<br />

```bash
git clone git@github.com:henrique998/kronuhs-api.git
```

Execute um dos comando abaixo para instalar as dependências do projeto:

```bash
npm install

# OU

yarn install
```

<br />

Agora você terá de executar um dos comandos abaixo (utilizando o seu gerenciador de pacotes de preferência) para que você crie um usuário admin. isso será necessário para quando você for criar novos usuários e postagens no painel de gestão do seu blog (que abordarei um pouco mais a frente):

<br />

```bash
npx prisma db seed

# OU

yarn prisma db seed
```

Após isso execute:


```bash
npm run dev

# OU

yarn dev
```

E tudo deverá estar funcionando como o esperado. você deverá receber a seguinte mensagem no terminal:

```bash
Server is running 🚀
```

## Avisos 

<br />

**Primeiro**: Esta api está atrelada a mais dois projetos, um frontend web (para exibição das postagens) e um painel de gestão, ambos escritos em [Next.js](https://nextjs.org/docs)

Você pode conferir esses projetos clicando em:

- [Kronuhs-web](https://github.com/henrique998/kronuhs-web)
- [Kronuhs-dashboard](https://github.com/henrique998/kronuhs-dashbord)

**Segundo**: Para acessar o painel de controle você terá de utilizar as credenciais que foram inseridas no banco de dados pelo comando de seed executado anteriormente.

As Crendenciais são: 

1. E-mail: jhondoe@email.com
2. Password: 123456

Não se preocupe, você poderá alterar esses dados após acessar a sua conta no painel.

## Contato

<br />

Entre em contato comigo por email ou no linkedin:

- henriquemonteiro037@gmail.com
- [linkedin](https://www.linkedin.com/in/henrique-monteiro1/)

