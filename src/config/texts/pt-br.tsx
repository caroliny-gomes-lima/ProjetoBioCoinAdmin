const baseRequiredMessage = "Campo obrigatório.";
// const baseRequiredFieldsDescription = "* Preenchimento obrigatório";

const baseReload = {
  message: "Não há dados para exibição.",
  buttonLabel: "Recarregar",
};

const ptBr = {
  months: [
    { initials: "Jan", fullName: "Janeiro" },
    { initials: "Fev", fullName: "Fevereiro" },
    { initials: "Mar", fullName: "Março" },
    { initials: "Abr", fullName: "Abril" },
    { initials: "Mai", fullName: "Maio" },
    { initials: "Jun", fullName: "Junho" },
    { initials: "Jul", fullName: "Julho" },
    { initials: "Ago", fullName: "Agosto" },
    { initials: "Set", fullName: "Setembro" },
    { initials: "Out", fullName: "Outubro" },
    { initials: "Nov", fullName: "Novembro" },
    { initials: "Dez", fullName: "Dezembro" },
  ],
  version: "v ",
  admin: "admin",
  modals: {
    success: {
      buttonLabel: "OK",
    },
    errors: {
      buttonLabel: "Ok",
    },
  },
  home: {},
  pagesConfig: {},

  login: {
    title: "LOGIN",
    remember: "Lembrar-me",
    forgotPass: "Esqueceu sua senha?",
    enter: "Entrar",
    continue: "Continuar",
    password: "Senha",

    passwordMessage: baseRequiredMessage,
    user: "Usuário",
    userMessage: baseRequiredMessage,
  },
  forgetPassword: {
    titleStepOne: "ESQUECEU SUA SENHA",
    titleStepTwo: "ESQUECEU SUA SENHA",
    titleStepTree: "ESQUECEU SUA SENHA",
    titleStepFour: "Senha redefinida com sucesso",
    subTitle: [
      "Para sua recuperação de senha, informe seu email cadastrado abaixo:",
      "Informe abaixo o código que enviamos para seu email cadastrado:",
      "Crie sua nova senha informando os dados abaixo:",
      "Sua senha foi redefinida com sucesso, vamos redirecionar você para a tela de login ou você pode clicar para voltar.",
      "Senha redefinida",
    ],
    continue: [
      "ENVIAR",
      "VALIDAR CÓDIGO",
      "CONFIRMAR NOVA SENHA",
      "Fazer login",
    ],
    resendCode: "Reenviar código de confirmação",
    forgotPassword: "Esqueci minha senha",
    enter: "Entrar",
    password: "NOVA SENHA",
    onBackMenu: "Voltar para o login",
    onBack: "VOLTAR",
    cancel: "CANCELAR",
    onNext: "Avançar",
    nwPassword: "Confirmar Senha",
    passwordMessage: baseRequiredMessage,
    user: "EMAIL",
    userMessage: baseRequiredMessage,
  },
  settings: {
    userSettings: {
      users: "Usuários",
      userRegister: {
        userRegister: "Cadastro de Usuário",
        fullName: "Nome Completo",
        fullNameMessage: baseRequiredMessage,
        email: "E-mail",
        emailMessage: baseRequiredMessage,
        password: "Senha",
        passwordMessage: baseRequiredMessage,
        passwordConfirm: "Confirmar Senha",
        passwordConfirmMessage: baseRequiredMessage,
        userAdmin: "Usuário Administrador?",
        register: "Cadastrar",
        successResponse: "Usuário cadastrado com sucesso.",
      },
    },
    changePassword: {
      changePassword: "Alterar Senha",
      passwordChange: "Mudança de Senha",
      successResponse: "Senha alterada com sucesso.",
      actualPassword: "Senha Atual",
      newPassword: "Nova Senha",
      passwordConfirmation: "Confirmação de Nova Senha",
      passwordMessage: baseRequiredMessage,
      confirm: "Confirmar",
    },
  },

  Main: {
    Users: {
      title: "PESQUISAR USUÁRIOS CADASTRADOS",
      nameInput: "NOME COMPLETO",
      emailInput: "E-MAIL",
      phoneIput: "TELEFONE",
      dateInput: "DATA DE NASCIMENTO",
      buttonClear: "Limpar",
      buttonSend: "Pesquisar",

      titleTable: "LISTA DE USUÁRIOS CADASTRADOS",
      headerTable: {
        table: [
          "NOME COMPLETO",
          "EMAIL",
          "TELEFONE",
          "DATA DE NASCIMENTO",
          "DATA DE CADASTRO",
          "STATUS",
          "AÇÃO",
        ],
        keys: [" "],
      },
      buttonOptions: "Opções",

      disableUserModal: {
        title: "Desativar Usuário",
        text: "Ao desativar um usuário, seus dados continuarão existindo, mas sua conta ficará temporariamente inacessível até que algum Administrador ative sua conta. Continuar e desativar usuário?",
        name: "NOME COMPLETO",
        email: "E-MAIL",
        phone: "TELEFONE",
        dateBirth: "DATA DE NASCIMENTO",
        back: "Voltar",
        confirm: "Sim, desativar",
      },
    },

    UsersStatement:{
      titleTable: "EXTRATO DE USUÁRIOS",
      headerTable: {
        table: [
          "NOME COMPLETO",
          "SALDO REAIS",
          "SALDO REAIS",
          "AÇÃO",
        ],
        keys: [" "],
      },
      buttonOptions: "Opções",
      editBioCoinModal:{
        title: "Editar BITCOINS",
      }
    }
  },
};

export default ptBr;
