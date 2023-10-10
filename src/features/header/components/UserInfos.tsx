import React from "react";
import styled from "styled-components";
import FontStyles from "../../../components/styles/fontStyles";
import { Colors } from "../../../config";

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});

const UserInformName = styled.p(() => {
  return {
    ...FontStyles.bold18,
    margin: "unset",
    color: Colors.black,
  };
});

const UserInformType = styled.p(() => {
    return {
      ...FontStyles.medium14,
      color: Colors.black,
      margin: "unset",
    };
  });

function UserInfos({UserData}) {
  return (
    <Container>
        <UserInformName>
        {UserData?.userName}
        </UserInformName>
        <UserInformType>
            {UserData?.typeUser}
        </UserInformType>
    </Container>
  );
}

export default UserInfos;
