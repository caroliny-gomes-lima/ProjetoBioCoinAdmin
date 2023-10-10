import { LocalAtm, Person } from "@material-ui/icons";
import { paths } from "../navigation/navigate";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
const pagesConfig = {
  notLogged: [
    {
      navigationId: 0,
      path: paths.login,
      name: "Login",
    },
    {
      navigationId: 1,
      path: paths.forgetPassword,
      name: "EsqueceuSenha",
    },
  ],
  logged: [
    {
      dontShow: true,
      pages: [
        {
          navigationId: 0,
          path: paths.users,
          name: "UsersPage",
          working: true,
        },
        {
          navigationId: 0,
          path: paths.login,
          name: "Home",
          working: true,
        },
        {
          navigationId: 0,
          path: paths.login,
          name: "Home",
          working: true,
        },
        {
          navigationId: 0,
          path: paths.login,
          name: "Home",
          working: true,
        },
        {
          navigationId: 0,
          path: paths.login,
          name: "Home",
          working: true,
        },
        {
          navigationId: 0,
          path: paths.login,
          name: "Home",
          working: true,
        },
      ],
    },
    {
      id: "0",
      nameGroup: "PRINCIPAL",
      showOnMenu: true,
      pages: [
        {
          id: "0",
          name: "UsersPage",
          title: "Usuários",
          path: paths.users,
          isWorking: true,
          icon: <Person/>,
        },
        {
          id: "1",
          name: "UsersStatementPage",
          title: "Extrato",
          path: paths.usersStatement,
          icon: <LocalAtm/>,
          isWorking: true,
        }
      ],
    },
    // {
    //   id: "0",
    //   nameGroup: "Sistema",
    //   showOnMenu: true,
    //   pages: [
    //     {
    //       id: "0",
    //       name: "UsersPage",
    //       title: "Usuários",
    //       path: paths.users,
    //       isWorking: true,
    //       icon: <Person/>,
    //     },
    //     {
    //       id: "1",
    //       name: "UsersPage",
    //       title: "Usuários",
    //       path: paths.users,
    //       icon: <Person/>,
    //       isWorking: true,
    //     }
    //   ],
    // },
],
};
export default pagesConfig;
