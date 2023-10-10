import styled from "styled-components";
import { FontStyles } from "../../components";

import { Spacing } from "../../config";

const ImageBG = styled.div(({ theme }) => {
  const { palette: colors } = theme;

  return {
    backgroundColor: colors.background.default,
    display: "flex",
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
});

const Content = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    display: "flex",
    position: "relative",

    justifyContent: "space-between",
    flexDirection: "column",
    padding: spacing(6.25),
    overflowX: "auto",
    textAlign: "left",
    backgroundColor: colors.background.paper,
    borderRadius: spacing(1.1),

    width: spacing(72.5),
    maxHeight: spacing(85.5),
    height: "85%",
  };
});

const Header = styled.div(() => {
  return {
    width: "fit-content",
    marginBottom: Spacing(5),
    display: "flex",
    alignSelf: "center",
    justifyContent: "flex-start",
  };
});

const Title = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    color: colors.blue,
    margin: 0,
    textAlign: "left",
    ...FontStyles.bold22,
    textTransform: "uppercase",
  };
});

const Subtitle = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    color: colors.grayText,
    ...FontStyles.medium16,
    margin: 0,
    paddingBottom: Spacing(3),
  };
});

const CTGLogo = styled.img(() => {
  return {
    width: Spacing(17),
    height: "auto",
  };
});

const ForgotPasswordButton = styled.p(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    textAlign: "right",
    ...FontStyles.medium14,
    color: colors.blue,
    textDecoration: "underline",
    marginBottom: Spacing(4),
    cursor: "pointer",
  };
});

const Version = styled.div(() => {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const ButtonContainer = styled.div(() => {
  return {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  };
});

const P = styled.p(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.light16,
    color: colors.text.secondary,
    margin: 0,
    marginLeft: spacing(2),
    padding: 0,
  };
});

const Styles = {
  Content,
  Title,
  Subtitle,
  Header,
  CTGLogo,
  ImageBG,
  ForgotPasswordButton,
  Version,
  ButtonContainer,
  P,
};

export default Styles;
