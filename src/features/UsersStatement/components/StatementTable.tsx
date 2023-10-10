import React from "react";
import { Styles } from "../styles";
import { CustomText, TablePagination, Table } from "../../../components";
import { fonts } from "../../../config";
import DropdownSelectButton from "../../../components/buttons/DropdownSelectButton";
import { customModal } from "../../../components/modals/utils";
import { Texts } from "../../../config";
import { Grid } from "@material-ui/core";

function StatementTable() {
  const texts = Texts["pt-BR"].Main.UsersStatement;
  const [page, setPage] = React.useState(1);
  const data = [
    {
      name: "Leandro Bitencourt",
      realValue: "R$ 1.000,00",
      bitCoinValue: "0,00 BIOC",
    },
    {
        name: "Leandro Bitencourt",
        realValue: "R$ 200,00",
        bitCoinValue: "1,03 BIOC",
    },
    {
        name: "Leandro Bitencourt",
        realValue: "R$ 1.000,00",
        bitCoinValue: "0,00 BIOC",
      },
      {
          name: "Leandro Bitencourt",
          realValue: "R$ 200,00",
          bitCoinValue: "1,03 BIOC",
      },
      {
        name: "Leandro Bitencourt",
        realValue: "R$ 1.000,00",
        bitCoinValue: "0,00 BIOC",
      },
      {
          name: "Leandro Bitencourt",
          realValue: "R$ 200,00",
          bitCoinValue: "1,03 BIOC",
      },
      {
        name: "Leandro Bitencourt",
        realValue: "R$ 1.000,00",
        bitCoinValue: "0,00 BIOC",
      },
      {
          name: "Leandro Bitencourt",
          realValue: "R$ 200,00",
          bitCoinValue: "1,03 BIOC",
      },
  ];

  const editBitCoinsModal = (data: Object) => {
    const texts = Texts["pt-BR"].Main.Users.disableUserModal;
    customModal.setInfos(
      texts.title,
      [texts.text],
      {
        onClick: () => console.log("CONFIRMOU"),
        label: texts.confirm,
      },
      {
        onClick: customModal.close,
        label: texts.back,
      },
     null,
      null
    );
  };

  const DeleteUserModal = (data: Object) => {
    const texts = Texts["pt-BR"].Main.Users.disableUserModal;
    customModal.setInfos(
      texts.title,
      [texts.text],
      {
        onClick: () => console.log("CONFIRMOU"),
        label: texts.confirm,
      },
      {
        onClick: customModal.close,
        label: texts.back,
      },
      null,
      null
    );
  };

  return (
    <>
      <Styles.Container>
        <CustomText fontSize={2.55} fontFamily={fonts.bold}>
          {texts.titleTable}
        </CustomText>
        <Styles.Line />
        <Table
          id="UsersTable"
          data={data}
          headers={texts.headerTable}
          lastAlign={false}
          renderItemColumns={(item) => [
            item.name,
            item.realValue,
            item.bitCoinValue,
            <DropdownSelectButton
              label={texts.buttonOptions}
              options={[
                {
                  action: () => DeleteUserModal(item),
                  name: texts.editBioCoinModal.title,
                },
                {
                  action: () => DeleteUserModal(item),
                  name: "Excluir Usuário",
                },
              ]}
            />,
          ]}
        />
        <Grid container direction="row" justifyContent="flex-end">
        <TablePagination page={page}
        setPage={setPage}
        totalPages={20}/>
        </Grid>
      </Styles.Container>
    </>
  );
}

export default StatementTable;
