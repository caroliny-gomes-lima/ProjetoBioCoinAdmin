import React from "react";
import Styles from "../styles/Styles";
import Drawer from "@material-ui/core/Drawer";
import { CircularProgress, IconButton, makeStyles } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { CustomText, DefaultLogo } from "../../../components";
import { Colors, fonts, pagesConfig, Spacing } from "../../../config";
import styled from "styled-components";
import { MenuGroupWithPages } from "../components";
import { Close } from "@material-ui/icons";
import { paths } from "../../../navigation/navigate";
import { useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawerPaper: {
    borderRight: "none",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

let data = [
  {
    id: "0",
    nameGroup: "PRINCIPAL",
    pages: [
      {
        id: "0",
        name: "UsersPage",
        title: "Usuários",
        path: paths.users,
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEwLDIwVjE0SDE0VjIwSDE5VjEySDIyTDEyLDNMMiwxMkg1VjIwSDEwWiIgLz48L3N2Zz4=",
      },
    ],
  },
  {
    id: "1",
    nameGroup: "RELATÓRIO",
    pages: [
      {
        id: "0",
        name: "general",
        title: "Relatório Geral",
        path: "/general",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEzLDlIMTguNUwxMywzLjVWOU02LDJIMTRMMjAsOFYyMEEyLDIgMCAwLDEgMTgsMjJINkM0Ljg5LDIyIDQsMjEuMSA0LDIwVjRDNCwyLjg5IDQuODksMiA2LDJNMTUsMThWMTZINlYxOEgxNU0xOCwxNFYxMkg2VjE0SDE4WiIgLz48L3N2Zz4=",
      },
      {
        id: "1",
        name: "detail",
        title: "Relatório Detalhado",
        path: "/detail",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTQgNFYyMkgyMFYyNEg0QzIuOSAyNCAyIDIzLjEgMiAyMlY0SDRNMTUgN0gyMC41TDE1IDEuNVY3TTggMEgxNkwyMiA2VjE4QzIyIDE5LjExIDIxLjExIDIwIDIwIDIwSDhDNi44OSAyMCA2IDE5LjEgNiAxOFYyQzYgLjg5IDYuODkgMCA4IDBNMTcgMTZWMTRIOFYxNkgxN00yMCAxMlYxMEg4VjEySDIwWiIgLz48L3N2Zz4=",
      },
    ],
  },
  {
    id: "2",
    nameGroup: "PERFIL",
    pages: [
      {
        id: "0",
        name: "profile",
        title: "Meu Perfil",
        path: "/perfil",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDRBNCw0IDAgMCwxIDE2LDhBNCw0IDAgMCwxIDEyLDEyQTQsNCAwIDAsMSA4LDhBNCw0IDAgMCwxIDEyLDRNMTIsMTRDMTYuNDIsMTQgMjAsMTUuNzkgMjAsMThWMjBINFYxOEM0LDE1Ljc5IDcuNTgsMTQgMTIsMTRaIiAvPjwvc3ZnPg==",
      },
    ],
  },
  {
    id: "3",
    nameGroup: "SISTEMA",
    pages: [
      {
        id: "0",
        name: "system",
        title: "Sair",
        path: "/system",
        icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDNDMTAuODksMyAxMCwzLjg5IDEwLDVIM1YxOUgyVjIxSDIyVjE5SDIxVjVDMjEsMy44OSAyMC4xMSwzIDE5LDNIMTJNMTIsNUgxOVYxOUgxMlY1TTUsMTFIN1YxM0g1VjExWiIgLz48L3N2Zz4=",
      },
    ],
  },
];

function Menu({ openMenu, isOpen }) {
  const classes = useStyles();
  const location = useLocation();
  const drawer = (
    <>
      <Styles.Container>
        <Styles.ScrollContainer>
          <Styles.Header>
            <DefaultLogo maxWidth={Spacing(5)} />
            <IconButton size="small" onClick={() => openMenu(!isOpen)}>
              <Close />
            </IconButton>
          </Styles.Header>
          <Styles.Line />
          {pagesConfig ? (
          <>
            {pagesConfig?.logged?.map((item, index) => {
              return !item.showOnMenu ? null : (
              <MenuGroupWithPages
              key={item.nameGroup + index}
              headerName={item.nameGroup}
              item={item.pages}
              firstItem={index === 0}
              pathname={location.pathname}
            />
              )
            })
          }
            
            </>) : (
            <div
              style={{
                width: "96%",
                marginTop: "10%",
                justifyContent: "center",
                alignContent: "center",
                display: "flex",
              }}
            >
              <CircularProgress color="secondary" />
            </div>
          )}
        </Styles.ScrollContainer>

        <CustomText
          fontSize={1.5}
          fontFamily={fonts.medium}
          textColor={Colors.yellow}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBlock: Spacing(3),
          }}
        >
          {process.env.REACT_APP_ENV + " v"}
          {process.env.REACT_APP_VERSION}
        </CustomText>
      </Styles.Container>
    </>
  );

  const MyHidden = styled(Hidden)(() => {
    return {};
  });

  return (
    <nav aria-label="mailbox folders">
      <MyHidden smUp={true} implementation="css">
        <Drawer
          variant="temporary"
          anchor={"left"}
          open={isOpen}
          onClose={() => openMenu(!isOpen)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {drawer}
        </Drawer>
      </MyHidden>
    </nav>
  );
}

export default Menu;
