import React from "react";
import { Styles } from "../../styles";
import { Texts } from "../../../../config";
import { Grid, Input } from "@material-ui/core";
import styled from "styled-components";

const Line = styled.div(({ theme }) => {
  const {spacing, palette: colors } = theme;
  return {
    backgroundColor: colors.action.active,
    width: "100%",
    height: 1,
    marginTop: spacing(0),
    marginBottom: spacing(4),
  };
});

function DisableUser({item}) {
  const texts = Texts["pt-BR"].Main.Users.disableUserModal;
  return (
    <>
      <Styles.Container $ModalContainer>
        <Line/>
        <Grid container spacing={1} direction="row">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Styles.Label>{texts.name}</Styles.Label>
            <Styles.DataBox>{item.name}</Styles.DataBox>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Styles.Label>{texts.email}</Styles.Label>
            <Styles.DataBox>{item.email}</Styles.DataBox>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Styles.Label>{texts.phone}</Styles.Label>
            <Styles.DataBox>{item.phone}</Styles.DataBox>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Styles.Label>{texts.dateBirth}</Styles.Label>
            <Styles.DataBox>{item.dateBirth}</Styles.DataBox>
          </Grid>
        </Grid>
      </Styles.Container>
    </>
  );
}

export default DisableUser;
