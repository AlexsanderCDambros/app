# Aplicação

Essa aplicação está sendo construida para fazer diversos testes e aprofundar o conhecimento em angular. Nela serão desenvolvidas várias funcionalidades, sem um propósito específico, podendo inclusive não se complementarem. 

Algumas regras serão seguindas durante o desenvolvimento: 

- Todos os componentes lógicos devem estar bem documentados, de forma que qualquer pessoa entenda tudo o que está sendo feito
- A aplicação deve sempre estar com 100% de cobertura de testes unitários, se possível utilizando TDD.
- Todas as páginas e todos os componentes devem seguir o padrão de acessibilidade da WCAG, para saber mais [acesse o guia WCAG](www.google.com).

## Instruções

Esse projeto foi criado utilizando [Angular CLI](https://github.com/angular/angular-cli).

### Configuração de ambiente

- Passo 1 - Baixe e instale o nodejs acessando [site oficial NodeJS](https://nodejs.org/en/).
- Passo 2 - Baixe e instale o git bash acessando [site oficial GitBash](https://git-scm.com/downloads).
- Passo 3 - Instale o Angular CLI, no prompt de comando ou no git bash, através do comanto `npm install -g @angular/cli`.
- Passo 4 - No git bash, clone o projeto para alguma pasta no seu computador utilizando o comando `git clone link-do-repositório`.
- Passo 5 - No git bash ou prompt de comando, acesse o repositório onde você clonou o projeto execuntado o comando `cd repositório-em-que clonou` e execute o comando `npm install` para instalar todas as dependencias. 

### Desenvolvimento

Execute `ng generate component component-name` para gerar um novo componente. Você também pode executar `ng generate directive|pipe|service|class|guard|interface|enum|module` para criar outros tipos de classes de acordo com o seu objetivo.

### Execução em desenvolvimento

Execute o comando `npm start` para rodar a aplicação. Navegue até `http://localhost:4200/` para visualizar a aplicação funcionando. A aplicação irá recarregar sempre que você salvar uma alteração no código.

### Execução de testes unitários e Coverage

Execute `npm test` para executar os testes unitários utilizando [Karma](https://karma-runner.github.io) e atualização da cobertura de testes da aplicação que pode ser acessada no diretório `coverage/index.html`.

### Build

Execute `npm build` para fazer o `build` da aplicação. O `build` poderá ser acessado no diretório `dist/`.

### Ajuda

Para saber mais comandos do Angular CLI utilize `ng help` ou acesse a seguinte página [Angular CLI](https://angular.io/cli).
