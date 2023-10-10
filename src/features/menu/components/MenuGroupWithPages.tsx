import React from "react";
import Styles from "../styles/Styles";
import { customModal } from "../../../components/modals/utils";
//import { pagesConfig } from "../../../config";
import { useNavigate } from "react-router-dom";

type CustomMenuGroupProps = {
  item: any;
  firstItem: boolean;
  headerName: string;
  pathname: string;
};

function MenuGroupWithPagesComponent({
  item,
  firstItem,
  headerName,
  pathname,
}: CustomMenuGroupProps) {
  //const classes = Styles.useStyles();
  const navigate = useNavigate();
  function handleLogout() {
    customModal.setInfos(
      "leave",
      ["confirm"],
      {
        label: "logout",
        onClick: () => {
          customModal.close();

          // globalLogout();
        },
      },
      {
        label: "back",
        onClick: () => {
          customModal.close();
        },
      },
      null,
      null,
      null
    );
  }

  const goto = (page: any, pageTitle: string) => {
    let link;
    if (!page.isWorking === false) {
      if (pageTitle === "Sair") {
        handleLogout();
      } else {
        navigate(page.path);
      }
    } else {
      link = null;
    }
    return link;
  };

  // function isDisabled(path: string) {
  //   let a = false;
  //   console.log("PAGES",path)
  //   pagesConfig.logged.map((item) => {
  //     return item.pages.map((element) => {
  //       if (path === element.path) {
  //         if (element.isWorking !== (undefined || null)) {
  //           a = element.working;
  //         } else {
  //           a = false;
  //         }
  //       }
  //       return element;
  //     });
  //   });
  //   return a;
  // }

  return (
    <Styles.Group $firstOne={firstItem}>
      <Styles.GroupTitleContainer>
        <Styles.GroupNameContainer>
          <Styles.GroupTitle>{headerName}</Styles.GroupTitle>
        </Styles.GroupNameContainer>
      </Styles.GroupTitleContainer>
      <Styles.SubGroup>
        {item.map((page: any, pageIndex: number) => {
          return (
            <Styles.PageLine
              key={pageIndex + page.name}
              $currentPage={page.path === pathname}
            >
              <Styles.Page
                $buttonContained={false}
                $currentPage={page.path === pathname}
                $disabled={!page.isWorking}
                key={page.name + pageIndex}
                onClick={page.isWorking ? () => goto(page, page.title) : null}
              >
                <Styles.PageContent $currentPage={page.path === pathname}>
                  {page.icon ? page.icon : null}
                  {page?.title}
                </Styles.PageContent>
              </Styles.Page>
            </Styles.PageLine>
          );
        })}
      </Styles.SubGroup>
    </Styles.Group>
  );
}

export default MenuGroupWithPagesComponent;
