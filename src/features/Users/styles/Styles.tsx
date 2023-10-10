import styled from "styled-components";
import { FontStyles } from "../../../components";

const Container = styled.div(({ theme, $ModalContainer }) => {
  return {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: $ModalContainer
      ? theme.palette.text.primary
      : theme.palette.background.paper,
    padding: "20px",
    paddingTop: $ModalContainer ? "10px" : null,
    borderRadius: "5px",
    flex: 1,
    width: "100%",
    marginBottom: theme.spacing(1.5),
  };
});

const Line = styled.div(({ theme }) => {
  const { spacing, palette: colors } = theme;
  return {
    backgroundColor: colors.text.primary + 60,
    width: "100%",
    height: 1,
    marginTop: spacing(1),
    marginBottom: spacing(2),
  };
});

const DataBox = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    ...FontStyles.medium16,
    color: colors.text.secondary,
    //padding: theme.spacing(0.5),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  };
});

const Label = styled.p(({ theme }) => {
  const { palette: colors } = theme;
  return {
    ...FontStyles.bold12,
    textTransform: "uppercase",
    padding: 0,
    margin: 0,
    color: colors.action.active,
    transition: ".2s",
    pointerEvents: "none",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
  };
});

const Styles = {
  Container,
  Line,
  Label,
  DataBox,
};

export default Styles;
