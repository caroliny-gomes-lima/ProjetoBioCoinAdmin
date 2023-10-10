import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import FontStyles from "../styles/fontStyles";
import { Button, Select, MenuItem } from "@material-ui/core";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { Colors } from "../../config";

export type PaginationProps = {
  page?: any;
  setPage: Dispatch<SetStateAction<number>>;
  totalPages?: any;
};


const Container = styled.div(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: spacing(1),
  };
});

const BottomNav = styled(Button)(({ theme }) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.75rem",
    height: "1.75rem",
    backgroundColor: "transparent",
  };
});

const PageList = styled.tbody(({ theme }) => {
  return {
    display: "flex",
  };
});

const PageListButton = styled(Button)(({ theme }) => {
  const { spacing } = theme;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "1.75rem",
    height: "1.75rem",
    minHeight: "1.75rem",
    minWidth: "1.75rem",
    margin: spacing(0, 0.125),
    backgroundColor: "transparent",
  };
});

const PageSelectText = styled.text(({ theme }) => {
  const { spacing } = theme;
  return {
    alignSelf: "center",
    ...FontStyles.bold14,
    marginRight: spacing(1),
  };
});

const PageSelect = styled(Select)(({ theme }) => {
  const { spacing } = theme;
  return {
    width: "5.25rem",
    height: "1.75rem",
    padding: spacing(0.75, 1.875),
    //marginRight: spacing(1.875),
    backgroundColor: Colors.yellow,
    ".MuiOutlinedInput-input": {
      padding: 0,
      ...FontStyles.bold14,
    },
    ".MuiSelect-icon": {
      color: Colors.black,
      alignSelf: "center",
      width: "1.5rem",
      height: "1.5rem",
    },
  };
});

const ItemMenu = styled(MenuItem)(({ theme }) => {
  const { spacing } = theme;
  return {
    backgroundColor: "white",
    width: "5.25rem",
    height: "1.75rem",
    padding: spacing(0.75, 1.875),
  };
});

function backPage(page, setPage) {
  if (page > 1) {
    setPage(page - 1);
  }
}

function nextPage(page, totalPages, setPage) {
  if (page !== totalPages) {
    setPage(page + 1);
  }
}

const getPaginationContent = (setPage: any, totalPages: any, page: any) => {
  let content: any[] = [];

  const changePageTo = (i, toPage) => {
    setPage(toPage);
  };

  for (let i = 0; i < totalPages; i++) {
    if (page > 3 && page < totalPages - 4) {
      if (i >= page - 3 && i <= page + 1) {
        content.push(
          <PageListButton
            $show={i + 1 === page ? true : false}
            onClick={() => changePageTo(i + 1, setPage)}
          >
            {" "}
            {i + 1}{" "}
          </PageListButton>
        );
    }
    if (i === page + 3) {
      content.push(
        <PageListButton
          $show={i + 1 === page ? true : false}
          onClick={() => changePageTo(totalPages, setPage)}
        >
          {"..."}
        </PageListButton>
      );
    }
  } else if (page < 4) {
    if (i <= 5) {
      content.push(
        <PageListButton
          $show={i + 1 === page ? true : false}
          onClick={() => changePageTo(i + 1, setPage)}
        >
          {" "}
          {i + 1}{" "}
        </PageListButton>
      );
    }
  } else if (i >= totalPages - 6) {
    if (i === 14) {
      content.push(
        <PageListButton
          $show={i + 1 === page ? true : false}
          onClick={() => changePageTo(1, setPage)}
        >
          {"..."}
        </PageListButton>
      );
    }

    content.push(
      <PageListButton
        $show={i + 1 === page ? true : false}
        onClick={() => changePageTo(i + 1, setPage)}
      >
        {" "}
        {i + 1}{" "}
      </PageListButton>
    );
  }
}
return content;
}

const checkTotalPages = (totalPages, page) => {
  let components: any[] = [];
  for (let i = 0; i < totalPages; i++) {
    components.push(
      <ItemMenu selected={i === page} value={i + 1}>
        {i + 1}
      </ItemMenu>
    );
  }

  return components;
};

function TablePagination(props: PaginationProps) {
  const { page, setPage, totalPages } = props;

  return (
    <Container>
      <BottomNav
        onClick={() => {
          backPage(page, setPage);
        }}
      >
        {" < "}
      </BottomNav>
      <PageList>{getPaginationContent(setPage, totalPages, page)}</PageList>
      <BottomNav
        onClick={() => {
          nextPage(page, totalPages, setPage);
        }}
      >
        {" > "}
      </BottomNav>
      <PageSelectText> Ir para: </PageSelectText>
      <PageSelect
        variant="outlined"
        labelId="Seleção-da-pagina"
        id="Seleção-da-pagina"
        value={page}
        onChange={(value) => {
          setPage(value.target.value);
        }}
        IconComponent={ExpandMoreOutlined}
        label="Pagina"
      >
        {checkTotalPages(totalPages, page)}
      </PageSelect>
    </Container>
  );
}
export default TablePagination;

