import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StorageContext } from "./contexts/StorageContext";
import pagesConfig from "./config/pagesConfig";
import pages from "./pages/index";
import { Spacing } from "./config";
import { makeStyles } from "@material-ui/core";
import { Header, Menu } from "./features";

const useStyles = makeStyles((theme: any) => {
  return {
    pageContainer: {
      display: "flex",
      width: "100%",

      flexDirection: "column",

      justifyContent: "flex-start",
      alignItems: "flex-start",
      overflowY: "auto",
      overflowX: "hidden",

      padding: Spacing(3),
      backgroundColor: "white",
    },
    pageContainerLanding: {
      display: "flex",
      width: "100%",

      flexDirection: "column",

      justifyContent: "flex-start",
      alignItems: "flex-start",
      overflowY: "auto",
      overflowX: "hidden",

      backgroundColor: theme.palette.background.paper,
    },
  };
});

interface IUserProps {
  Home: () => Element;
}

function App() {
  const classes = useStyles();
  const { isLogged } = useContext<any>(StorageContext);
  const [menuHeight, setHeight] = React.useState<any>(null);
  const [menu, setMenu] = React.useState<any>(false);

  React.useLayoutEffect(() => {
    if (!menuHeight) {
      const mh = document.getElementById("header-menu")?.offsetHeight;

      setHeight(mh);
    }
  }, [menuHeight]);

  return !isLogged ? (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
        }}
      >
        <Router>
          <Menu openMenu={setMenu} isOpen={menu} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "nowrap",
              flex: 1,
              padding: 0,
              maxWidth: "100vw",
            }}
          >
            <Header openMenu={() => setMenu(true)} />

            <div
              className={classes.pageContainer}
              style={{
                height: menuHeight
                  ? `calc(100vh - ${menuHeight}px)`
                  : `calc(100vh - ${Spacing(17.25)}px)`,
              }}
            >
              <Routes>
                {pagesConfig.logged.map((item: any, index?: any) => {
                  if (item.pages) {
                    return item.pages.map((page: any, index?: any) => {
                      const Component = pages[page.name as keyof IUserProps];
                      return (
                        <Route
                          key={page.navigationId}
                          path={page.path}
                          element={<Component />}
                        />
                      );
                    });
                  }
                  return null;
                })}
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </>
  ) : (
    <Router>
      <div className={classes.pageContainerLanding}>
        <Routes>
          {pagesConfig.notLogged.map((item?: any, index?: any) => {
            const Component = pages[item.name as keyof IUserProps];
            return (
              <Route
                key={item.path + index}
                path={item.path}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
