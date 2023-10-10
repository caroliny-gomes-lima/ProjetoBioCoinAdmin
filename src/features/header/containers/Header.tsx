import React, { ReactElement } from "react";
import Styles from "../styles/Styles";
import { DefaultLogo } from "../../../components";
import { Spacing } from "../../../config";
import UserInfos from "../components/UserInfos";

type CustomHeaderProps = {
  openMenu: () => void;
};

const data = {
  userName: "Arwen Silva",
  typeUser: "Admin",
};

function Header({ openMenu }: CustomHeaderProps) {
  return (
    <Styles.Container id="header-menu">
      <Styles.Content>
        <Styles.FirstContentGroup>
          <Styles.ButtonIcon onClick={openMenu}>
            <Styles.IconMenu />
          </Styles.ButtonIcon>

          {/* <DefaultLogo maxWidth={Spacing(5)}/>
        {userInfos && (
          <NavigationInfos pathname={pathname} userInfos={userInfos} />
        )}  */}
        </Styles.FirstContentGroup>
      </Styles.Content>
      <Styles.UserContentGroup>
        <UserInfos UserData={data} />
      </Styles.UserContentGroup>
    </Styles.Container>
  );
}

export default Header;
