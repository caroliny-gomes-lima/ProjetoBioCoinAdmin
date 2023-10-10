import React, { useContext } from "react";
import { Styles } from "../styles";
import { CustomText, TablePagination, Table } from "../../../components";
import { fonts } from "../../../config";
import DropdownSelectButton from "../../../components/buttons/DropdownSelectButton";
import { customModal } from "../../../components/modals/utils";
import { Texts } from "../../../config";
import { Grid } from "@material-ui/core";
import { DisableUser, DeleteUser } from "./InsideModal";
import { api } from "../../../services";
import { hooks } from "../../../utils";
import { StorageContext } from "../../../contexts/StorageContext";

function UsersTable() {
  const texts = Texts["pt-BR"].Main.Users;
  const [page, setPage] = React.useState(1);
  const { loading, call } = hooks.useRequest();
  const [data, setData] = React.useState([]);

  const ComponentWillMount = async () => {
    call(null, api.getUserDataTeste(), (response) => {
      console.log(response)
      if (response.ok) {
        setData(response.data);
      } else {
        window.alert("error from api");
      }
    });
  };

  React.useEffect(() => {
    ComponentWillMount();
  }, []);

console.log(data)

  const DisableUserModal = (data: Object) => {
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
      <DisableUser item={data}/>,
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
      <DeleteUser item={data}/>,
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
        {!loading ? (  
          <>
        <Table
          id="UsersTable"
          data={data}
          headers={texts.headerTable}
          lastAlign={false}
          renderItemColumns={(item) => [
            item.name,
            item.email,
            item.phone,
            item.dateBirth,
            item.registryDate,
            item.active,
            <DropdownSelectButton
              label={texts.buttonOptions}
              options={[
                {
                  action: () => DisableUserModal(item),
                  name: texts.disableUserModal.title,
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
        totalPages={data.length}/>
        </Grid>
        </>
        ):null}
      </Styles.Container>
    </>
  );
}

export default UsersTable;
