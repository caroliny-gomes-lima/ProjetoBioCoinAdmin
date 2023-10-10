import React, { useContext } from "react";
import { Styles } from "../styles";
import {
  ButtonContained,
  ButtonOutlined,
  CustomText,
  Input,
  InputDate,
  InputEmail,
  Table,
} from "../../../components";
import { fonts } from "../../../config";
import { Texts } from "../../../config";
import { FormFull } from "form-full";
import { StorageContext } from "../../../contexts/StorageContext";
import { Grid } from "@material-ui/core";

function InputsFilter() {
  const { addData } = useContext<any>(StorageContext);
  const texts = Texts["pt-BR"].Main.Users;
  return (
    <>
      <Styles.Container>
        <CustomText fontSize={2.55} fontFamily={fonts.bold}>
          {texts.title}
        </CustomText>
        <Styles.Line />
        <Grid container spacing={1} direction="row" justifyContent="flex-end">
          <FormFull
            onSubmit={(a) => {
              console.log(a);
              const text = Object.entries(a)
                .map(
                  ([key, value]) =>
                    `${key}: ${
                      typeof value === "object"
                        ? Array.isArray(value)
                          ? value.map((item) => item.value)
                          : value instanceof Date
                          ? value.toLocaleString()
                          : value?.value
                        : value
                    }`
                )
                .join("\n");
              addData("Teste", a);
              window.alert(text);
            }}
          >
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Input label={texts.nameInput} name="name" placeholder="Teste" />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3}>
              <InputEmail
                label={texts.emailInput}
                name="email"
                placeholder="Teste"
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3}>
              <Input label={texts.phoneIput} name="phone" placeholder="Teste" />
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={3}>
              <InputDate
                label={texts.dateInput}
                name="dd/mm/yyyy"
                disableError
              />
            </Grid>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "8px",
                marginBottom: "16px",
              }}
            >
              <ButtonOutlined fullWidth={false} action="clear">
                {texts.buttonClear}
              </ButtonOutlined>
              <ButtonContained fullWidth={false} action="submit">
                {texts.buttonSend}
              </ButtonContained>
            </div>
          </FormFull>
        </Grid>
      </Styles.Container>
    </>
  );
}

export default InputsFilter;
