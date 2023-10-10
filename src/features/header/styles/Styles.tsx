import styled from "styled-components";
import { Container as DefaultContainer, IconButton } from "@material-ui/core";
import { Colors } from "../../../config";
import MenuIcon from "@material-ui/icons/Menu";

const Container = styled.div(() => {
  return {
    position: "relative",
    display: "flex",
    width: "100%",
    backgroundColor: Colors.whiteSmoke,

    zIndex: 1,
    height: "min-content",
    justifyContent: "space-between",
    boxShadow: "0px 10px 20px #00000006",
  };
});

const Content = styled.div(({theme}) => {
  const { spacing } = theme;
  return {
    width: "100%",
    maxWidth: "fit-content",
    display: "flex",
    flexDirection: "row",
    //padding: spacing(0),
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 2,
  };
});

const FirstContentGroup = styled.div(({ theme }) => {
  const { spacing, breakpoints, palette: colors, } = theme;
  return {
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    padding: spacing(1.75, 6.25),
    paddingLeft: spacing(2),
    paddingRight: spacing(2.5),
    background: colors.secondary.main,
    [breakpoints.down("sm")]: {
      padding: spacing(1.25, 0),
    },
  };
});

const UserContentGroup = styled.div(({ theme }) => {
  const { spacing, palette: colors, breakpoints } = theme;
  return {
    display: "flex",
    alignItems: "center",
    paddingBlock: spacing(1),
    paddingLeft: spacing(5),
    flex: 1,
    maxWidth: spacing(25),
    background: Colors.softGray,
    [breakpoints.down("md")]: {
      paddingBlock: spacing(0.5),
      paddingLeft: spacing(3),
      maxWidth: "50vw",
    },
  };
});

const ButtonIcon = styled(IconButton)(({ theme }) => {
  const { spacing, breakpoints, palette: colors, } = theme;
  return {
    display: "none",
    backgroundColor: colors.secondary.main,
    [breakpoints.down("sm")]: {
      display: "inline-block",
      minWidth: 0,
      borderRadius: 0,
      padding: spacing(0.3),
   width: "auto",
   height: "auto",
   marginBlock: spacing(0.3),
  },
}
});

const RectangleTwo = styled.div(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    display: "inline-block",
    width: spacing(3),
    height: spacing(2.625),
    backgroundColor: Colors.softGray,

    [breakpoints.down("sm")]: {
      display: "none",
    },
  };
});

const LineBody = styled.div(({ theme }) => {
  const { palette: colors, spacing, breakpoints } = theme;
  return {
    backgroundColor: "transparent",
    borderLeft: spacing(1) + "px solid " + colors.text.primary,
    paddingLeft: spacing(0.5),
    height: "100%",
    marginRight: spacing(2),

    [breakpoints.down("sm")]: {
      display: "none",
    },
  };
});

const SubLine = styled.div(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    backgroundColor: colors.text.primary,
    width: spacing(0.5),
    height: "100%",
  };
});

const IconMenu = styled(MenuIcon)(({ theme }) => {
  const { palette: colors, spacing } = theme;
  return {
    color: colors.secondary.contrastText,
  };
});

const Styles = {
  Container,
  Content,
  FirstContentGroup,
  UserContentGroup,
  ButtonIcon,
  RectangleTwo,
  LineBody,
  SubLine,
  IconMenu,
};

export default Styles;
