import React from "react";
import styled from "styled-components";
import { SVG } from "../../config";
import FontStyles from "../styles/fontStyles";
import { Colors, Texts } from "../../config";

const Container = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "column",
  };
});
const LogoContainer = styled.div(({ maxWidth = 154 }) => {
  return {
    width: maxWidth,
    height: maxWidth * 0.59,
    flexShrink: 0,
  };
});

const SubLogo = styled.p(({ theme }) => {
  const { spacing } = theme;
  return {
    ...FontStyles.medium12,
    marginInline: spacing(3),
    marginLeft: spacing(4.5),
    letterSpacing: 1,
    fontSize: "0.5rem",
    color: Colors.white,
  };
});

type DefaultLogoProps = {
  maxWidth?: number;
};

const texts = Texts["pt-BR"];

function DefaultLogo({ maxWidth }: DefaultLogoProps) {
  return (
    <Container>
      <LogoContainer maxWidth={maxWidth}>
        {/* {white ? (
        <SVG.Mug
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
       color: "white",
          }}
        />
      ) : (
        <SVG.Mug
          style={{
            width: "100%",
            height: "100%",
            alignSelf: "center",
          }}
        />
      )} */}
        <SVG.logo
          style={{
            width: "145px",
            height: "39px",
            alignSelf: "center",
          }}
        />
      </LogoContainer>
      <SubLogo>{texts.admin}</SubLogo>
    </Container>
  );
}

export default DefaultLogo;
